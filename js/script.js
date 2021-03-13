$(function(){

    //On click of add-task button, get form value from #item-input
    $("#add-item").on("click", function(){
        let itemInput = $("#item-input").val();

    //Verification of input for empty values
    if(itemInput == "" || itemInput.length == 0){
        $("#alert-prompt").text("Please enter a valid task.").removeClass("d-none");
    } else {
        itemInput = $("#item-input").val();
        //console.log(itemInput); value testing line
    }

    });
    
});