$(document).ready(function(){
	function calculator(){
		var sum = "";
		var len;
		var operator = ["+","-","*","/"];
		var inputVal = document.getElementById("#screen");

		$(".buttons .digit").on('click', function(){
			var num = $(this).attr('value');
			sum += num;
			$("#screen").html(sum);
			len = inputVal.innerHTML.split("");
			//console.log(len);
		});

		$(".buttons .operator").on('click', function(e){
			e.preventDefault();
			var ops = $(this).attr('value');
			sum += ops;
			$("#screen").html(sum);
			len = inputVal.innerHTML;
			if(/(?=(\D{2}))/g.test(sum)){
				sum= len.substring(0,len.lenth - 1);
				$("#screen").html(sum);
			}
		});

		$("#equal").on('click', function(){
			var total = eval(sum);
			$("#screen").html(total % 1 !=0 ? total.toFixed(2): total);
		});

		$("#clear").on('click', function(){
			sum = "";
			arr = [];
			$("#screen").html(0);
		});


	};

	calculator();
});