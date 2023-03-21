const switchKobiety = document.getElementById("guzikk");
const switchMezczyzni = document.getElementById("guzikm");
let theme;
switchKobiety.addEventListener("click", () => {
    document.querySelector("body").classList.remove("chlopy");
    document.querySelector(".mezczyzni").classList.remove("widoczni") ;
    document.querySelector(".kobiety").classList.add("widoczni") ;

});
switchMezczyzni.addEventListener("click", () => {
document.querySelector("body").classList.add("chlopy") ;
document.querySelector(".kobiety").classList.remove("widoczni") ;
document.querySelector(".mezczyzni").classList.add("widoczni") ;
  });
