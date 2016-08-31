"use strict";

//A module takes two arguments, the first is the name of it, the second is an array of dependencies. This is kind of like the require idea from Browserify - what do you need to function?. If you don't have any dependencies then you can leave it as an empty array. You should add the ng-app="TodoApp" to the body or html tag in your html.
var app = angular.module("TodoApp", []);

//Now we're adding a property on our app, which is a controller. The first argument is the name and the second is the syntax for a function. You NEED to add $scope inside of the function.
app.controller("NavCtrl", function($scope){
    //Since the scope we're in is NavCtrl, we have access to navItems inside of the HTML where we've declared the ng-controller (which is inside the nav tags)
    $scope.navItems = [
        {name: "Logout"},
        {name: "All Items"},
        {name: "New Items"}
    ];
});

app.controller("TodoCtrl", function($scope){
    //These are items that we'll use later
    $scope.items = [
      {
        id: 0,
        task: "mow the lawn",
        isCompleted: false,
        dueDate: "12/5/17",
        assignedTo: "Greg",
        location: "Joe's house",
        urgency: "low",
        dependencies: "sunshine, clippers, hat, water, headphones"
      },
      {
        id: 1,
        task: "grade quizzes",
        isCompleted: false,
        dueDate: "12/5/15",
        assignedTo: "Christina",
        location: "NSS",
        urgency: "high",
        dependencies: "wifi, tissues, vodka"
      },
      {
        id: 2,
        task: "take a nap",
        isCompleted: false,
        dueDate: "5/21/16",
        assignedTo: "Joe",
        location: "Porch of lakefront cabin",
        urgency: "medium",
        dependencies: "hammock, silence"
      }
    ];

    $scope.newTask = {};
    $scope.showListView = true;
    $scope.newItem = function(){
        $scope.showListView = false;
    };
    $scope.allItems = function(){
        $scope.showListView = true;
    };
    $scope.addNewItem = function(){
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        $scope.items.push($scope.newTask);
        $scope.newTask = {};
    };
});

