/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max_ele = numbers[0];
    n = numbers.length
    for (let i=0; i < n; i++){
        if (numbers[i] > max_ele){
            max_ele = numbers[i];
        }
    }
    return max_ele;
}

module.exports = findLargestElement;