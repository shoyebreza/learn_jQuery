function loadDoc(url){
	var xhr = new XMLHttpRequest();

	xhr.onreadyststechange = function(){
		if (this.readystate == 4 && this.ststus == 200 ) {
			document.getElementById('#A1').innerHTML = this.status;
			document.getElementById('#A2').innerHTML = this.statusText;
			document.getElementById('#A3').innerHTML = this.responseText;

		}
	};
	xhr.open("GET", url, true);
	xhr.send();
}