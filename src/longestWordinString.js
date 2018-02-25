/**
 * Created by Andre on 2/22/2018.
 */
module.exports = function longestWordinString(str) {
    let longestWordLength = 0;
    let words = str.split(' ');

    // words.forEach(function(element){
    //     if (element.length > longestWordLength){
    //        longestWordLength = element.length;
    //     }
    // });

    for (let word of words){
            if (word.length > longestWordLength){
               longestWordLength = word.length;
            }
    }

return longestWordLength;
}


