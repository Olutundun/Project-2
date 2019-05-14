$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.name);
      //$(".member-name").text(data.email);
     
    });
  });

  $(function () {
    $(".completed-button").on("click", function (event) {
      var id = $(this).data("id");
      var newlyCompleted = "true";
  
      var newlyCompletedState = {
        completed: newlyCompleted
      };
  
      $.ajax("/api/Tasks/" + id, {
        type: "PUT",
        data: newlyCompletedState
      }).then(function () {
        location.reload();
      }
      );
    });
  
    $(".create-form").on("submit", function (event) {
      event.preventDefault();
  
      var newTask = {
        name: $("#Task").val().trim(),
      };
  
      $.ajax("/api/Tasks", {
        type: "POST",
        data: newTask
      }).then(
        function () {
          location.reload();
        }
      );
    });
  
  })