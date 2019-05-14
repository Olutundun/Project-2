$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.name);
      $(".option-select").text(data.name);
      //$(".member-name").text(data.email);git
     
    });

    $("#submit-task").on("click", function(event){
      event.preventDefault();
      var newTask = {
        name: $(".option-select").val().trim(),
        task: $("#task-body").val().trim(),
        score: $("#points").val().trim()
      };
      console.log(newTask);

      $.post("/api/Tasks", newTask)
      .then(function(data) {
        console.log(data);
      })
    })

  //   $.get("api/user_data", function(data) {
  //     if (data.length !==0) {
  //       for (i = 0; i < data.length; i++) {
  //         $(".custome-select").text("<option>" + data[i].name + "</option>");
  //       }
  //     }
  //   })
  });

  

  
