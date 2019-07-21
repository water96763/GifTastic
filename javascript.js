let topics = [];

// function alertFruitName() {
//   let fruitName = $(this).attr("data-name");
// }


function renderButtons() {
  $("#gifInfo").empty();

  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("fruit");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#gifInfo").append(a);
  }
}

function searchGiphy() {
  
  var fruit = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hDcyYQDAb4wguGxBI8nGwH1wyhq0SA1g&q=" + fruit + "&limit=10&lang=en";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var fruitDiv = $("<div class='fruit'>")
    var rating = response.rating;
    var pOne = $("<p>").text("Rating: " + rating);
    fruitDiv.append(pOne);
    var imgURL = response.original_still.url;
    var image = $("<img>").attr("src", imgURL);
    fruitDiv.append(image);

    
    console.log(response.rating);
    $("#gifInfo").text(JSON.stringify(response));
  });
};

  $("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var fruit = $("#gif-search").val().trim();
    topics.push(fruit);
    renderButtons();
    // searchGiphy();
});

$(document).on("click", ".fruit", searchGiphy);

renderButtons();
