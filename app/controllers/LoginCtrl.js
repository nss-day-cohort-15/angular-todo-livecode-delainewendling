"use strict";

app.controller("LoginCtrl", function($scope, $window, AuthFactory){
  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = ()=>{
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then((userData)=>{
      console.log("user data", userData);
      if (userData){
        //This will log the user in after they register
        $scope.login();
      }
    })
    .catch((error)=>{
      console.log(`Error creating user: ${error}`);
    });
  };

  $scope.login = ()=>{
    console.log("you clicked login");
    AuthFactory.loginUser($scope.account)
    .then((data)=>{
      console.log("You are logged in");
      console.log("what are you?", data);
      if (data){
        //You need to use the $window object here to re-route yourself
        $window.location.href = "#/items/list";
      }
    })
    .catch((error)=>{
      console.log(`Error creating user: ${error}`)
    });
  };

});


