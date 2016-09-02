"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location){
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    task: "",
    urgency: "medium"
  };

  $scope.addNewItem = function(){
    ItemStorage.postNewItem($scope.newTask)
    .then(function(){
      $location.url("/items/list");
    });
  };

  $scope.saveNewItem = function(){
    ItemStorage.putNewItem($scope.newTask)
    .then(function(){
      $location.path('./items/list');
    })
  };

});