//Exercise: Defensive programming
//Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both
//In other words, you are assuming that things will go wrong and you are proactive in thinking about such scenarios before they happen

//1)

// function letterFinder(word, match) {
//     for(i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             //if the current character at position i in the word is equal to the match
//             console.log('Found the', match, 'at', i)
//         } else {
//             console.log('--No match found at', i)
//         }
//     }
// }

//2)

// function letterFinder(word, match) {
//     for(i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             //if the current character at position i in the word is equal to the match
//             console.log('Found the', match, 'at', i)
//         } else {
//             console.log('--No match found at', i)
//         }
//     }
// }
// letterFinder("Raj","R")

//3)

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;
  if (condition1 && condition2) {
    for (i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("--No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct argumrnts of the function");
  }
}
letterFinder([], []);
letterFinder("cat", "c");
