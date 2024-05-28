/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
Whenever you see a question, don't just jump in to the coding part
Step 1: Understand the logic for the straight forward question
Step 2: Write Code
Step 3: Before running code think of edge cases and edit the if required
Repeat this process,and you will automatically become expert in problem solving
*/
function isAnagram(str1,str2){
  str1 = str1.toLowerCase().split('').sort().join('');
  str2 = str2.toLowerCase().split('').sort().join('');
  if (str1==str2){
      return true
  }else{
      return false
  }
}

module.exports = isAnagram;
