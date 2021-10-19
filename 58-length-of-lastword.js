// Given a string s consisting of some words separated by some number of spaces, 
// return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    const array = s.split(" ")
    
    for (let i = array.length - 1; i >= 0; i--) {
        const lastWord = array[i]
        
         if (lastWord !== "")  return lastWord.length  
    }
};

console.log(lengthOfLastWord(" this  is   an   example   "))