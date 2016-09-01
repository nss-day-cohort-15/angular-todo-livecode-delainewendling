"use strict";

//We want to use the data from the factory so we need to inject that data here
app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData){

  $scope.searchText = SearchTermData;

  ItemStorage.getItemList()
  .then((itemCollection)=>{
    $scope.items = itemCollection;
  });

});