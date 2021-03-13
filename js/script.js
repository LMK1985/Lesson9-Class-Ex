$(function(){
  //Challenge to add enter key to submit
  //Challenge to strikeoff task wordings only and not the ticks
    
  let todoItems = []; // Array to put into Json file

  // Function to add items to browser local storage, after converting the data to JSON and string type it.
  let setLocalStorage = function(todoItems) {
      localStorage.setItem(`todoList`, JSON.stringify(todoItems)); //todoList is the JSON key
  }

  // Function to get data from local storage
  let getLocalStorage = function() {
      let todoStorage = localStorage.getItem(`todoList`);
      if(todoStorage == undefined || todoStorage == null) {
          todoItems = [];
      } else {
          todoItems = JSON.parse(todoStorage);
          //Get the array entered previously and append them even upon refresh
          todoItems.forEach(function(item) {
            $(".item-list").append(` 
            <div class="row justify-content-center item">
                <div class="col-md-4 col-7">
                    <p class="task">${item}</p>
                </div>
                <div class="col-md-2 col-3 text-end">
                    <i class="bi bi-check-circle text-success icon-enlarge" id="complete"></i>
                    <i class="bi bi-x-circle text-danger icon-enlarge" id="delete"></i>
                </div>
            </div>
                    `);
          });
      }
  }

  getLocalStorage(); // Run the function above so that upon refresh still can access data stored previously in array
  // stringify is to let JSON read the data and parse is to let back JS read the data

  $("#clear-list").on("click", function() {  // For deleteing and removing array data and clearing the local storage as well.
        todoItems = [];
        localStorage.clear();
        $(".item-list").empty();
  });

    //On click of add-task button, get form value from #item-input
    $("#add-item").on("click", function() {
        let itemInput = $("#item-input").val();

        //Verification of input for empty values
        if(itemInput == "" || itemInput.length == 0) {
            $("#alert-prompt").text("Please enter a valid task.").removeClass("d-none");
            setTimeout(function(){
                $("#alert-prompt").addClass("d-none");
            }, 3000);
        } else {
            //Code to append a full chunk of html code
            $(".item-list").append(` 
            <div class="row justify-content-center item">
                        <div class="col-md-4 col-7">
                            <p class="task">${itemInput}</p>
                        </div>
                        <div class="col-md-2 col-3 text-end">
                            <i class="bi bi-check-circle text-success icon-enlarge" id="complete"></i>
                            <i class="bi bi-x-circle text-danger icon-enlarge" id="delete"></i>
                        </div>
                    </div>
                    `);
            $("#item-input").val("").focus(); //Focus is for reselecting input field for fast adding
            todoItems.push(itemInput);
            setLocalStorage(todoItems);
        }
    
    });
    
    $(document).on("click", "#complete", function() {
        $(this).closest(".item").toggleClass("completed");
    }); // Whenever this ID is clicked, function will be ran to change class to completed and use CSS to strikethrough

    $(document).on("click", "#delete", function() {
        $(this).closest(".item").remove();
    });

});