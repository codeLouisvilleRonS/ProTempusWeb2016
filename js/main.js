$(document).ready(function() {
     
    $.ajax({type: "POST",
            crossDomain : true,
            url: "http://api.forismatic.com/api/1.0/",
            data: {method: "getQuote",format: "jsonp",lang: "en"},
            dataType: "jsonp",
            jsonp: "jsonp",
            jsonpCallback: "myJsonMethod"
    });
});


function myJsonMethod(response){	
 	//alert(JSON.stringify(response));	

  $('#log').prepend('<pre>' + $('#response').html() + '</pre>');
  $('#response').html(response.quoteText + " - " + response.quoteAuthor);
}

  