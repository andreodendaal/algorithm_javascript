/**
 * Created by Andre on 2/24/2018.
 */
module.exports = function titleCaseSentence(str) {

    let words = str.split(' ');
    let upperWord =  '';
    let upperSentence = '';


    for (let i = 0; i < words.length; i++){
        let word = words[i];
        if (i == words.length - 1) //last word
        {
            upperWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            upperWord = word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
        }
        upperSentence = upperSentence + upperWord;
    }

return upperSentence;
}


