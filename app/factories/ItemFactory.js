"use strict";

//$q is a library of promises. $http is the Angular way of doing ajax calls
app.factory("ItemStorage", ($q, $http)=>{

  let getItemList = function(){
    let items = [];
    //This is the Angular way of doing promises
    return $q((resolve, reject)=>{
      $http.get("../../data/itemList.json")
      //Angular does the parsing of the object for you, just like AJAX or getJSON
      .success((itemObject)=>{
        resolve(itemObject);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  return {getItemList};
});