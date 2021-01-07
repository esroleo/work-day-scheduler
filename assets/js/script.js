// Test jquery selector.

//var row = $("<div></div>").addClass("row");
//var text = $("<p></p>").text("Test ")
//console.log(text);
//$(row).appendTo(".container")

// We have a row conatiner
// We need to add all the columns
//var hour1 = $("<p></p>").text("09:00").addClass("hour"); // convert this in to div
//$(hour1).appendTo(".row");
//var divHour = $("<div></div>").addClass("hour").text("09:00"); // later we need to set attributes
//$(divHour).appendTo(".row")
//$("body").append(row);


// Function to create grid system

/*
<div class="row">
<div class="col">
  1 of 3
</div>
<div class="col-6">
  2 of 3 (wider)
</div>
<div class="col">
  3 of 3
</div>
</div>

</div>
</div>
*/



function createGridSystem() {
    // Create the row container for our grid bootstrap system
    var row = $("<div></div>").addClass("row");
    $( '.container-fluid' ).append(row);   

    var gridHour = $("<div></div>").addClass("col hour").text('Test');
    var gridDescription = $("<div></div>").addClass("col-6").text('Test');
    var gridSave = $("<div></div>").addClass("col btn-save").text('Test');


    //var gridSaveButtonEl = $("<button></button>").text('Test');
    $( '.row' ).append(gridHour);   
    $( '.row' ).append(gridDescription);   
    $( '.row' ).append(gridSave);   
   
}

$(document).ready(function(){
 
    $('.btn-save').click(function(){
     //window.location = $(this).find("a").attr("href");
     console.log("Clicked");
    });
    
   });


// Function to load current time to the hour grid area

function loadCurrentTime() {

    var spanGridValue = ""



    /*
    // Create a 24 hours system using jQuery and CSS
    for (i=9; i <= 17; i++) { // This is 9:00 AM to 5:00 PM = 8 hours
       var divHourItem = $("<div></div>").addClass("hour"+i); // later we need to set attributes
       
       spanGridValue = "\'" + i + " span/ 1\'" ;
       $(divHourItem).css({
            'grid-column' : spanGridValue,
            'grid-column' : '1 / span 1'
            
        });

     switch(i) {
         case 9:
         case 10:
         case 11:
            $(divHourItem).text(i + "AM");
            break
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            $(divHourItem).text(i + "PM");
            break
        
    }
       
      // $(divHourItem).text(i + "AM");
       $(divHourItem).appendTo(".row");
       console.log(divHourItem);
       console.log(spanGridValue);
    }
    /*

    //$(divHour).text(9 + ":00");
   // $(divHour).css("grid-column", "1 / span 1").css("grid-row", "1 / span 1");
     
    //$("p").css("background-color", "yellow");
    
    
    
    

    /*
    Grid items 
	grid-column: 1 / span 1;
	grid-row: 1 / span 1;  
    text-align: right;
    */

}

createGridSystem();
loadCurrentTime();




// Function to load the data into the grid system



// Function to write details into the local storage


// Function to display before, present, future
