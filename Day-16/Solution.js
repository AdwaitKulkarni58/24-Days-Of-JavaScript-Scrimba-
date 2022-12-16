function insertDashes(arr) {
    // write code here
    let charArr = arr.split('');
    for (let i = 0; i < arr.length - 1; i++) {
        if (charArr[i + 1] != " " && charArr[i] != " ") {
            charArr[i] = charArr[i] + "-";   
        }
    }
    return charArr.join('');
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "ab a caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b a c-a-b-a");
    });
});
