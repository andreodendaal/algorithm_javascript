/**
 * Created by Andre on 1/28/2018.
 */
module.exports = function reverseString(str) {
    var toStr = '';
    for(i = 0; i < str.length; i++) {
        toStr = str[i] + toStr;
    }
    return toStr;
}


