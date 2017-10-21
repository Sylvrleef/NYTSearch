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
    // .response.docs[i].headline.main
    $("#title").text("")






    // Display the "AUTHOR" of the article
    // .response.docs[i].byline.original



    // Display the "DATE" of the article
    // .response.docs[i].pub_date



    // Display the "SOURCE" of the article
    // .response.docs[i].source



    // Display the "URL" of the article
    // .response.docs[i].web_url


});
