/* Script.js */

$(function () {

	//alert("hello");
	/*$("button").click(function(){
		$('#box').fadeOut(1000);
	
	}); */
	
	/* ---------------------------
		  jQUERY SELECTOR METHODS
	   ---------------------------*/	  
	
	// $('h2, h3, h4').css('border', 'solid 1px red')
	
	//$('div#container').css('border', 'solid 1px red');
	
	//$('p.lead').css('border','solid 1px red');
	
	//$('li:first').css('border','solid 1px red');
	
	//$('p:odd').css('border','solid 1px red');
	
	//$('div em').css('border','solid 1px red');
	
	//$('div > p').css('border','solid 1px red');
	
    //	$(':header').css('border','solid 1px red');
	
	//$('div:contains("Anthony")').css('border','solid 1px red');
	
    /* ---------------------------
		  jQUERY EVENT METHODS
	   ---------------------------*/
	   
	$('#box').click(function() {
		alert('you just clicked the box');
	
	});
	
	$("input").blur(function() {
	
		if( $(this).val() == "" ) {
			$(this).css('border','solid 1px red');
			$('#box').text('Forgot to add text');					
		}
	});	   
	
	$("input").keydown(function() {
		
		if ( $(this).val() !== "" ) {
			 $(this).css('border','solid 1px #777');
			 $('#box').text("Thanks for that!");
		
		}
	});
	
	$("#box").hover(function() {
		$(this).text("You Hovered In");
			
	}, function() {
		$(this).text("You Hovered Out");	
		
	});


/* ---------------------------------------------------------------------------------------
   ==========================         jQuery Chaining         ============================
   --------------------------------------------------------------------------------------- */
   
   $(".notification-bar").delay(2000).slideDown().delay(3000).fadeOut();	
   
/* ---------------------------------------------------------------------------------------
   ==========================         jQuery ShowHide         ============================
   --------------------------------------------------------------------------------------- */
   
   //$("h1").hide();
   //$(".hidden").fadeIn(8000);
   
   //$("p").fadeOut();
   
   $('#box1').click(function () {
   		$(this).fadeTo( 2000, .25, function() {
   			// Animation is complete here
   			
   			$(this).slideUp();
   		
   		});
   
   });   
   
   $('.hidden').slideDown();
   
   $('button').click(function() {
   		$('#box1').slideToggle();
   
   });
	



/* ---------------------------------------------------------------------------------------
   ===========================         jQuery Animate         ============================
   --------------------------------------------------------------------------------------- */ 
   $('#left').click(function() { 
	   $('.box').animate({
			left: "-=40px",
			fontSize: "+=2px"
	   }, function() {
			// animation is complete
	   }); 
   
   });
   
      $('#up').click(function() { 
	   $('.box').animate({
			top: "-=40px",
			opacity: "+=0.1"
	   }, function() {
			// animation is complete
	   }); 
   
   });
   
      $('#right').click(function() { 
	   $('.box').animate({
			left: "+=40px",
			fontSize: "-=2px"
	   }, function() {
			// animation is complete
	   }); 
   
   });
   
      $('#down').click(function() { 
	   $('.box').animate({
			top: "+=40px",
			opacity: "-=0.1"
	   }, function() {
			// animation is complete
	   }); 
   
   });
/* ---------------------------------------------------------------------------------------
   ============================          jQuery CSS         ==============================
   --------------------------------------------------------------------------------------- */ 
   $('#circle2').css({ 	'background': '#8a8d22',
   					   	'display': 'inline-block',
   					   	'color':'white',
   					   	'text-align': 'center',
                       	'line-height': '140px',
                       	'height': '140px',
                       	'width': '140px',
                       	'margin': '40px' }).addClass('circleShape');
                
 /* ---------------------------------------------------------------------------------------
   ============================          jQuery Racr         ==============================
   --------------------------------------------------------------------------------------- */                           	
   // Click the go button
   $('#go').click(function() {
   		// build a function to see if a car has won the race
   		function checkIfComplete() {
   			if( isComplete == false ) {
   				isComplete = true;
   			} else {
   				place = 'second';
   			}		
   		}
   	
   		//get car widths
   		var carWidth = $('#car1').width();
   		
   		//get width of racetrack
   		var raceTrackWidth = $(window).width() - carWidth;
   		
   		//Generate Random # between 1 and 5000
   		var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
   		var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
   		
   		//Set a flag variable to FALSE by default
   		var isComplete = false;
   		
   		//Set a flag variable to FIRST by default;
   		var place = 'first';
   		
   		//Animate Car 1
   		$('#car1').animate({
   			
   			//move the car the width of the racetrack
   			left: raceTrackWidth
   			
   		}, raceTime1, function() {
   			// Animation is complete
   			
   			//Run a function
   			checkIfComplete();
   			
   			//give some text feedback in the race info box
   			$('#raceInfo1 span').text( 'Finnshed in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!');
   		
   		});
   		
   		//Animate Car 2
   		$('#car2').animate({
   			
   			//move the car the width of the racetrack
   			left: raceTrackWidth
   			
   		}, raceTime2, function() {
   			// Animation is complete
   			
   			//Run a function
   			checkIfComplete();
   			
   			//give some text feedback in the race info box
   			$('#raceInfo2 span').text( 'Finnshed in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!');
   		
   		});
   
   });
   
   //Reset the race
   $('#reset').click(function(){
   		$('.car').css('left','0');
   		$('.raceInfo span').text('');
   });
   
});    
   