/**
 * Created by Andre on 2/24/2018.
 */
module.exports = function largestArrayofArrays(arr) {

    let arrOfLargest = [];
     for (let i = 0; i < arr.length; i++){

         let largest = 0;
         for (let i2 = 0; i2 < arr[i].length; i2++){
             if (largest < arr[i][i2]){
                 largest = arr[i][i2];
             }
         }
         arrOfLargest.push(largest);
    }

return arrOfLargest;
}


