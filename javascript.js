// let topics = [];
// $("#createBtn").on("click", function(event) {
//     event.preventDefault();
//     var fruitType = $("#createBtn").val().trim();
//     topics.push(fruitType);

// console.log(topics);
// });

// var createButton = function() {
//   var newButton = $("<btn>");
   
// }
var searchGiphy = function(fruit) {
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hDcyYQDAb4wguGxBI8nGwH1wyhq0SA1g&q=" + fruit + "&limit=10&lang=en";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.rating);

  });
};
  searchGiphy("banana");
  searchGiphy("papaya");

