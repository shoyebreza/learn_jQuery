$(document).ready(function(){
	function getVote(int){
		var xhr = new XMLHttpRequest();
		hxr.onreadystatechange= function(){
			if (this.readyState == 4 && this.status == 200 ) {
				document.getElementById("pool").innerHTML= this.responseText;
			}
		}

		xhr.open("GET", "pool_vote.php?vote="+int,true);
		xhr.send();
	}
});