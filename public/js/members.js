$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.name);
      //$(".member-name").text(data.email);git
     
    });

    var nameInput = $("#user-name");
    $(document).on("submit", "#user-form", userFormSubmit);
    getUsers();
    
    function userFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertAuthor function and passing in the value of the name input
      upsertUser({
        name: nameInput
          .val()
          .trim()
      });
    }
    function upsertUser(userData) {
      $.post("/api/Users", userData)
        .then(getUsers);
    }
  });

  

  
