"use strict";

app.controller("TodoCtrl", function($scope, $location){

    $scope.newTask = {};

    $scope.addNewItem = function(){
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        $scope.items.push($scope.newTask);
        $scope.newTask = {};
    };
});

