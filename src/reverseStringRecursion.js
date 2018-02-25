/**
 * Created by Andre on 1/28/2018.
 */

function reverseString(str) {

    if (str === "")
        return "";
    else

        return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));


