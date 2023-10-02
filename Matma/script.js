document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.topic-checkbox');
    const progressBar = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    const resetButton = document.getElementById('reset-button'); // Przycisk do wyczyszczenia postępu
    let totalTopics = checkboxes.length;
    let completedTopics = 0;

    // Funkcja aktualizująca pasek postępu
    function updateProgressBar() {
        const percentage = (completedTopics / totalTopics) * 100;
        progressBar.style.width = percentage + '%';
        progressText.innerText = `${percentage.toFixed(2)}%`;
    }

    // Funkcja zapisująca stan zaznaczonych checkboxów w pamięci przeglądarki
    function saveProgress() {
        const progressData = Array.from(checkboxes).map((checkbox) => ({
            id: checkbox.getAttribute('data-value'),
            checked: checkbox.checked,
        }));
        localStorage.setItem('progressData', JSON.stringify(progressData));
    }

    // Funkcja wczytująca zapisany stan checkboxów
    function loadProgress() {
        const progressData = JSON.parse(localStorage.getItem('progressData'));
        if (progressData && progressData.length === checkboxes.length) {
            progressData.forEach((item) => {
                const checkbox = document.querySelector(`[data-value="${item.id}"]`);
                if (checkbox) {
                    checkbox.checked = item.checked;
                    if (item.checked) {
                        completedTopics++;
                    }
                }
            });
        }
    }

    // Obsługa zdarzenia zmiany stanu checkboxa
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                completedTopics++;
            } else {
                completedTopics--;
            }
            updateProgressBar();
            saveProgress();
        });
    });

    // Obsługa przycisku do wyczyszczenia postępu
    resetButton.addEventListener('click', function () {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        completedTopics = 0;
        updateProgressBar();
        saveProgress();
    });

    // Inicjalizacja strony - wczytanie zapisanego stanu i aktualizacja paska postępu
    loadProgress();
    updateProgressBar();
});
