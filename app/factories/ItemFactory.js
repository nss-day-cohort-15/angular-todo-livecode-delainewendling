"use strict";

//$q is a library of promises. $http is the Angular way of doing ajax calls
app.factory("ItemStorage", ($q, $http, FirebaseURL, $location)=>{


  let getItemList = function(userId){
    // let userId = firebase.auth().currentUser.uid;
    let items = [];
    //This is the Angular way of doing promises
    return $q((resolve, reject)=>{
      $http.get(`${FirebaseURL}/items.json?orderBy=\"uid\"&equalTo=\"${userId}\"`)
      //Angular does the parsing of the object for you, just like AJAX or getJSON
      .success((itemObject)=>{
        if (itemObject !== null){
          Object.keys(itemObject).forEach((key)=>{
            itemObject[key].id = key;
            items.push(itemObject[key]);
          });
          resolve(items);
        } else {
          resolve(items);
        }
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let postNewItem = (newItem)=>{
    return $q((resolve, reject) =>{
      $http.post(`${FirebaseURL}/items.json`, JSON.stringify(newItem))
        .success((objFromFirebase)=>{
          resolve(objFromFirebase);
        })
        .error((error)=>{
          reject(error);
        });
    });
  };

  let patchNewItem = (newValue, itemId)=>{
    console.log("new value", newValue)
    return $q((resolve, reject)=>{
      $http.patch(`${FirebaseURL}/items/${itemId}.json`, JSON.stringify({isCompleted: newValue}))
      .success((newObjFromFirebase)=>{
        resolve(newObjFromFirebase);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let deleteItem = (itemId)=>{
    return $q((resolve, reject)=>{
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success((objFromFirebase)=>{
        //This is the deleted item
        resolve(objFromFirebase);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let putNewItem = (itemId, editItem)=>{
    return $q((resolve, reject)=>{
      $http.put(`${FirebaseURL}/items/${itemId}.json`, JSON.stringify(editItem))
      .success((savedItem)=>{
        console.log("successfully edited!");
        resolve(savedItem);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  return {getItemList, postNewItem, deleteItem, putNewItem, patchNewItem};
});