"use strict";
//Now we're adding a property on our app, which is a controller. The first argument is the name and the second is the syntax for a function. You NEED to add $scope inside of the function.
app.controller("NavCtrl", function($scope){
    //Since the scope we're in is NavCtrl, we have access to navItems inside of the HTML where we've declared the ng-controller (which is inside the nav tags)
    $scope.navItems = [
        {name: "Logout"},
        {name: "All Items"},
        {name: "New Items"}
    ];
});