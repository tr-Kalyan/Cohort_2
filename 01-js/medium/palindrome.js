/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strippedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Reverse the stripped string
  let reversedStr = strippedStr.split('').reverse().join('');
  // Check if the stripped string is equal to its reversed version
  return strippedStr === reversedStr;
  }

module.exports = isPalindrome;
