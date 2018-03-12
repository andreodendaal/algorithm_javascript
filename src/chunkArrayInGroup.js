/**
 * Created by Andre on 3/11/2018.
 */
module.exports = function chunkArrayInGroup(arr, size) {

    let twoDArray = [];
    let oneDArray = [];
    let ctr = 0;

     for (let i = 0; i < arr.length; i++){
         ctr += 1;
         if (ctr <= size) {
             oneDArray.push(arr[i]);
            } else {
             twoDArray.push(oneDArray);
             oneDArray = [];
             oneDArray.push(arr[i]);
             ctr = 1;
            }
         }

    if (ctr != 0){
        twoDArray.push(oneDArray);
    }

    return twoDArray;
};


