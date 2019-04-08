function clock() {
    var myDate = new Date();
    var hours = myDate.getHours();
    var mins = myDate.getMinutes();
    var secs = myDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + mins;
    document.getElementById('second').innerHTML = ":" + secs;
}

setInterval(clock, 100);