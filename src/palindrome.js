/**
 * Created by Family on 2/3/2018.
 */

module.exports = function palindrome(str) {
    var reverse_str = require('../src/reverseString.js');
    var str = str.replace(/[_\W+]/g, '');
    var strLower = str.toLowerCase();
    var result = reverse_str(strLower);

    if (result === strLower){
        return true;
    } else {
        return false;
    }

};

