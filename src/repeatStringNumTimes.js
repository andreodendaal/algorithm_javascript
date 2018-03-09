/**
 * Created by Andre on 3/8/2018.
 */
module.exports = function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num > 0){
        return str.repeat(num);
    } else {
        return "";
    }
};
