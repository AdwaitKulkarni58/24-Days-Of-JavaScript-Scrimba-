function countVowelConsonant(str) {
  // write code here
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let arrOfChars = str.split('');
  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(arrOfChars[i])) {
          count += 1;
      } else {
          count += 2;
      }
  }
  return count;
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});
