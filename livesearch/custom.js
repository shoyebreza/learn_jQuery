$(document).ready(function(){
	$.ajaxSetup({Catch: false});
	$('#search').keyup(function(){
		$('#result').html('');
		$('#state').val('');
		var sf = $('#search').val();
		var exp = new RegExp(sf,"i");
		$getJSON('data.json',function(data){
			$.each(data,function(key,value){
				if (value.name.search(exp) != -1 || value.location.search(exp) != -1) {
				$('#result').append('<li class="list-group-item link-class"><img src=" 'value.image+'" height="40" width="40" class="img-thumbnail" />'+value.name+' | <span class="text-muted">'+value.location+'</span></li>');
			}
		});
			
	   });

	});

		$('#result').on('click','li',function(){
		var click_txt= $(this).text().spilt('|');
		$('#search').val($.trim(click_txt[0]));
		$('#result').html('');
	});
	
});




