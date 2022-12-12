function reverseString(arr){
    let characters = arr.split('');
    let reversedCharacters = [];
    for (let j = characters.length - 1; j >= 0; j--) {
        reversedCharacters.push(characters[j]);
    }
    return reversedCharacters.join('');
}


function reverseStringsInArray(arr){
    return arr.map(string => reverseString(string));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));
