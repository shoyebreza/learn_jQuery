<?php
$xmlDOC= new DOMDocument();
$xmlDOC->load("links.xml");

$x= $xmlDOC->getElementByIdTagName('link');
$q= $_GET['q'];
if(strlen($q)>0){
	$hint="";
	for($i=0; $i<($x->length); $i++){


		$y=$x->item($i)->getElementByIdTagName('title');
		$z=$x->item($i)->getElementByIdTagName('url');

		if($y->item(0)->nodeType==1){
			if(stristr($y->item(0)->childNodes->item(0)->nodeValue,$q)){
				if($hint==""){
					$hint="<a href='".$z->item(0)->childNodes->item(0)->nodeValue."' target='_blank'>".$y->item(0)->childNodes->item(0)->nodeValue."</a>";

				}else{
					$hint= $hint."<br/><a href='".$z->item(0)->childNodes->item(0)->nodeValue."' target='_blank'>".$y->item(0)->childNodes->item(0)->nodeValue."</a>";
				}
			}

		}
	}
}

if ($hint=="") {
	$response="no suggestions";
}else{
	$response = $hint;
}

echo $response;


?>