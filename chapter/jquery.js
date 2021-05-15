$(document).ready(function() {
 $('div.poem-stanza').addClass('highlight');
	 $('tr').filter(':even').addClass('highlight');
		 $('#switcher-large').on('click', function() {
			 $('body').addClass('large');

 });
		 $('#switcher-narrow').on('click', function(){
 $('body').addClass('narrow');
 $('body').removeClass('large');
 });

$('#switcher-default').on('click', function() {
 $('body').removeClass('narrow');
 $('body').removeClass('large');
 });


});