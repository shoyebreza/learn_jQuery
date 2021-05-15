$(document).ready(function(){
	$("#result").toggleClass("result");

	$("#add").click(function(){
		var a = $("#fld1").val();
		var b = $("#fld2").val();
		$("#result").html(+a + +b);
	});


	$("#sub").click(function(){
		var a = $("#fld1").val();
		var b = $("#fld2").val();
		$("#result").html(+a - +b);
	});


	$("#mul").click(function(){
		var a = $("#fld1").val();
		var b = $("#fld2").val();
		$("#result").html(+a * +b);
	});


	$("#div").click(function(){
		var a = $("#fld1").val();
		var b = $("#fld2").val();
		$("#result").html(+a / +b);
	});
})