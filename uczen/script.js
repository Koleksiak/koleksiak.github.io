// Pobieramy elementy przycisków i obrazów
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const span1 =  document.getElementById("span1")

// Definiujemy obsługę kliknięcia przycisków
button1.addEventListener("click", () => {
    // Zmieniamy źródło obrazu 1 na odpowiednią ścieżkę dla przycisku 1
    image1.src = "uczenm.png";
    image2.src = "uczenz.png";
    // Możesz również ustawić alternatywny tekst, jeśli to konieczne
    image1.alt = "galowym.png";
    image2.alt = "galz.png";
    image1.classList.add("active");
    image2.classList.add("active");
    image1.classList.remove("active2");
    image2.classList.remove("active2");
    image1.classList.remove("active3");
    image2.classList.remove("active3");
    image1.classList.remove("active4");
    image2.classList.remove("active4");
    span1.textContent="Strój uczniowski"

});

button2.addEventListener("click", () => {
    // Zmieniamy źródło obrazu 1 na odpowiednią ścieżkę dla przycisku 2
    image1.src = "galowym.png";
    image2.src = "galz.png";
    // Możesz również ustawić alternatywny tekst, jeśli to konieczne
    image1.alt = "Opis obrazu 1 dla przycisku 2";
    image2.alt = "Opis obrazu 2 dla przycisku 2";
    image1.classList.remove("active");
    image2.classList.remove("active");
    image1.classList.add("active2");
    image2.classList.add("active2");
    image1.classList.remove("active3");
    image2.classList.remove("active3");
    image1.classList.remove("active4");
    image2.classList.remove("active4");
    span1.textContent="Strój Galowy"

});

button3.addEventListener("click", () => {
    // Zmieniamy źródło obrazu 1 na odpowiednią ścieżkę dla przycisku 3
    image1.src = "wfm.png";
    image2.src = "wfz.png";
    // Możesz również ustawić alternatywny tekst, jeśli to konieczne
    image1.alt = "Opis obrazu 1 dla przycisku 3";
    image2.alt = "Opis obrazu 2 dla przycisku 3";
    image1.classList.remove("active");
    image2.classList.remove("active");
    image1.classList.remove("active3");
    image2.classList.remove("active2");
    image1.classList.add("active2");
    image2.classList.add("active3");
    image1.classList.remove("active4");
    image2.classList.remove("active4");
    span1.textContent="Strój na WF"

});
button4.addEventListener("click", () => {
    // Zmieniamy źródło obrazu 1 na odpowiednią ścieżkę dla przycisku 3
    image1.src = "nauczycielm.png";
    image2.src = "nauczycielz.png";
    // Możesz również ustawić alternatywny tekst, jeśli to konieczne
    image1.alt = "Opis obrazu 1 dla przycisku 3";
    image2.alt = "Opis obrazu 2 dla przycisku 3";
    image1.classList.remove("active");
    image2.classList.remove("active");
    image1.classList.remove("active1");
    image2.classList.remove("active1");
    image1.classList.remove("active2");
    image2.classList.remove("active2");
    image1.classList.remove("active3");
    image2.classList.remove("active3");
    image1.classList.add("active4");
    span1.textContent="Strój Nauczycielski"

});