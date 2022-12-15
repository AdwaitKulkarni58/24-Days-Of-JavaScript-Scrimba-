function isPalindrome(str){
    let reverseStrChars = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStrChars.push(str[i]);
    }
    let reverseString = reverseStrChars.join('');
    return str == reverseString;
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("noon"));
console.log(isPalindrome("kayak"));
