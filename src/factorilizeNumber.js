/**
 * Created by Family on 2/3/2018.
 */
module.exports = function factorilizeNumber(num) {
    var factorial = 1;
    for(var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
