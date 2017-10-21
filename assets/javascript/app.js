$(document).ready(function () {

    var searchTerm = "trump";

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "bf54a6307b9545ac8f98e8edddec3c3e"
    });

    console.log(url);


    $.ajax({
        url: url,
        method: 'GET'
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });


    // Display the "TITLE" of the article
    $("#title").text("")


});
