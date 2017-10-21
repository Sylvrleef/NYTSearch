var searchTerm = "trump";

var url = "https://api.nytimes.com/svc/archive/v1/2016/1.json" + searchTerm + "&api-key=bf54a6307b9545ac8f98e8edddec3c3e";


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
