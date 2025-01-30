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
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value;
  if (userAnswer === definitions[currentWordIndex]) {
    alert('Dobrze!');
  } else {
    alert('Źle! Poprawna odpowiedź to: ' + definitions[currentWordIndex]);
  }
}

function nextQuestion() {
  currentWordIndex++;
  if (currentWordIndex >= words.length) currentWordIndex = 0;
  displayWord();
}
