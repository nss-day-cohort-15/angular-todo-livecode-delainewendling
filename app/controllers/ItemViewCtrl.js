"use strict";

app.controller("ItemViewCtrl", function($scope, ItemStorage, $routeParams){
  //$routeParams gives us access to whatever is in the URL bar
  $scope.items = [];

  ItemStorage.getItemList($scope.$parent.getUser())
  .then((itemCollectionArr)=>{
    $scope.items = itemCollectionArr;
    $scope.selectedItem = $scope.items.filter(function(item){
      return item.id === $routeParams.itemId;
    })[0];
  });

});