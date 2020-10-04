function sumZero(sortedArr) {
    // loop through the arr, length-1 because we are going to use an inner loop that searches until the end
    for (let i=0; i<sortedArr.length - 1; i++) {
        // loop through a second time for each number, starting at one more than the previous loop
        for (let j=i+1; j<sortedArr.length; j++) {
            // if numbers add up to zero, return those numbers in an array
            if (sortedArr[i] + sortedArr[j] === 0) {
                return [sortedArr[i], sortedArr[j]];
            }
        }
    }
    // if it went through the entire array and didn't find a match, return undefined
    return undefined;
}
let sortedArr = [-3, -2, -1, 0, 3, 4, 4, 5]; // [-3, 3]
console.log(sumZero(sortedArr)); // O(n^2) since has nested for loops


/*
Since we have a sorted array, we can use this fact to move from the outside to the middle.
If the first number and last number add up to something bigger than zero, then we need to move
the bigger number index -1 to make the big number smaller.
If the first number and last number add up to something less than zero, then we need to move
the smaller number index +1 to make the smaller number bigger.
If we get to the middle and they aren't equal, then we stop looking.
*/
function sumZero2(sortedArr) {
    // do the same thing as before but do it in one for loop
    // define indexes that we are going to be changing inside the loop
    let smallIndex = 0;
    let bigIndex = sortedArr.length - 1
    // keep looping until smallIndex and bigIndex are the same
    while (smallIndex <= bigIndex) {
        // since we need to check the numbers multiple times, makes sense to just define them as variables for readability
        let smallNumber = sortedArr[smallIndex];
        let bigNumber = sortedArr[bigIndex];
        // if numbers match, great! return them
        if(smallNumber + bigNumber === 0) {
            return [smallNumber, bigNumber];
            // if the sum of the numbers is greater than zero, make the big number smaller
        } else if (smallNumber + bigNumber > 0) {
            bigIndex -= 1;
            // if the sum of the numbers is less than zero, make the little number bigger
        } else {
            smallIndex += 1;
        }
    }
    // if you couldn't find a sum that adds up to zero, return undefined
    return undefined;
}

console.log(sumZero2(sortedArr)); // O(n) as it only loops through the array once


/*
If we're clever, we can work through the array just one time even with an unsorted array and
still be able to find the solution. The idea is that to get to zero, we just need to know what previous
numbers we have and find a matching pair that adds to zero. This is a great time to use objects to "remember"
*/
function unsortedSumZero(unsortedArr) {
    // initialize our object
    let knownNumbers = {}
    // just need to loop through each number in the arr
    for (let number of unsortedArr) {
        // if a previous number matches the current number, and they add up to zero, return them
        if (knownNumbers[number] + number === 0) {
            // this guarantees correct order of numbers as smallest first, then greatest
            return [Math.abs(number) * -1, Math.abs(number)];
        } else {
            // lets you look for missing counterpart by looking for negative number in object
            knownNumbers[number * - 1] = number;
        }
    }
    return undefined;
}
const arrrr = [1, 3, 5, -1, -3, -1]
console.log(unsortedSumZero(arrrr)); // O(n) and works on something unsorted (sort of, doesn't necessarily find the first item in the array that is unsorted, will need to refactor)