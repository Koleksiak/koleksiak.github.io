function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    if (godzina<10) godziny ="0"+godziny;
    var min = dateTime.getMinutes();
    if (godzina<10) minuty ="0"+minuty;
    var sec = dateTime.getSeconds();

    document.getElementById ('godziny').innerHTML = hrs;
    document.getElementById ('minuty').innerHTML = min;
    

}
setInterval(displayTime, 10);
