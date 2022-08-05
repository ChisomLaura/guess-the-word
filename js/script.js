const guessedLettersElement = document.querySelector (".guessed-letters");
const guessButton = document.querySelector (".guess");
const letterInput = document.querySelector (".letter");
const wordInProgress = document.querySelector (".word-in-progress");
const remainingGuessesElement = document.querySelector (".remaining");
const remainingGuessesSpan = document.querySelector (".remaining span");
const message = document.querySelector (".message");
const hiddenButton = document.querySelector (".play-again");

const word = "magnolia";

const placeholder = function (word){
const placeholderLetters = [];
for (const letter of word) {
    console.log (letter);
    placeholderLetters.push ("●");
}
wordInProgress.innertext = placeholderLetters.join ("");
};

placeholder (word);

guessButton.addEventListener ("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value ;
    console.log (guess);
    letterInput.value ="";
});