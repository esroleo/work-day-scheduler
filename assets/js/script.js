$(document).ready(function() { 

  // Get dailyPlannerContainer element using Jquery
  let $dailyPlannerContainer = $('#dailyPlannerContainer');

  // Generate container as empty() for initialization

  // Dynamically create dailyPlannerContainer appended elements 

  function createGridSystem() {

    console.log('inside function');6

    for ( var hourOfDay = 9; hourOfDay <= 17; hourOfDay++ ) {
      // Generate an index that represnt 0 as first hour of the day
      let hourIndex = hourOfDay - 9; // index on 9AM is = 0
  
      // Generate row div columns.
      // Each row is an hour of the day.
      let $rowContainer = $("<div></div>")
      .addClass('row')
      .addClass('nonBootStrapRow')
      .attr('hour-index',hourOfDay);

      // Append the hour of the row

      var $columnHour = $("<div></div>")
      .addClass("col-md-2 hour")
      .text("Test");

      $rowContainer.append($columnHour);

      // add row to planner container
       $dailyPlannerContainer.append($rowContainer);
    }
   }

  createGridSystem();
  //loadCurrentTime();


  
});

