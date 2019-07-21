let topics = [];

function renderButtons() {
    $("#gifInfo").empty();
    $("#gifStuff").empty();
      for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("fruit");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#gifInfo").append(a);
        $("#gifForm")[0].reset();
           }
}

function searchGiphy() {
    $("#gifStuff").empty();
    var fruit = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hDcyYQDAb4wguGxBI8nGwH1wyhq0SA1g&q=" + fruit + "&limit=10&lang=en";
    
      $.ajax({
          url: queryURL,
          method: "GET"
      }).then(function(response) {
          let results = response.data;
          
            for (var i= 0; i <results.length; i++) {
              var fruitDiv = $("<div>");

              
              var image = $("<img>");
              image.attr({
                "src": results[i].images.fixed_height_small_still.url,
                "data-animate": results[i].images.fixed_height_small.url,
                "data-still": results[i].images.fixed_height_small_still.url,
                "data-state": "still",
                "class": "gif"
              });
              fruitDiv.append(image);
              var rating = results[i].rating;
              var p = $("<p>").text("Rating: " + results[i].rating);
              fruitDiv.append(p);
              
              $("#gifStuff").prepend(fruitDiv);
            }
          });
          
          $(document).on("click", ".gif", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      }); 
}

$("#searchBtn").on("click", function(event) {
  event.preventDefault();
  var fruit = $("#gif-search").val().trim();
  topics.push(fruit);
  renderButtons();
});

$(document).on("click", ".fruit", searchGiphy);

renderButtons();
