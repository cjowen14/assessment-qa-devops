const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray contain all the same values that were passed in', () => {
        let array = [1,2,3,4,5];
        let newArray = shuffleArray(array);
        for(let i = 0; i < newArray.length; i++){
            expect(newArray).toContain(array[i]);
        }
    })

    test('shuffleArray returns correct length', () => {
        let arrayLength = shuffleArray([1,2,3,4,5]).length;
        expect(arrayLength).toEqual(5);
    })
})