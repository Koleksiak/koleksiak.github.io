let currentWordIndex = 0;
let words = [];
let definitions = [];
let usedIndexes = []; // Tablica do przechowywania użytych indeksów

window.onload = function() {
  fetch('slowa.txt')
    .then(response => response.text())
    .then(text => {
      words = text.split('\n');
      fetch('definicje.txt')
        .then(response => response.text())
        .then(text => {
          definitions = text.split('\n');
          nextQuestion(); // Rozpoczęcie z losowego słowa
        });
    });
};

function displayWord() {
  document.getElementById('question').textContent = words[currentWordIndex];
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
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
  if (usedIndexes.length >= words.length) usedIndexes = []; // Reset, gdy wszystkie słówka zostały użyte
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * words.length);
  } while (usedIndexes.includes(randomIndex)); // Powtarzaj losowanie, jeśli indeks został już użyty

  currentWordIndex = randomIndex;
  usedIndexes.push(randomIndex); // Dodaj indeks do listy użytych
  displayWord();
}
