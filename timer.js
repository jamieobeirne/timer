
 var days = ["Sunday, ","Monday, ","Tuesday, ", "Wednesay, ", "Thursday, ", "Friday, ","Saturday, "];
 var dayToday = (days[new Date().getDay()]);
 var months = [" January ", " February ", " March ", " April ", " May ", " June "," July ", " August ", " September ", " October ", " November ", " December "];
 var monthToday =(months[new Date().getMonth()]);
 var dayOfMonth = new Date().getDate();
 var year = new Date().getFullYear();

window.onload = function(){
 //var today = new Date();
 document.getElementById("today").innerHTML = dayToday + "," + dayOfMonth + monthToday + year;
}



setInterval (function timer(){
  var previousTime = new Date("March 19, 1882 19:35:00").getTime();
  var now = (new Date().getTime());
  var differenceInSeconds = (now - previousTime) /1000;

  var years = Math.floor(differenceInSeconds/31556952); 
  var yearsRemainder = differenceInSeconds - (years *  31556952);

  var days = Math.floor(yearsRemainder / 86400); 
  var daysRemainder = yearsRemainder - (days *86400);

  var hours = Math.floor(daysRemainder / 3600);
  var hoursRemainder = daysRemainder - (hours * 3600);

  var minutes = Math.floor(hoursRemainder / 60);
  var minutesRemainder = hoursRemainder - (minutes * 60);

  var seconds = Math.floor(minutesRemainder);

  document.getElementById("years").innerHTML = years; 
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
}, 1000);























