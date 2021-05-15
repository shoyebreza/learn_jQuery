function showResult(str){
	if(STR.length==0){
		document.getElementById("liveSearch").innerHtml="";
		document.getElementById("liveSearch").style.border="0px";
		return;

	}

	var xmlhttp= new XMLHttpRequest();

	xmlhttp.onereadystatechange= function(){
		if(this.readyaState==4 && this.status==200){
			document.getElementById("liveSearch").innerHtml=this.responseText;
			document.getElementById("liveSearch").style.border="1px solid #A5ACB2";
		}
	}

	xmlhttp.open("GET","search.php?q="+star,true);
	xmlhttp.send();
}