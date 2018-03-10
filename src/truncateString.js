/**
 * Created by Family on 3/9/2018.
 */


module.exports = function truncateString(str, num) {
    // Clear out that junk in your trunk
    let strSlice = 0;
    let truncateStr = "";

    if (num == str.length || num > str.length){
        truncateStr = str;
    }
    else if (num > 3){
        strSlice = num - 3;
        truncateStr = str.slice(0, strSlice) + "...";
    } else {
        strSlice = num ;
        truncateStr = str.slice(0, strSlice) + "...";
    }
    return truncateStr;
};

