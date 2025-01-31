let currentWordIndex = 0;
let words = [];
let definitions = [];

window.onload = function() {
  fetch('slowa.txt')
    .then(response => response.text())
    .then(text => {
      words = text.split('\n');
      return fetch('definicje.txt');  // Kontynuacja ładowania drugiego pliku
    })
    .then(response => response.text())
    .then(text => {
      definitions = text.split('\n');
      displayWord();  // Wyświetlanie pierwszego słowa po załadowaniu danych
      loadDefinitions();  // Ładowanie wszystkich definicji do panelu
    })
    .catch(error => console.error('Error loading the data:', error));
};

function displayWord() {
  if (words.length > 0) {  // Sprawdzenie, czy słowa są załadowane
    document.getElementById('question').textContent = words[currentWordIndex];
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
  }
}

function checkAnswer() {
  if (definitions.length > 0) {  // Sprawdzenie, czy definicje są załadowane
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
}

function nextQuestion() {
  currentWordIndex = (currentWordIndex + 1) % words.length;  // Cykliczne przeglądanie słów
  displayWord();
}

function loadDefinitions() {
  const definitionsList = definitions.map(def => `<div>${def}</div>`).join('');
  document.getElementById('definitions-panel').innerHTML = definitionsList;
}
