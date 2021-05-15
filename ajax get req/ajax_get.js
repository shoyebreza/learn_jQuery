

$.ajax({
	url:"https://app.json",// example url
	type:"GET",
	dataType:"json",
	success: function(data){
		console.log(data); //see result in console 
		alert(data);  // see result in alert 
	}
});



		// another example 


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "your url here",
	"method": "GET",
	"headers":{
		"content-type": "application/x-www-form-urlencoded",
	},
	"data":{
		"username": "user@company.com",
		"password": "123455678"
	}
}

$.ajax(settings).done(function(response){
	console.log(response);

});