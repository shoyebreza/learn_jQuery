var values = $(this).serialize();

$.ajax({
	url:"test.php",
	type:"post",
	daata: values,
	success: function(response){

	},
	err:function(jqXHR, textStatus, errThrown){
		console.log(textStatus, errThrown);
	}
});