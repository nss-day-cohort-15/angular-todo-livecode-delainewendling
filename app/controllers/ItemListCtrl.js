"use strict";

//We want to use the data from the factory so we need to inject that data here
app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData){

  $scope.complete = {
    value: false
  }

  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser()

  firebase.auth().onAuthStateChanged(function(){
    ItemStorage.getItemList(user)
    .then((itemCollectionArr)=>{
      $scope.items = itemCollectionArr;
    });
  });

  //Create a function that deletes that item
  $scope.itemDelete = (itemId)=>{
    ItemStorage.deleteItem(itemId)
    .then((response)=>{
      ItemStorage.getItemList(user)
      .then ((itemCollectionArr)=>{
        $scope.items = itemCollectionArr;
      });
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
      });
    });
  };

});