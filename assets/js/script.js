$(".btnStyle").on("click", function () {
    event.preventDefault();
    $(".textbody").hide();
    $("#test-eq").hide();
    var search = $("#search-input").val();
    console.log(search);
    // Character Info API
    var queryURL = "https://www.anapioficeandfire.com/api/characters/?name=" + search;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);
         //$(".content").text("CHARACTER = " + data[0].born + " " + data[0].culture + " " + data[0].gender + " " + data[0].aliases + " " + data[0].aliases);
        var name = $("<p>").text("Name: " + data[0].name);
        $(".content").append(name);
        var born = $("<p>").text("Born: " + data[0].born);
        $(".content").append(born);
        var culture = $("<p>").text("Culture: " + data[0].culture);
        $(".content").append(culture);
        var gender = $("<p>").text("Gender: " + data[0].gender);
        $(".content").append(gender);
        var titles = $("<p>").text("Titles: " + data[0].titles);
        $(".content").append(titles);
        var aliases = $("<p>").text("Aliases: " + data[0].aliases);
        $(".content").append(aliases);

    });
    // Books API
    var queryURLbooks = "https://www.anapioficeandfire.com/api/books/5";
    $.ajax({
        url: queryURLbooks,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        //$(".content2").text("BOOK = " + data.name + " " + data.authors[0] + " " + data.publisher + " " + data.country + " " + data.mediaType + " " + data.numberOfPages + " " + data.released);
        var book = $("<p>").text("Book: " + data.name);
        $(".content2").append(book);
        var authors = $("<p>").text("Author: " + data.authors[0]);
        $(".content2").append(authors);
        var publisher = $("<p>").text("Publisher: " + data.publisher);
        $(".content2").append(publisher);
        var country = $("<p>").text("Country: " + data.country);
        $(".content2").append(country);
        var mediaType = $("<p>").text("Media Type: " + data.mediaType);
        $(".content2").append(mediaType);
        var numberOfPages = $("<p>").text("Pages: " + data.numberOfPages);
        $(".content2").append(numberOfPages);
        var released = $("<p>").text("Released: " + data.released);
        $(".content2").append(released);
    });
    // Houses API
    var queryURLHouses = "https://www.anapioficeandfire.com/api/houses";
    $.ajax({
        url: queryURLHouses,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        // $(".content3").text("HOUSE = " + data[0].name + " " + data[0].region + " " + data[0].coatOfArms + " " + data[0].aliases);
        var house = $("<p>").text("House: " + data[0].name);
        $(".content3").append(house);
        var region = $("<p>").text("Region: " + data[0].region);
        $(".content3").append(region);
        var coatOfArms = $("<p>").text("CoatOfArms: " + data[0].coatOfArms);
        $(".content3").append(coatOfArms);

    });
    // Giphy API
    var queryGiphy = "https://api.giphy.com/v1/gifs/search?api_key=w5F8XRxKHMrbEYBn1oSBE3J3gmsYZ9v2&limit=1&q=";
    var str = document.getElementById("search-input").value.trim();
    queryGiphy = queryGiphy.concat(str);
    console.log(queryGiphy);
    fetch(queryGiphy)
        .then(response => response.json())
        .then(content => {
            console.log(content);

            console.log(content.data);
            console.log("META", content.meta);
            var fig = document.createElement("figure");
            var img = document.createElement("img");
            var fc = document.createElement("figcaption");
            img.src = content.data[0].images.downsized_large.url;
            img.alt = content.data[0].title;
            fc.textContent = content.data[0].title;
            fig.appendChild(img);
            fig.appendChild(fc);
            var content4 = document.querySelector(".content4");
            content4.prepend(fig);
        })
        .catch(err => {
            console.log(err);
        });
    document.querySelector("#search-input").value = "";
});
// Movie rating API
$("#imdb").on("click", function () {
    event.preventDefault();
    $(".textbody").hide();
    var search = $("#search-input").val();
    console.log(search);
    var queryURL = "http://www.omdbapi.com/?i=tt0944947&apikey=ce894930";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);

        var title = $("<p>").text("Title: " + data.Title);
        $(".content5").append(title);

        var release = $("<p>").text("Released: " + data.Released);
        $(".content5").append(release);

        var year = $("<p>").text("Year: " + data.Year);
        $(".content5").append(year);

        var genre = $("<p>").text("Genre: " + data.Genre);
        $(".content5").append(genre);

        var actors = $("<p>").text("Actors: " + data.Actors);
        $(".content5").append(actors);


        var plot = $("<p>").text("Plot: " + data.Plot);
        $(".content5").append(plot);

        var awards = $("<p>").text("Awards: " + data.Awards);
        $(".content5").append(awards);

        var writer = $("<p>").text("Writer: " + data.Writer);
        $(".content5").append(writer);

        var imdbVotes = $("<p>").text("ImdbVotes: " + data.imdbVotes);
        $(".content5").append(imdbVotes);

        var image = $("<img>");
        image.attr("src", data.Poster);
        $(".content5").append(image);


    });
});



