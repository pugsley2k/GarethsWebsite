$(function() {
	$('body').removeClass('fade-out');
});
//.append----------------------------------------------------------
$("input[type=text]").keypress(function(event) {
	if (event.which === 13) {
		var t = $(this).val();
		$(this).val("");
		$("ul").append("<li>" + t + "</li>")
	}
});
//.mouseover-------------------------------------------------------
$("#mo").mouseover(function() {
	$("#mo").css("color", "red");
});
$("#h2mo").mouseover(function() {
	$("#h2mo").css("color", "red");
});
//.mouseleave-------------------------------------------------------
$("#ml").mouseleave(function() {
	$("#ml").css("color", "red");
});
$("#h2ml").mouseleave(function() {
	$("#h2ml").css("color", "red");
});
//.on-------------------------------------------------------
$("#on").on("click", function() {
	$("#on").css("color", "red");
});
$("#icon").mouseover(function() {
	$(this).css("color", "red");
});
$("#icon").mouseleave(function() {
	$(this).css("color", "white");
});
$("#h2on").on("click", function() {
	$("#h2on").css("color", "red");
});
$("#icon").click(function() {
	$(this).toggleClass('fa-toggle-off fa-toggle-on');
});
$("#icon").click(function() {
	$("body").toggleClass("test");
});
$("#animate").click(function() {
	$(".moveme").animate({
		left: '250px'
	});
});

$(document).ready(function() {
	$('#settime').click(function() {
		setTimeout("alert('Boom!');", 2000);
	});
});



$(window).scroll(function() {
	if ($(this).scrollTop() > 2) {
		$('.circle').addClass("circlesmall").fadeIn();
		$('.circle').text("H");
		$('.circle1').addClass("circlesmall1");
		$('.circle1').text("P");
		$('.circle2').addClass("circlesmall2");
		$('.circle2').text("C");
		$('header').addClass("sticky");
	} else {
		$('.circle').removeClass("circlesmall");
		$('.circle').text("Home");
		$('.circle1').removeClass("circlesmall1");
		$('.circle1').text("Potfolio");
		$('.circle2').removeClass("circlesmall2");
		$('.circle2').text("Contact");
		$('header').removeClass("sticky");
	}
});

setTimeout(function(){
	$("#settime").css("color", "red");
},3000);

