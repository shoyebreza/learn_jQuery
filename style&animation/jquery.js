$(document).ready(function() {
	var $speech = $('div.speech');
 var defaultSize = $speech.css('fontSize');
 $('#switcher button').click(function() {
 var num = parseFloat($speech.css('fontSize'));
 switch (this.id) {
 case 'switcher-large':
 num *= 1.4; 
 break;
 case 'switcher-small':
 num /= 1.4;
 break;
 default:
 num = parseFloat(defaultSize); 
 }
 $speech.css('fontSize', num + 'px');
 });

 var $firstPara = $('p').eq(3);
  $('p').eq(2).css('border', '1px solid #333');
 $('p').eq(3).css('backgroundColor', '#ccc').hide();
 $firstPara.hide(); 
 $('a.more').click(function(event) {
 event.preventDefault();
 $firstPara.animate({height: 'toggle'}, 'slow');
 var $link = $(this);
 if ($link.text() == 'read more') {
 $link.text('read less'); 
 } else {
 $link.text('read more');
 }
 });
 
});