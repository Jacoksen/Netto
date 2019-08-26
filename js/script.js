var today = new Date ();
var minutesNow = today.getMinutes();
var hourNow = today.getHours();
var greeting;
var weekdays = new Array(7);
weekdays[0] = "Søndag";
weekdays[1] = "Mandag";
weekdays[2] = "Tirsdag";
weekdays[3] = "Onsdag";
weekdays[4] = "Torsdag";
weekdays[5] = "Fredag";
weekdays[6] = "Lørdag";

if(hourNow >= 17 && hourNow <= 23) {
    greeting = 'God aften';
}
else if(hourNow >= 00 && hourNow <= 5) {
    greeting = 'Godnat';
}
else if(hourNow >= 6 && hourNow <= 12) {
    greeting = 'God morgen';
}
else if(hourNow >= 12 && hourNow <= 16) {
    greeting = 'God eftermiddag';
}

document.write('<h3>' + greeting + '</h3>');
document.write('<h4>' + hourNow + ':' + minutesNow + '</h4><br>');
document.write('<h4>' + weekdays[today.getDay()] + '</h4>');