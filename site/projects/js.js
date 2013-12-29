$(document).ready(function(){
	$("#setOnDefault").click(function() {
		setState($("#select"),"default");
	});
	$("#setOnWorking").click(function() {
		setState($("#select"),"working");
	});
	$("#setOnSuccess").click(function() {
		setState($("#select"),"success");
	});
	$("#setOnЕrror").click(function() {
		setState($("#select"),"error");
	});
});