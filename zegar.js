function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    document.getElementById ('godziny').innerHTML = hrs;
    document.getElementById ('minuty').innerHTML = min;
    

}
setInterval(displayTime, 10);
