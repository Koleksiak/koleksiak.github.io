window.onload = function() {
  fetch('slowa.txt')
    .then(response => response.text())
    .then(text => {
      words = text.split('\n');
      fetch('definicje.txt')
        .then(response => response.text())
        .then(text => {
          definitions = text.split('\n');
          displayWord();  // Wyświetl pierwsze słowo
          const definitionsList = text.split('\n').map(def => `<div>${def}</div>`).join('');
          document.getElementById('definitions-panel').innerHTML = definitionsList;  // Załaduj definicje do panelu
        });
    });
};

function displayWord() {
  document.getElementById('question').textContent = words[currentWordIndex];
  document.getElementById('answer').value = ''; // Wyczyść pole odpowiedzi
  document.getElementById('result').textContent = ''; // Wyczyść pole wyniku
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value;
  const correctAnswer = definitions[currentWordIndex].trim(); // Upewnij się, że nie ma dodatkowych spacji
  if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase()) {
    document.getElementById('result').textContent = 'Poprawna odpowiedź!';
    document.getElementById('result').style.color = 'green'; // Tekst na zielono, jeśli odpowiedź jest poprawna
  } else {
    document.getElementById('result').textContent = 'Zła odpowiedź! Poprawna odpowiedź to: ' + correctAnswer;
    document.getElementById('result').style.color = 'red'; // Tekst na czerwono, jeśli odpowiedź jest błędna
  }
}

function nextQuestion() {
  currentWordIndex++;
  if (currentWordIndex >= words.length) currentWordIndex = 0;
  displayWord();
}
