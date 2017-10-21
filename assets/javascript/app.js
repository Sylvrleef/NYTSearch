function responseHandler(res) {
    const response = res.response;

    // Display the "TITLE" of the article
    console.log(response.docs[0].headline.main);

    // Display the "AUTHOR" of the article
    console.log(response.docs[0].byline.original);

    // Display the "DATE" of the article
    console.log(response.docs[0].pub_date);

    // Display the "SOURCE" of the article
    console.log(response.docs[0].source);

    // Display the "URL" of the article
    console.log(response.docs[0].web_url)
}

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
        responseHandler(result)
    }).fail(function (err) {
        throw err;
    });
});
