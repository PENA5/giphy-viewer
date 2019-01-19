var animals = ["kangaroo","turtle","tiger","eagle","panther","goat","bull","lion","shark","monkey","dog","hawk","cat","rabbit","crab","whale","gorrila","duck","horse","cow","moose","bat"];

function displayGiphyInfo(){

    var animal = $(this).attr("data-name");
   // console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);

        var results = response.data;

        for(var i = 0; i < results.length; i++) {

        var giphyDiv = $("<div class= 'giphy'>");

       // var rating = response.Rated;

        var p = $("<p>").text("Rating: " + results[i].rating);

        giphyDiv.append(p);

      //  var imgURL = response.Poster;

        var image = $("<img>").attr("src", results[i].images.fixed_height.url);

        giphyDiv.append(image);

        $("#giphy-view").prepend(giphyDiv);

    }

    });

}

    function renderButtons(){

        $("#buttons").empty();

        for (var i = 0; i < animals.length; i++) {

            var giphyArray = $("<button>");
            giphyArray.addClass("animal-btn");
            giphyArray.attr("data-name", animals[i]);
            giphyArray.text(animals[i]);
            $("#buttons").append(giphyArray);

        }

    }

    $("#add-animal").on("click", function(event) {
        event.preventDefault();

        var giphy = $("#search-input").val().trim();

        animals.push(giphy);

        renderButtons();
    });

    $(document).on("click", ".animal-btn", displayGiphyInfo);

    renderButtons();