$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    var name;
    var points = 0;
    
    $.get("/api/user_data").then(function(data) {
      $(".member-name").html("<span> " + data.name + "!" + "</span>");
      $(".member-id").val(data.id);
      $(".option-select").text(data.name);
      name = data.name;
    });
    $("#submit-task").on("click", function(event){
      event.preventDefault();
      var newTask = {
        name: name,
        task: $("#task-body").val().trim(),
        score: $("#points").val().trim(),
        UserId: $(".member-id").val()
      };
      console.log(newTask);

      $.post("/api/tasks", newTask)
      .then(function(data) {
        console.log(data);
        location.reload();
      })
    });
    

    $(".delete-task").on("click", deleteTask);

    function deleteTask(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "Delete",
        url: "/api/tasks/" + id
      }).then
      location.reload();
    }
    function totalScore() {
      $.get("/api/tasks", function (data){
        
      }).then (function(response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          if (response[i].completed == true) {
             
            points += response[i].score;
          }
          $(".points").text(points);
        };
        
      });
      
    };
    totalScore();
    

    function completeTask(event) {
      event.preventDefault();
      console.log("completeTask: " + completeTask);
      var id = $(this).data("id");
      $.ajax({
        method: "Put",
        url: "/api/task/" + id
      }).then
      location.reload();
    }
    $(".change-complete").on("click", completeTask);
    
});

