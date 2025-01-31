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
  const correctAnswer = definitions[currentWordIndex]; // Usuń trim() tutaj

  // Dodaj sprawdzenie, czy correctAnswer istnieje
  if (correctAnswer && userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
    document.getElementById('result').textContent = 'Poprawna odpowiedź!';
    document.getElementById('result').style.color = 'green';
  } else if (correctAnswer) {
    document.getElementById('result').textContent = 'Zła odpowiedź! Poprawna odpowiedź to: ' + correctAnswer;
    document.getElementById('result').style.color = 'red';
  } else {
    document.getElementById('result').textContent = 'Nie znaleziono definicji dla tego słowa.';
    document.getElementById('result').style.color = 'orange';
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
      const allDefinitions = text.split('\n'); // Podziel plik na linie
      const uniqueDefinitions = new Set(allDefinitions); // Utwórz zestaw unikalnych definicji
      const definitionsList = Array.from(uniqueDefinitions) // Przekształć zestaw z powrotem na listę
        .map(def => `<div>${def}</div>`) // Utwórz elementy HTML dla każdej definicji
        .join('');
      document.getElementById('definitions-panel').innerHTML = definitionsList; // Wyświetl definicje
    });
}

