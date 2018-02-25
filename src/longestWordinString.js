/**
 * Created by Andre on 2/22/2018.
 */
module.exports = function longestWordinString(str) {
    var longestWordLength = 0;
    var words = str.split(' ');

    words.forEach(function(element){
        if (element.length > longestWordLength){
           longestWordLength = element.length;
        }
    });

return longestWordLength;
};


