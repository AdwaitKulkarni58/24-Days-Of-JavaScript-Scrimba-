function whisper(sentence) {
    let lowercase_sentence = sentence.toLowerCase();
    let sentence_with_shh = "shh... " + lowercase_sentence;
    if (sentence_with_shh.endsWith("!")) {
        sentence_with_shh = sentence_with_shh.slice(0, -1);
    }
    return sentence_with_shh;
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
