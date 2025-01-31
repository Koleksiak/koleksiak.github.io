let currentWordIndex = 0;
let words = [];
let definitions = [];

window.onload = function() {
  fetch('slowa.txt')
    .then(response => response.text())
    .then(text => {
      words = text.split('\n');
      fetch('definicje.txt')
        .then(response => response.text())
        .then(text => {
          definitions = text.split('\n');
          displayWord();
        });
    });
};

function displayWord() {
  document.getElementById('question').textContent = words[currentWordIndex];
  document.getElementById('answer').value = ''; // Clear the answer field
  document.getElementById('result').textContent = ''; // Clear the result field
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value;
  const correctAnswer = definitions[currentWordIndex].trim(); // Ensure no extra whitespace
  if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase()) {
    document.getElementById('result').textContent = 'Poprawna odpowiedź!';
    document.getElementById('result').style.color = 'green'; // Make text green if correct
  } else {
    document.getElementById('result').textContent = 'Zła odpowiedź! Poprawna odpowiedź to: ' + correctAnswer;
    document.getElementById('result').style.color = 'red'; // Make text red if incorrect
  }
}

function nextQuestion() {
  currentWordIndex++;
  if (currentWordIndex >= words.length) currentWordIndex = 0;
  displayWord();
}
window.onload = function() {
  loadDefinitions();
  nextQuestion();
};

function loadDefinitions() {
  fetch('definicje.txt')
    .then(response => response.text())
    .then(text => {
      const definitionsList = text.split('\n').map(def => `<div>${def}</div>`).join('');
      document.getElementById('definitions-panel').innerHTML = definitionsList;
    });
}
