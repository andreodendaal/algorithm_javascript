/**
 * Created by Family on 3/7/2018.
 */

module.exports = function confirmEnding(str, target) {

    let strArr = str.split(' ');
    let arrSlice =  target.length * -1;
    let arrLast = strArr.length - 1;
    let lastVal =  strArr[arrLast].slice(arrSlice);

    return lastVal == target;
};

