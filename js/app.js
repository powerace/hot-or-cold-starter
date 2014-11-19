
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	newGame();
  	
});



function newGame(){
  		var secretNum = numGenerator();
  		//hoist userGuess to make it available anywhere outside the function
  		var userGuess;

  		console.log(secretNum);
  		

  		$("form").submit(function(event){

		var userGuess = +$('#userGuess').val();
		var numGuess = $('#guessList').children().length + 1;

		event.preventDefault();
			if (isNaN(userGuess) == false && userGuess < 101) {
		
		thermometer(userGuess, secretNum);
        $("#guessList").append('<li>'+ userGuess +'</li>');
        $("#count").text(numGuess);
    console.log(numGuess);
		
			} else {
				alert('Please enter a numeric value.');
			}

		});

  	}

 function thermometer(userGuess, secretNum) {

 	if (userGuess === secretNum){
		 		$('#feedback').text("You Got It!");  
		 		// userGuess gets interpreted as a number through conditional operation
		 	} else if ( (secretNum + 10) > userGuess && (secretNum - 10) < userGuess){
		 		$('#feedback').text("Hot");

		 	} else if ( (secretNum + 20) > userGuess && (secretNum - 20) < userGuess){
		 		$('#feedback').text("Warm");
		 		
		 	} else if ( (secretNum + 30) > userGuess && (secretNum - 30) < userGuess){
		 		$('#feedback').text("Cold");
		 		
		 	} else if ( (secretNum + 50) > userGuess && (secretNum - 50) < userGuess){
		 		$('#feedback').text("Ice Cold");
		 		
		 	} 

 	
 }


 function numGenerator(){
 	return Math.floor(Math.random() * 101)
 }