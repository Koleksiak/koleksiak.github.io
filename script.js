function zegar(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";
    
    if(hours > 0.9){
        period = "";
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    document.querySelector(".godziny").innerHTML = hours;
    document.querySelector(".minuty").innerHTML = minutes;
    document.querySelector(".sekundy").innerHTML = seconds;
    document.querySelector(".kropki").innerHTML = period;
}
var updateClock = setInterval(zegar, 1000);

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default",{weekday: "long"})
const monthName = today.toLocaleString("default",{month: "long"})
document.querySelector(".miesiac").innerHTML = monthName;
document.querySelector(".rok").innerHTML = year;
document.querySelector(".numer").innerHTML = dayNumber;
document.querySelector(".dzien").innerHTML = dayName;


