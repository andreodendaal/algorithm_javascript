/**
 * Created by Family on 2/3/2018.
 */
module.exports = function factorilizeNumberRecursion(num) {
        if (num === 0)
        return 1;
    else
        console.log(num);
        return num * factorilizeNumberRecursion(num-1);
}


