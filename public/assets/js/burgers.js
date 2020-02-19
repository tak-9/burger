// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // Display giphy when mouse is over the burger icon. LOL! 
  $("#burger_pic").mouseenter("", function(event) {
    var giphyArr = [
      "https://media.giphy.com/media/1qh6PL5839AsX8srcf/giphy.gif",
      "https://media.giphy.com/media/5z60tYdslGgi8bgM8S/giphy.gif",
      "https://media.giphy.com/media/l41m3QOmTFdtzmrks/giphy.gif",
      "https://media.giphy.com/media/l4q8eZbcBSSKyeNby/giphy.gif",
      "https://media.giphy.com/media/c4uMOcw6FkgY8/giphy.gif",
      "https://media.giphy.com/media/3oEdv5S8Th6b9gsNqM/giphy.gif",
      "https://media.giphy.com/media/QNZn5pG43P2Vi/giphy.gif",
      "https://media.giphy.com/media/xTiTnhq14Co9GCTh0k/giphy.gif",
      "https://media.giphy.com/media/3ohs7YeUPPTHWEqMaA/giphy.gif",
      "https://media.giphy.com/media/NS6SKs3Lt8cPHhe0es/giphy.gif"
    ];
    var giphy = giphyArr[Math.floor(Math.random() * giphyArr.length)];
    $("#burger_pic").attr('src',giphy);
  }); 

  $("#burger_pic").mouseleave("",function(event) { 
    var icon = "./assets/img/fast-food.png"
    $("#burger_pic").attr('src',icon);
  });

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        // console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
