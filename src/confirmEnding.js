/**
 * Created by Family on 3/7/2018.
 */

module.exports = function confirmEnding(str, target) {

    let strArr = str.split(' ');
    let lastVal = ' ';
    if(strArr.length == 1){
        lastVal = str.slice(-1);
    } else {
        lastVal = strArr.slice(-1);
    }

    return lastVal == target;
};

