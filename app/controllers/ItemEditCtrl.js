"use strict";

app.controller("ItemEditCtrl", function($scope, ItemStorage, $location, $routeParams){
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    task: "",
    urgency: "medium"
  };

  $scope.itemEdit = function(){
    ItemStorage.getItemList()
    .then((itemCollectionArr)=>{
      $scope.items = itemCollectionArr;
      $scope.newTask = $scope.items.filter(function(item){
        return item.id === $routeParams.itemId;
      })[0];
      console.log("new task", $scope.newTask);
    });
  };

  $scope.itemEdit();

  $scope.saveNewItem = function(){
    ItemStorage.putNewItem($routeParams.itemId, $scope.newTask)
    .then(function(editedItem){
      resolve(editedItem);
    })
  };

});