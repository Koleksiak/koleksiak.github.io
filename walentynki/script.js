let scale = 1;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bg-music');

// 1. Otwieranie koperty
document.getElementById('envelope-overlay').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('main-card').style.display = 'block';
    music.play();
});

// 2. Kliknięcie NIE -> Przycisk ucieka i zwiększa TAK
noBtn.addEventListener('click', () => {
    const area = document.getElementById('buttons-area').getBoundingClientRect();
    
    // Losowa pozycja wewnątrz kontenera
    const x = Math.random() * (area.width - 80);
    const y = Math.random() * (area.height - 40);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    
    // Powiększanie TAK
    scale += 0.2;
    yesBtn.style.transform = `scale(${scale})`;
    
    // Przyspieszanie muzyki (jak w Twoim kodzie)
    music.playbackRate = Math.min(music.playbackRate + 0.1, 2.5);
});

// 3. Kliknięcie TAK
yesBtn.addEventListener('click', () => {
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('success-section').style.display = 'block';
    document.getElementById('main-img').style.display = 'none';
    music.playbackRate = 1;
});

// 4. Generowanie serduszek w tle
const container = document.getElementById('hearts-container');
for (let i = 0; i < 15; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    const size = 15 + Math.random() * 20 + 'px';
    heart.style.width = size;
    heart.style.height = size;
    heart.style.animationDuration = 5 + Math.random() * 5 + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.opacity = 0.2 + Math.random() * 0.5;
    container.appendChild(heart);
}