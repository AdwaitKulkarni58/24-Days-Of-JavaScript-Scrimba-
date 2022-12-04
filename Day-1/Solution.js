function panic(input) {
    let words = input.split(" ").length;
    let new_input = "";
    if (words == 1) {
        new_input = input.toUpperCase() + "!";
    } else {
        let emoji = "😱";
        new_input = input.toUpperCase().split(' ').join(" " + emoji + " ") + '!';
    }
    return new_input;
}

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
