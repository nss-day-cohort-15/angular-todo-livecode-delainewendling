"use strict";

app.controller("ItemEditCtrl", function($scope, ItemStorage, $location, $routeParams){

  $scope.selectedEdit = $location.path() !== '/items/new';

  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    task: "",
    urgency: "medium"
  };

  $scope.itemEdit = function(){
    ItemStorage.getItemList($scope.$parent.getUser())
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
      $location.path('/items/list');
    });
  };

  $scope.updateIsCompleted = (completedValue, itemId)=>{
    console.log("Is this running?");
    console.log("completed value", completedValue);
    console.log("item id", itemId);
    ItemStorage.patchNewItem(completedValue, itemId)
    .then((response)=>{
      ItemStorage.getItemList(user)
      .then((itemCollectionArr)=>{
        $scope.items = itemCollectionArr;
      })
    })
  }
});