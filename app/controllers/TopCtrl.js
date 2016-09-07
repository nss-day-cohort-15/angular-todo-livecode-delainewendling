"use strict";

app.controller("TopCtrl", function($scope, $location, $window, AuthFactory){
  let currentUser = null;
  //Setting the isLoggedIn property to false for right now (it's the default)
  $scope.isLoggedIn = false;
  //This is not an angular method so the state on the $scope object will change but the view will not necessarily change like it would if Angular were running a native function/method
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      currentUser = user.uid;
      console.log("Current user logged is?", user.uid);
      $scope.isLoggedIn = true;
      //This will manually start the digest cycle
      $scope.$apply();
    } else {
      currentUser = null;
      console.log("no user");
      $scope.isLoggedIn = false;
      $window.location.href = '#/login';
    }
  });

  $scope.getUser = function(){
    return currentUser;
  }

  $scope.logout = function(){
    AuthFactory.logoutUser()
    .then((data)=>{
      console.log("logged out");
    });
  };

});