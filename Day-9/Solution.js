function capitalizeWord(word){
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

function toTitleCase(str){
    let newStr = "";
    let [...words] = str.match(/\b(\w+)'?(\w+)?\b/g);
    for (let word of words) {
        newStr += capitalizeWord(word) + " ";
    }
    return newStr;
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
