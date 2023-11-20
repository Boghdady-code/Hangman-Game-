let letters = "abcdefghijklmnopqrstuvwxyz"; // Letters Variable.

let lettersArry = Array.from (letters); // Method to get an array from the Letters Variable.

console.log (lettersArry); 

let lettersContainer = document.querySelector (".the-letters"); //Selecting the letters Container.

lettersArry.forEach (function (letter) { 
  let span = document.createElement ("span"); // Creating a span to store the letters inside it.
  let letterText = document.createTextNode (letter); // Creating the Text Node for the Letters.
  span.appendChild (letterText); // Appending the letter to span.
  lettersContainer.appendChild (span); // Appending the span to the letters Container. 
  span.className = "letter-box"; // Adding a class name to span.
});


// Adding Words object.
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};


let wordsKeys = Object.keys (words); // getting keys from object
let randomWordsKeysNumber = Math.floor(Math.random () * wordsKeys.length); // generating random number depending on keys array length
let randomWordsKeysValue = wordsKeys[randomWordsKeysNumber]; // adding random number to keys
let valuesArry = words[randomWordsKeysValue]; // getting values 
let randomWordsValueNumber = Math.floor(Math.random() * valuesArry.length); // generating random number depending on value array length
let randomWordsValueValue = valuesArry[randomWordsValueNumber]; // adding random number to values 
// console.log (randomWordsKeysValue);
console.log (randomWordsValueValue);
document.querySelector (".container .game-info .category span").innerHTML = randomWordsKeysValue; // adding category name to game info span


let generatedValueArray = Array.from (randomWordsValueValue); // getting array from selected value
let guessContainer = document.querySelector (".container .letter-guess"); // selecting the guess container

console.log (generatedValueArray);

generatedValueArray.forEach (function (letter) {  // Making loop on Array to create span for each letter
  let letterSpan = document.createElement ("span");
  
  if (letter === " ") {  // checking if the letter is space 
    letterSpan.className = "with-space"; 
  }

  guessContainer.appendChild (letterSpan); // appending span to guess container 
}); 

allSpans = document.querySelectorAll (".container .letter-guess span");
wrongAttempts = 0;

document.addEventListener ("click", function(e) {
  let status = false;

  if (e.target.className === "letter-box") {

    e.target.classList.add("clicked");

    let clickedLetter = e.target.innerHTML.toLowerCase();

    generatedValueArray.forEach (function (wordLetter, wordIndex){

      if (clickedLetter == wordLetter || clickedLetter.toUpperCase() == wordLetter) {
        status = true;

        allSpans.forEach (function (span, spanIndex) {

          if (wordIndex === spanIndex) {

            span.innerHTML = wordLetter;

          }
        })

      }
    })

      if (status != true) {
    wrongAttempts++;
    let hangmanDraw = document.querySelector (".container .row .hangman-draw");
    hangmanDraw.classList.add (`wrong-${wrongAttempts}`);
    document.getElementById("fail").play();
    if (wrongAttempts === 9) {
      endGame ();
      lettersContainer.classList.add ("finished");
      
    }

  } else {
    document.getElementById("success").play();
    
  }
  }

})


function endGame () {
  popup = document.createElement ("div");
  popupText = document.createTextNode (`Game Over, The Answer is ${randomWordsValueValue}`);
  popup.appendChild (popupText);
  document.body.appendChild (popup);
  popup.classList.add ("popup");
}





// ---------












