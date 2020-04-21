'use strict';

// brings in the assert module for unit testing

// brings in the readline module to access the command line

// use the readline module to print out to the command line

const pigLatininput = () => {
    let word=document.getElementById("PigLatin").value;
    pigLatin(word);
}

const pigLatin = (word) => {
    
  // Your code here
  word = word.trim();
  word = word.toLowerCase();
  let wordarray = word.split("");
  let vowelarray = ["a","e","i","o","u"];
  let isVowelAtFront = false;
  let front = ""; 
  let end = ""; 
  for(let index = 0;index < wordarray.length;index++){
    let letter = wordarray[index];
    if(vowelarray.includes(letter)){

      front = word.substring(0,index);
      end = word.substring(index);
      if(index == 0){
        isVowelAtFront = true;
      }
      break;
    }

  }

  let ending = "ay";
  if(isVowelAtFront){
    ending = "yay";
  }
  word = end + front + ending;
  document.getElementById("result").innerHTML=word;
  return word;

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C







// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.