let currentWordIndex = 0;
let words = [];
let definitions = [];

window.onload = function() {
  fetch('slowa.txt')
    .then(response => response.text())
    .then(text => {
      let initialWords = text.split('\n');
      return fetch('definicje.txt')
        .then(response => response.text())
        .then(text => {
          let initialDefinitions = text.split('\n');
          [words, definitions] = synchronizedShuffle(initialWords, initialDefinitions);
          displayWord();
          loadDefinitions();
        });
    })
    .catch(error => console.error('Error loading the data:', error));
};

function displayWord() {
  if (words.length > 0) {
    document.getElementById('question').textContent = words[currentWordIndex];
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value;
  const correctAnswer = definitions[currentWordIndex].trim();
  if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase()) {
    document.getElementById('result').textContent = 'Poprawna odpowiedź!';
    document.getElementById('result').style.color = 'green';
  } else {
    document.getElementById('result').textContent = 'Zła odpowiedź! Poprawna odpowiedź to: ' + correctAnswer;
    document.getElementById('result').style.color = 'red';
  }
}

function nextQuestion() {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  displayWord();
}

function loadDefinitions() {
  const uniqueDefinitions = new Set(definitions); // Usunięcie duplikatów
  const definitionsList = Array.from(uniqueDefinitions).map(def => `<div>${def}</div>`).join('');
  document.getElementById('definitions-panel').innerHTML = definitionsList;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function synchronizedShuffle(words, definitions) {
  let indices = Array.from(words.keys()); // Pobieranie indeksów
  shuffle(indices); // Losowe mieszanie indeksów

  let shuffledWords = indices.map(index => words[index]);
  let shuffledDefinitions = indices.map(index => definitions[index]);

  return [shuffledWords, shuffledDefinitions];
}
