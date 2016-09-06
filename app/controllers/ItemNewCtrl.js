"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location){

  let user = firebase.auth().currentUser;

  $scope.selectedPath = $location.path() === '/items/new';

  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    task: "",
    urgency: "medium",
    uid: user.uid
  };

  $scope.addNewItem = function(){
    ItemStorage.postNewItem($scope.newTask)
    .then(function(){
      $location.url("/items/list");
    });
  };
});