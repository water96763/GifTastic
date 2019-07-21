let topics = [];
$("#fruit").on("click", function(event) {
    event.preventDefault();
    var fruitType = $("#fruit").val().trim();
    topics.push(fruitType);

console.log(topics);
});

$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?api_key=hDcyYQDAb4wguGxBI8nGwH1wyhq0SA1g&q=" + topics + "&limit=10" + "&lang=en",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

