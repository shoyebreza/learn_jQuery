$(document).ready(function() {
 $('#add').click(function(){
 	 $('<input type="text" name="this"><br>').appendTo('body');
 });

 $('span.pull-quote').each(function(index) {
 var $parentParagraph = $(this).parent('p');
 $parentParagraph.css('position', 'relative');
 var $clonedCopy = $(this).clone();
 $clonedCopy
 .addClass('pulled')
 .prependTo($parentParagraph);
 });

});



 
