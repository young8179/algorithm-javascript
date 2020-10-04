// 1. Write a JavaScript function to check whether an input is an array or not.
function checkArray(input) {
    if (Array.isArray(obj)) {
      return true;
    } else {
      return false;
    }
  }
  
  // 2. Write a JavaScript function to get the first 'n' elements of an array.
  function getFirst(array, numItems) {
    return array.slice(0, numItems);
  }
  
  // 3. Write a simple JavaScript program to join all elements of the following array into a string.
  function arrayToString(array) {
    return array.join('')
  }
  
  // 4. Write a JavaScript program which accept a number as input and insert dashes (-) between each number.
  // const numbers = 8675309
  function dashNumber(number) {
    const numberAsArray = number.toString().split();
    return numberAsArray.join('-');
  }
  
  // 5. Write a JavaScript program to sort the items of an array.
  function sortArray(array) {
    // The 'sort' method is mutable (i.e. it'll mess with the original array).
    // We can fix that by using the 'spread' operator to copy all the values
    // into a new array, and then assign that to a new variable.
    const newArray = [...array]; // clone array
    newArray.sort(); // sort cloned array
    return newArray; // return sorted, cloned array
  }
  
  // 6. Write a JavaScript program to find the most frequent item of an array.
  // const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  function mostFreq(array) {
    let elementMap = {};
    let maxOccurance = 0;
    let maxElement = array[0];
  
    array.forEach(el => {
      if (elementMap[el]) {
        elementMap[el]++
      } else {
        elementMap[el] = 1;
      }
  
      if(modeMap[el] > maxOccurance) {
        maxElement = el;
        maxOccurance = elementMap[el];
      }
    })
  
    return maxElement;
  }
  
  // 7. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input The Quick Brown Fox the output should be tHE qUICK bROWN fOX.
  function swapCase(inputString) {
    let outputString = '';
    inputString.split().forEach(character => {
      if (character == character.toUpperCase()) {
        outputString += character.toLowerCase();
      } else if (character == character.toLowerCase()){
        outputString += character.toUpperCase();
      }
    })
  }
  
  // 8. Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops.
  // const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  function printNestedArray(array) {
    array.forEach(item => {
      item.forEach(nestedItem => {
        console.log(nestedItem);
      })
    })
  }
  
  // 9. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
  function removeDuplicates(array) {
    const deDupedArray = [];
    array.forEach(el => {
      const normalizedEl = (el + '').toLowerCase();
      if (deDupedArray.indexOf(normalizedEl) !== -1) {
        deDupedArray.push(normalizedEl)
      }
    })
    return deDupedArray;
  }
  
  // 10. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
  // array1 = [1,0,2,3,4];
  // array2 = [3,5,6,7,8,13];
  function sumIndices(array1, array2) {
    const summedArray = [];
    const maxLength = array1.length > array2.length ? array1.length : array2.length;
    for (let i = 0; i < maxLength; i++) {
      summedArray[i] = 0;
      if (typeof array1[i] === 'number') {
        summedArray[i] += array1[i]
      }
      if (typeof array2[i] === 'number') {
        summedArray[i] += array2[i]
      }
    }
    return summedArray;
  }
  
  // 11. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
  // const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
  function removeFalsy(array) {
    return array.filter((el) => {
      return !!el;
    })
  }
  
  // 12. Write a JavaScript function to merge two arrays and removes all duplicates elements.
  // const arr1 = [1, 2, 3];
  // const arr2 = [2, 30, 1];
  function mergeAndDeDupe(array1, array2) {
    const mergedArray = array1.concat(array2);
    return removeDuplicates(mergedArray);
  }
  
  // use map() to solve these.
  // 13. Make an array of numbers that are doubles of the first array
  function doubleArray(array) {
    return array.map((el) => {
      return el * 2;
    });
  }
  
  function doubleArrayShorthand(array) {
    return array.map(el => el * 2);
  }
  
  // 14. Take an array of numbers and make them strings.
  function numToStrings(array) {
    return array.map(el => el + '')
  }
  
  // 15. Capitalize each of an array of names.
  function capitalizeArray(array) {
    return array.map(stringItem => {
      return stringItem.charAt(0).toUpperCase() + stringItem.slice(1);
    })
  }
  
  // use filter() to solve this.
  // 16. Find all the strings in a array thats less than 5 letters
  const arr = ["Sometimes", "I", "give", "myself", "the", "creeps", "Sometimes", "my", "mind","plays", "tricks", "on", "me", "It", "all", "keeps", "adding", "up", "I", "think", "I'm", "cracking", "up", "Am", "I", "just", "paranoid?" ]
  function removeShortWords(array) {
    return array.filter(el => {
      if (el.length > 5) {
        return true
      } else {
        return false
      }
    })
  }
  
  function removeShortWordsShorthand(array) {
    return array.filter(el => el.length > 5);
  }