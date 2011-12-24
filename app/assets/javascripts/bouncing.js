$(document).ready(function(){

	// Bouncer animation (by Leo Xavier)
	// BASE SPEED OF BOUNCING. WILL ADD RAINDOM 0-100 TO UNSYNC BOUNCING
	var bouncespeed = 450;
	
	// SELECT ALL A'S EXCEPT... RESET BG-POSITION TO AVOID INITIAL POSITION BUG AND CALL BOUNCER
	$('#baloon').each(
		function () {
			$(this).css({backgroundPosition: '5px 5px'});
			bounce(this);
		}
	);
	
	// ACTUAL BOUNCER. CALLBACK OF ANIMATION IS THE BOUNCER ITSELF, TO LOOP ALL NIGHT LONG
	function bounce(currentA) {
		newx = Math.floor(10*Math.random());
		newy = Math.floor(3*Math.random());
		newspeed = bouncespeed + Math.floor(10*Math.random());
		$(currentA).animate({backgroundPosition: newx + 'px ' + newy + 'px'}, newspeed, 'linear', function() { bounce(currentA);});
	}

});