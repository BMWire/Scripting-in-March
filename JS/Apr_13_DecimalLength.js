/*
Here, there is manipulation of date and time
*/

//Creates a Date object
var rightNow = new Date();
//Change the value of the object to a string value
var dateString = rightNow.toString();
alert(dateString);

//Day
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//Extract the day of the week
var weekDay = rightNow.getDay();
//This gives a number.
var today = dayList[weekDay];
alert(today);

//Date
var date = rightNow.getDate();
//Month
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthToday = rightNow.getMonth();
var thonth = months[monthToday];
alert(thonth);
//Year
var year = rightNow.getFullYear();

var fullDate = alert("Today is" + today + "," + date + " " + thonth + " " + year);