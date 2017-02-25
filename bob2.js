/*our API key shorted out... we think.*/
 
 var searchTerm = $("#search").val();
 var dateStart = $("#start-year").val();
 var dateEnd = $("#end-year").val();
 var amount = /*$(".data-records").val();*/ 3;

 
$(document).ready(function(){

	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	queryUrl += '?' + $.param({
	  'api-key': "4416d55bfdf341c99fa953f19c139442",
	  'q': searchTerm,
	  'begin_date': dateStart,
	  'end_date': dateEnd,
	  'page': 0
	});

	$.ajax({
	  url: queryUrl,
	  method: 'GET',
	})
	.done(function(result) {
		var articles = result.response.docs;
	  console.log(result.response.docs);
	  for (var i = 0; i < amount-1; i++) {
	  	var p = $("<p>");
	  	p.append(articles[i].headline.main);
	  	p.append(articles[i].byline.original);
	  	p.append(articles[i].section_name);
	  	p.append(articles[i].pub_date);
	  	p.append(articles[i].web_url);

	  	$("#results").append(p);
	  	console.log(articles[i]);
	  }


	});
});




