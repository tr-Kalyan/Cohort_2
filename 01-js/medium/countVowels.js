/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(A) {
    //let ascii_codes = [97,101,105,111,117,65,69,73,79,85]
    let vowels_ = ['a', 'e', 'i', 'o', 'u'];
    let B = A.toLowerCase();
    let N = A.length;
    let count = 0;
    for (let i = 0; i < N; i++){
      if (vowels_.includes(B[i])){
        count +=1;
      }
    }
    return count;
}
module.exports = countVowels;