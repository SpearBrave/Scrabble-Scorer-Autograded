// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");
let word = ""
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
const vowelPointStructure = {
   3: ['A', 'E', 'I', 'O', 'U']
 };

 function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {

		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

 
//console.log(oldScrabbleScorer(word));

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
 
function initialPrompt() {
   return input.question("Let's play some Scrabble! Enter a word to score: ").toUpperCase();
  
};

function simpleScorer(word){
   word = word;
   let letterPoints=0;
   
   for (let i= 0;i < word.length; i++){
   
      letterPoints =i+1;
      }
     return(letterPoints);
   }

function vowelBonusScorer(word){
   word = word.toUpperCase();
   let letterPoints=0;
   for (let j= 0;j<word.length;j++){
      for (const pointValue in vowelPointStructure) {
         if (vowelPointStructure[pointValue].includes(word[j])) {
            letterPoints +=  Number(`${pointValue}`)
          }else letterPoints += Number(`${"1"}`)
     
   }
   }return(letterPoints);
}
function scrabbleScorer(word){

   let letterPoints = 0;

   for (let z = 0; z < word.length; z++) {
       const letter = word[z].toLowerCase();
       if (newPointStructure.hasOwnProperty(letter)) {
           letterPoints += Number(newPointStructure[letter]);
       }
   }

   return letterPoints;
}
const scoringAlgorithms=[
  
{
   name: "simpleScorer",
   description:"Each letter is worth 1 point.",
   scorerFunction:simpleScorer
},
 {
   name:"vowelBonusScorer",
   description:"Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction:vowelBonusScorer
 
} 
,{
   name:"scrabbleScorer",
   description:"The traditional scoring algorithm.	",
   scorerFunction:scrabbleScorer

}
];

function scorerPrompt(word) {
   let answer = input.question("select game mode... \npress 0 for SIMPLE\npress 1 for VOWEL\npress 2 for SCRABBLE.......");
   let game= "";
    word = initialPrompt();
if (answer == 0){
   console.log(scoringAlgorithms[0].scorerFunction(word))
}else if (answer == 1){
   console.log(scoringAlgorithms[1].scorerFunction(word))
}else if (answer == 2){
   console.log(scoringAlgorithms[2].scorerFunction(word))
}
return game;
}

let newPointStructure = transform(oldPointStructure);

function transform(obj) {
   let lowerCasePoints = {};

   for (const pointValue in oldPointStructure) {
       let letters = oldPointStructure[pointValue];

       for (let i = 0; i < letters.length; i++) {
           const letter = letters[i].toLowerCase();
           lowerCasePoints[letter] = Number(pointValue);
       }
   }

   return lowerCasePoints;
}

function runProgram() {
   scorerPrompt();
   
};

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
    