$(document).ready(function(){
	$("#blackbg").click(function(){
		$("body").addClass("black");
	});
	$("#whitebg").click(function(){
		$("body").removeClass("black");
	});
	$('#navbar').scrollspy();
	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh')
	});
});