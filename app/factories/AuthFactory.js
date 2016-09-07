"use strict";

app.factory("AuthFactory", function($window){

//Before we can do this we need to initialize a Firebase app
  let createUser = function(userObject){
    //firebase is universally available because we added it in the script tags. The userObject has the email and password on it.
    return firebase.auth().createUserWithEmailAndPassword(userObject.email, userObject.password)
      .catch(function(error){
        //We can do something with this error if we want
        let errorCode = error.code;
        let errorMessage = error.message;
        // console.log("error", errorCode);
        // console.log("error", errorMessage);
      });
  };

  let loginUser = function(userObject){
    return firebase.auth().signInWithEmailAndPassword(userObject.email, userObject.password)
    .catch(function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      // console.log("error", errorCode);
      // console.log("error", errorMessage);
    });
  };

  let logoutUser = function(){
    return firebase.auth().signOut();
  }

  let isAuthenticated = function(){
    return (firebase.auth().currentUser) ? true : false;
  }

  return {createUser, loginUser, logoutUser, isAuthenticated};

});