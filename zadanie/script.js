const switchButtons = document.querySelectorAll("section div");

switchButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.remove("green", "red");
        button.classList.add("white");
    });
});
const divs = document.querySelectorAll("section div");

const randomIndex = Math.floor(Math.random() * divs.length);

const imgElement = document.createElement("img");

imgElement.src = "https://bip-v1-files.superszkolna.pl/sites/47520/logo/orign/logo_sltzn_male.png";

imgElement.style.display = "none";
imgElement.style.height = "20vh";
divs[randomIndex].appendChild(imgElement);

divs[randomIndex].addEventListener("click", () => {
    imgElement.style.display = "block";

    setTimeout(() => {
       
        alert("Wygrałeś");
    }, 500);
});