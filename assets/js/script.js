// Test jquery selector.

var row = $("<div></div>").addClass("row");
var text = $("<p></p>").text("Test ")
console.log(text);
$(row).appendTo(".container")

// We have a row conatiner
// We need to add all the columns
//var hour1 = $("<p></p>").text("09:00").addClass("hour"); // convert this in to div
//$(hour1).appendTo(".row");
var divHour = $("<div></div>").addClass("hour").text("09:00"); // later we need to set attributes
$(divHour).appendTo(".row")
//$("body").append(row);


// Create a text area for the hour 
