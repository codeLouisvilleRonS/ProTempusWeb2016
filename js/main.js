$(document).ready(function() {
     
	// Get Quote of the day
    $.ajax({type: "POST",
            crossDomain : true,
            url: "http://api.forismatic.com/api/1.0/",
            data: {method: "getQuote",format: "jsonp",lang: "en"},
            dataType: "jsonp",
            jsonp: "jsonp",
            jsonpCallback: "myJsonMethod"
    });
});

/******  Add Quote of the day to page ********/

function myJsonMethod(response){
	
 	//alert(JSON.stringify(response));	

  $('#log').prepend('<div>' + $('#response').html() + '</div>');
  $('#response').html(response.quoteText + " - " + response.quoteAuthor);
}

  