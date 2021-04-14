/*
Here, there is manipulation of date and time
*/

//Creates a Date object
var dirtyDate = new Date();
//Change the value of the object to a string value
var dateString = dirtyDate.toString();
alert(dateString);

//Day
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//Extract the day of the week
var dayToday = dirtyDate.getDay();
//This gives a number.
var todayString = dayList[dayToday];
// alert(todayString);

//Date
var date = dirtyDate.getDate();
//Month
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthToday = dirtyDate.getMonth();
var monthString = months[monthToday];
alert(monthString);
//Year
var year = dirtyDate.getFullYear();

var fullDate = alert("Today is" + todayString + "," + date + " " + monthString + " " + year);
alert(fullDate);

//Additional methods
// getTime() // Finds the milliseconds that have elapsed from Epoch time 
