$(document).ready(function() { 

  // Get dailyPlannerContainer element using Jquery
  // Contain all other children elements of the day planner app
  let $dailyPlannerContainer = $('#dailyPlannerContainer');

  // Generate container as empty() for initialization

  // Dynamically create dailyPlannerContainer appended elements 

  function createGridSystem() {

    // Loop trhough a work day of 8 hours
    for ( var hourOfDay = 9; hourOfDay <= 17; hourOfDay++ ) {
      
      // Generate an index that represnt 0 as first hour of the day
      // Index will be used on the span of the hour column "text"
      let hourIndex = hourOfDay - 9; // index on 9AM is = 0
  
      // Generate row div columns.
      // Each row is an hour of the day.
      let $rowContainer = $("<div></div>") // Create a div (looped) to hold the rows
      .addClass('row') // class row
      // class nonBootStrapRow to distinguish between bootstrap styles and apps styles
      .addClass('nonBootStrapRow') 
      .attr('hour-index',hourOfDay); // hourOfDay is the row hour

      // Append the hour of the row
      var $columnHour = $("<div></div>")
      .addClass("col-md-2 hour")

      // Create a span to hold the text or horu of the day for the hour column cell
      let $columnHourSpan = $('<span></span>')

      // Create a variable to hold the hour of the day to append to column hour span.text
      let $columnHourly = "";

      // Take hourOfDay variable from the loop and assign proper AM/PM values
      switch(hourOfDay) {
        case 9: case 10: case 11:
          columnHourly = hourOfDay + " AM";
          break
        //case 12: case 13: case 14: case 15: case 16: case 17:
        //  columnHourly = hourOfDay + " PM";
         // break  
        default: // All other values 
          columnHourly = hourOfDay + " PM";
          break  
      }

      // Based on the hourOfDay switch we will assign the text to the columnHour.
      $columnHour.text(columnHourly);


      // Appending section area START // 

     
      // Add columnHour to rowContainer
      $rowContainer.append($columnHour); // Test 1

      // Add rowContainer to dailyPlannerContainer
      $dailyPlannerContainer.append($rowContainer);

      // Appending section area END // 

      
    }
   }

  createGridSystem();
  //loadCurrentTime();


  
});

