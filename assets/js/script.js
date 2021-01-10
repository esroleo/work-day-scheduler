$(document).ready(function() { // Wait for the DOM to be ready for window., javascript/jquery and others

  // ** Declare a array that will hold all user tasks created text
  taskDescrArr =  new Array(9);

  function getMomentNow () {  
  
    // *** START of moment.js code

    // Get current time in exactly as shown on mockup using moment.js!
    // dddd = Today's date during the week
    // [, ] escapte moment.js and add/append/concate text
    // MMMM is this month in full name
    // Do is todays date on this month
    const headerDateTime = moment().format('dddd [, ] MMMM Do');
  
    // Display the headerDateTime on the header section
    $('#currentDay').text(headerDateTime);
  
    // Get current hour to be passed used on taskRowColor(momentHour) function.
    let momentHour = moment().format('H');
    
    // Change to from string to integer for validation at function taskRowColor 
    momentHour = Number(momentHour);
  
    return momentHour;
    // *** END of moment.js code
  
  }

  

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

      // *** START of the row div columns ***

      // Generate row div columns.
      // Each row is an hour of the day.
      let $rowContainer = $("<div></div>") // Create a div (looped) to hold the rows
      .addClass('row') // class row
      // class nonBootStrapRow to distinguish between bootstrap styles and apps styles
      .addClass('nonBootStrapRow') 
      .attr('hour-index',hourOfDay); // hourOfDay is the row hour

      // *** END of the row div columns ***  

      // *** START of the hour column ***

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

     // *** END of the hour column 

     // *** START of description task column section ***

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
      .attr('hour-index', hourIndex); // To be used to change clors of the input task.
      
      // Display task that was "get" from the local storage
      // We are going to use the hourIndex to access the task.
      //$descriptionColumnSpan.val('Test 1234');
      
      $descriptionColumnSpan.val(taskDescrArr[hourIndex]);



      // $descriptionColumnSpan.val( taskDescrArr[hourIndex] );
   

      // *** END of description task column section ***


      // *** START of save button column section ***

      let $saveButtonColumn = $("<div></div>")
      .addClass('col-md-1 saveBtn') // saveBtn is a css class

      let $saveBtnIcon = $("<i></i>")
      .addClass('fas fa-save btn-save') // btn-save is a css class
      .attr('id',`saveid-${hourIndex}`)
      .attr('save-id', hourIndex); // Used for value tracking to store at local storage.

      // *** END of save button column section ***


      // *** START of steps to append to the DOM *** 

      // Append columnHour to rowContainer
      $rowContainer.append($columnHour); // Step 1

      // Append descriptionColumn to the rowContainer
      $rowContainer.append($descriptionColumn); // Step 2

      // Append descriptionColumnSpan to the descriptionColumn
      $descriptionColumn.append($descriptionColumnSpan); // Step 3

      // Append saveButtonColumn to the rowContainer
      $rowContainer.append($saveButtonColumn); // Step 4
    
      // Append saveBtnIcon to the saveButtonColumn
      $saveButtonColumn.append($saveBtnIcon); // Step 5

      // *** END of steps to append to the DOM *** 

      // *** START for every hour update the color with a function ***
      // *** Update color on each loop iteration until finished ***

      // set row color based on time "for loop hour of the day"
      //taskRowColor(hourOfDay);
    
      // *** END of structure of grid appends ***


      // *** Appending to the main dailyPlannerContainer needs to go last to respect the DOM ***
      // *** Add rowContainer to dailyPlannerContainer // LAST STEP - Step 6 ***
      $dailyPlannerContainer.append($rowContainer);

      // ********* END FOR LOOP ********  

    
    };
  };

  function getTaskDetails () {

    // *** For Testing enable the below remove item to test no storage ***
    //window.localStorage.removeItem('dailyTasks');

    // Get array from local storage
    let localStorageTasks = JSON.parse(localStorage.getItem("dailyTasks"));

    // Check if array is null and create new one again.

    if (localStorageTasks === null) {
      taskDescrArr =  new Array(9);
    
    } else { // Assign the localStorage values to the array
      taskDescrArr = localStorageTasks;
      console.log("Values from local Storage are: " + taskDescrArr);
    };

  };

  function taskRowColor() {
    // Based on the "hour of the day" which is the hour of the row
    // If the hourOfDay is less than currentTime moment.js then lightgreyy
    // Else if hourOfDay > currentTime than the currentTime moment.js then lightgreen
    // else current hour will become red which is inminent

    // *** Update time of momentHour Variable to  now time in hours
 
    momentHour = getMomentNow() // get time. momentHour Variable is now current

    //console.log(momentHour);

    // *** If your current houris outside of 17 hours or 5 PM, please  modify below for testing ***
    // *** For testing change the momentHour to 9-17 ***
        // momentHour = 10; // Change HERE e.g 10 AM
      
    // *** START of getting each input task through the DOM and update its color

    for (var i = 0; i < 9; i++) {


      // hour-index attribute contains the hour of the task column
      let hourIndex = $( "#input-" + i).attr("hour-index"); 
      hourIndex = Number(hourIndex); // Convert attribute to number for conditional check
      hourIndex += 9; // Convert the hour-index value to hours readable numbers  

      if (hourIndex < momentHour) { // Verify if task column hour time is less than now in hours

        $( "#input-" + i ).css("background-color","lightgrey"); // Change CSS style to desired background color
   
      } else if (hourIndex > momentHour) { // Verify if task column hour time is later than now in hours
      $( "#input-" + i ).css("background-color","#77dd77"); // Change CSS style to desired background color
      } else {
      
        $( "#input-" + i ).css("background-color","#ff6961"); // Change CSS style to desired background color
      }
    };
      
   
    // *** END of getting each input task through the DOM and update its color
  
  };

    
  $(document).on('click','i', function(event) {
    event.preventDefault();  

      // Allow click handler to run fully before it will listen to another event of click
      event.preventDefault(); 
    
      // Get the save-id attribute to use as the position of the hour.
      // This will in turn be used to store in the array index and save at local storage.
    
      let $localStorageIndex = $(this).attr('save-id');
    
      console.log($localStorageIndex);
    
      // Search the DOM for the columnHour input value and save it
      
      taskDescrArr[$localStorageIndex] = $( "#input-" + $localStorageIndex).val(); 
      console.log(taskDescrArr);

      // Save the array to localStorage using JSON stringify
      localStorage.setItem("dailyTasks", JSON.stringify(taskDescrArr));

  });  
    
 
  getMomentNow() // Get current time
  getTaskDetails(); // Get array from local storage and stores it in array
  createGridSystem(); // Work on grid system creation and logic
  taskRowColor() // Update tasks colors
 

  
});





