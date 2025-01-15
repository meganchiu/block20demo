// initialize words array - hold all words we enter 
const words = []

const form = document.querySelector('form');
form.addEventListener('submit', addWord);

const output = document.querySelector('output');
output.addEventListener('click', onWordClick);

// Update the DOM to reflect the words array
function render() {
  const wordElements = words.map((word) => {
    const wordElement = document.createElement('span');
    wordElement.textContent = word;
    wordElement.classList = 'word';
    return wordElement;
  })
  output.replaceChildren(...wordElements);
}


/**
 * If the user clicks on a word, remove it from the sentence.
 * @param {Event} event the deepest element that was clicked
 */
function onWordClick(event) {
  // If the class of the word clicked contains 'word'
  if (event.target.classList.contains('word')) {
    console.log(`Clicked word is ${event.target.textContent}`);

    const index = words.indexOf(event.target.textContent)
    console.log(`Index of clicked word is ${index}`);

    words.splice(index, 1);
  };

  // Have to re render once the word is removed
  render();
}

/**
 * Add the submitted word into `words`, clear the form, and rerender.
 */
function addWord(event) {
  // Adding this allows user to handle submission process yourself
  event.preventDefault();
  
  const word = event.target.word.value;
  // console.log(`The last word added is ${word}`);

  // Add the word to the words array
  words.push(word);
  console.log(`Words array ${words}`);

  // After user adds a word and clicks "+", set the textbox back to empty
  event.target.word.value = "";

  // Re render
  render();
}