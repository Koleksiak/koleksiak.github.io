 const switchButton = document.querySelector("header button");
 let theme;
 if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
 } else {
    theme = "light";
 }
 switchButton.addEventListener("click", () => {
    // document.querySelector("body").style.backgroundColor = "#000";
    // document.querySelector("body").style.color = "#fff";
    // document.querySelector("main button").style.backgroundColor = "#000";
    // document.querySelector("main button").style.color = "#fff";
   if(theme === "dark"){
    theme = "light";
    document.querySelector("body").classList.remove("dark");
   }else{
    theme = "dark";
    document.querySelector("body").classList.add("dark");
   }
    localStorage.setItem("theme", theme);
    

});

if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
}