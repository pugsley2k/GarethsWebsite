-$(function() {
	$('body').removeClass('fade-out');
});

$(document).ready(function() {
 $( "#letme" ).fadeIn( "slow", function() {
    // Animation complete.
  });
});

setTimeout(function(){
		$("#aboutsection").fadeIn("slow");
		},3700);

setTimeout(function(){
		$(".aboutfooter").fadeIn("slow");
		},3700);

setTimeout(function(){
	$("#letme").fadeOut("slow");
	},2500);

setTimeout(function(){
		$(".aboutfooter").fadeOut("slow");
},2500);

setTimeout(function(){
	$("#dot1").css("visibility", "visible");
},1000);

setTimeout(function(){
	$("#dot2").css("visibility", "visible");
},1500);

setTimeout(function(){
	$("#dot3").css("visibility", "visible");
},2000);

$(document).ready(function() {
	$("#card").flip({
		axis: 'x',
		reverse: true
	});
	$("#card > .back").css("display", "block")
});
$("#card-2").hover(function() {
	$(this).flip({
		axis: 'x',
		reverse: true
	});
	$("#card-2 > .back").css("display", "block")
});
$(document).ready(function() {
	$('#logo').mouseenter(function() {
		$(this).attr('src', 'css/img/faded.png');
	});
});
$(document).ready(function() {
	$('#logo').mouseleave(function() {
		$(this).attr('src', 'css/img/logo.png');
	});
});
$(document).ready(function() {
	$('#card').mouseenter(function() {
		$(this).attr('src', 'css/img/logo.png');
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		$("#simple").addClass('animated bounceInLeft');
		$("#simple").css("display", "block");
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		$("#smart").addClass('animated bounceInRight');
		$("#smart").css("display", "block");
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		$("#affordable").addClass('animated bounceInUp');
		$("#affordable").css("display", "block");
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		$("#splitter").addClass('animated fadeInLeft');
		$("#splitter").css("display", "block");
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		$("#splitter1").addClass('animated fadeInRight');
		$("#splitter1").css("display", "block");
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		$("#splitter2").addClass('animated fadeInLeft');
		$("#splitter2").css("display", "block");
	});
});

