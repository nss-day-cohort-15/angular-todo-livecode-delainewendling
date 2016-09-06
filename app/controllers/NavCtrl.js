"use strict";
//Now we're adding a property on our app, which is a controller. The first argument is the name and the second is the syntax for a function. You NEED to add $scope inside of the function.
app.controller("NavCtrl", function($scope, SearchTermData, $location){
    //Since the scope we're in is NavCtrl, we have access to navItems inside of the HTML where we've declared the ng-controller (which is inside the nav tags)
    //$location is a predefined provider in Angular. You can find different things using location
    $scope.searchText = SearchTermData;
    // $scope.navItems = [
    //     //$parent is going to use a higher scope that it will inherit from.
    //     {name: "Login", url: '#/login', showState: "!$parent.isLoggedIn"},
    //     {name: "Logout", url: '#/logout', showState: "$parent.isLoggedIn"},
    //     {name: "All Items", url: '#/items/list', showState: "$parent.isLoggedIn"},
    //     {name: "New Items", url: '#/items/new', showState: "$parent.isLoggedIn"}
    // ];

    $scope.isActive = (viewLocation) => viewLocation === $location.path();
});