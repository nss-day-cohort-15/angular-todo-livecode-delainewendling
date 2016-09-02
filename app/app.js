"use strict";

//A module takes two arguments, the first is the name of it, the second is an array of dependencies. This is kind of like the require idea from Browserify - what do you need to function?. If you don't have any dependencies then you can leave it as an empty array. You should add the ng-app="TodoApp" to the body or html tag in your html.
//
//ngRoute is the name of the module for angular-route
var app = angular.module("TodoApp", ["ngRoute"])
//.constant allows us to create something that we can use everywhere
.constant('FirebaseURL', "https://todo-list-32a40.firebaseio.com/");

//We get routeProvider from ngRoute
app.config(function($routeProvider){
  $routeProvider
    .when('/items/list', {
      //U is captalized but r and l are not!
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl'
    })
    .when('/items/new', {
      templateUrl: 'partials/item-form.html',
      controller: 'ItemNewCtrl'
    })
    //:itemId stands in as a placeholder.
    .when('/items/view/:itemId', {
      templateUrl: 'partials/item-details.html',
      controller: 'ItemViewCtrl'
    })
    .otherwise('/items/list');
});
