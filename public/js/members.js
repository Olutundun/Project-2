$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.name);
      $(".member-id").val(data.id);
      $(".option-select").text(data.name);
      
     
    });

    $("#submit-task").on("click", function(event){
      event.preventDefault();
      var newTask = {
        name: $(".option-select").val().trim(),
        task: $("#task-body").val().trim(),
        score: $("#points").val().trim(),
        UserId: $(".member-id").val()
      };
      console.log(newTask);

      $.post("/api/Tasks", newTask)
      .then(function(data) {
        console.log(data);
        location.reload();
      })
    })


  
});

