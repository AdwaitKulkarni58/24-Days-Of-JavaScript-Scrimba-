const input = [1, [4,5], [4,7,6,4], 3, 5];

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    let flattenedArr = [];
    for (let innerElement of arr) {
        if (Array.isArray(innerElement)) {
            for (let element of innerElement) {
                flattenedArr.push(element);
            }
        } else {
            flattenedArr.push(innerElement);
        }
    }
    return flattenedArr;
    
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
console.log(flatten(input));
