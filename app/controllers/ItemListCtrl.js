"use strict";

//We want to use the data from the factory so we need to inject that data here
app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData){

  $scope.searchText = SearchTermData;

  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      ItemStorage.getItemList()
      .then((itemCollectionArr)=>{
        $scope.items = itemCollectionArr;
      })
    }
  });

  //Create a function that deletes that item
  $scope.itemDelete = (itemId)=>{
    ItemStorage.deleteItem(itemId)
    .then((response)=>{
      ItemStorage.getItemList()
      .then ((itemCollectionArr)=>{
        $scope.items = itemCollectionArr;
      });
    });
  };

});