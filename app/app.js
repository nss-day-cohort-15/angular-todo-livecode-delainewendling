"use strict";

//A module takes two arguments, the first is the name of it, the second is an array of dependencies. This is kind of like the require idea from Browserify - what do you need to function?. If you don't have any dependencies then you can leave it as an empty array. You should add the ng-app="TodoApp" to the body or html tag in your html.
//
//ngRoute is the name of the module for angular-route
var app = angular.module("TodoApp", ["ngRoute"])
//.constant allows us to create something that we can use everywhere
.constant('FirebaseURL', "https://todo-list-32a40.firebaseio.com/");

//If you're using a fat arrow and all you're doing is returning something from it then you don't need curly brackets or the word return
let isAuth = (AuthFactory)=> new Promise((resolve, reject)=>{
    //This will be a boolean and it will resolve if its true, meaning you can access the URLs below
    if(AuthFactory.isAuthenticated()){
      resolve();
    } else {
      reject();
    }
  });

//We get routeProvider from ngRoute
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/items/list', {
      //U is captalized but r and l are not!
      //We don't want people to go here unless they are logged in
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl',
      resolve: {isAuth}
    })
    .when('/items/new', {
      templateUrl: 'partials/item-form.html',
      controller: 'ItemNewCtrl',
      resolve: {isAuth}
    })
    .when('/items/edit/:itemId', {
      templateUrl: 'partials/item-form.html',
      controller: 'ItemEditCtrl',
      resolve: {isAuth}
    })
    //:itemId stands in as a placeholder. We can use this to add the id to the route
    .when('/items/view/:itemId', {
      templateUrl: 'partials/item-details.html',
      controller: 'ItemViewCtrl',
      resolve: {isAuth}
    })
    .otherwise('/');
});

//Initializes Firebase right away
app.run(($location, FBCreds)=>{
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };

  firebase.initializeApp(authConfig);

});




