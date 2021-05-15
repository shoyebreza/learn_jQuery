
var request;

$("#foo").submit(function(event){
	event.preventDefault();
	if(request){
		request.abort();
	}
	var $form = $(this);
	var $inputs = $form.find("input,select,button,textarea");
	var serializedData = $form.serialize();
	$inputs.prop("disabled", true);

	request= $.ajax({
		url:"form.php",
		type:"post",
		data:serializedData
	});
	console.log("hurray , it worked!!");
});