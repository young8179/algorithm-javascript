// write a function that takes in an array of distinct integers and a target sum
// if any two numbers in the input array sum up to the target sum return the two numbers
function twoNumberSum(array, targetSum) {
    //essentially, setting up two "pointers", i and j
    //but for now i, and setting the - 1 because im going to start pointer j on the last integer
	for (let i = 0; i < array.length - 1; i++) {
        //setting varialbe for wherever the pointer is at the given time
        const firstNum = array[i];
        //now for pointer j, which is always one ahead of pointer i
	for (let j = i + 1; j < array.length; j++) {
        //setting varialbe for wherever the pointer is at the given time
        const secondNum = array[j];
        //if the firstnum and secondnum equal the target sum
	if (firstNum + secondNum === targetSum) {
        //return new array with the two numbers that equaled the target sum
		return [firstNum, secondNum]
			}
		}
    }
    //return it!
	return [];
}
//given two non empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one
//example: // array = [5, 1, 22, 25, 6, -1, 8, 10]
//sequence = [1, 6, -1, 10]
//output = true
//the reason its true is because the 1, 6, -1, and 10 are in the same order as the array, regardless of the fact that is has fewer values. its really just an order question
function isValidSubsequence(array, sequence) {
    //setting up my pointers, one for the array and one the sequence
	let arrIdx = 0;
    let seqIdx = 0;
    // while arrIdx pointer never exceeds the array length and same for the seqIdx and sequence length
	while (arrIdx < array.length && seqIdx < sequence.length) {
        // if the arrIdx and seqIdx ever match as the same number, then move on in the list in the array and the sequence
		if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
		arrIdx++;
    }
    //this will basically return true or false based on the condition that seqIdx is absolutely equal to sequence.length
	return seqIdx === sequence.length;
}