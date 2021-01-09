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

      // ********* START of the row div columns *********

      // Generate row div columns.
      // Each row is an hour of the day.
      let $rowContainer = $("<div></div>") // Create a div (looped) to hold the rows
      .addClass('row') // class row
      // class nonBootStrapRow to distinguish between bootstrap styles and apps styles
      .addClass('nonBootStrapRow') 
      .attr('hour-index',hourOfDay); // hourOfDay is the row hour

      // ********* END of the row div columns *********  

      // ********* START of the hour column *********

      // Append the hour of the row
      var $columnHour = $("<div></div>")
      .addClass("col-md-2 hour time-block")

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

      // Based on the hourOfDay switch we will assign the text to the columnHour
      $columnHour.text(columnHourly);

     // ********* END of the hour column 

     // ********* START of description task column section *********

      // Create description column as an input elemnt

      let $descriptionColumn = $("<div></div>")
      .addClass("col-md-9");

      // Create the span of descriptionColumn to hold a input element
      // Here we will use the index which will be in th 0-8 format
      // This requrired to keep a proper index array
      // The index will be index - hourOfDay
      // We will also keep track of the hourIndex for saving or button events

      let $descriptionColumnSpan = $("<input></input>")
      .addClass('description taskDescriptionSpan') // Use provided css style class
      .attr('type', 'text') // Text input type
      .attr('id', `input-${hourIndex}`) // Create a index of the input for track purposes
      .attr('hour-index', hourIndex);
      
      // Display task that was "get" from the local storage
      // We are going to use the hourIndex to access the task.
      $descriptionColumnSpan.val('Test 1234');

      // ********* END of description task column section *********

      // ********* START of save button column section *********

      let $saveButtonColumn = $("<div></div>")
      .addClass('col-md-1 saveBtn') // saveBtn is a css class

      let $saveBtnIcon = $("<i></i>")
      .addClass('fas fa-save') // btn-save is a css class
      .attr('id',`saveid-${hourIndex}`)
      .attr('save-id', hourIndex);




      // ********* END of save button column section *********

     
    
      // Append columnHour to rowContainer
      $rowContainer.append($columnHour); // Step 1

      // Append descriptionColumn to the rowContainer
      $rowContainer.append($descriptionColumn); // Step 2

      // Append descriptionColumnSpan to the descriptionColumn
      $descriptionColumn.append($descriptionColumnSpan); // Step 3

      // Append saveButtonColumn to the rowContainer
      $rowContainer.append($saveButtonColumn);
    
      // Append saveBtnIcon to the saveButtonColumn
      $saveButtonColumn.append($saveBtnIcon);






      // Appending to the main dailyPlannerContainer needs to go last to respect the DOM
      // Add rowContainer to dailyPlannerContainer
      $dailyPlannerContainer.append($rowContainer);


      // Appending section area END // 

      
    }
   }

  createGridSystem();
  //loadCurrentTime();


  
});

