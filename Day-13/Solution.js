const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    if (word.substring(0, 1) == ":" && word.substring(word.length - 1) == ":") {
        word = word.substring(1, word.length - 1);
        if (word in emojis) {
            return emojis[word];
        } 
    }
    return word;
}

function emojifyPhrase(phrase){
    let arrOfStrings = phrase.split(" ");
    let newPhrase = arrOfStrings.map(word => emojifyWord(word)).join(" ");
    return newPhrase;
}



console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
