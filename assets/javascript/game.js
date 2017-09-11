var numberToGet=Math.floor(Math.random()*101+19)
$("#numberToGet").text(numberToGet);

var red= Math.floor(Math.random()*11+1)
var blue= Math.floor(Math.random()*11+1)
var yellow= Math.floor(Math.random()*11+1)
var green= Math.floor(Math.random()*11+1)

var totalScore= 0; 
var wins= 0;
var losses = 0;

$("#totalScore").text(totalScore);
$("#wins").text(wins);
$("#losses").text(losses);

function reset(){
    numberToGet=Math.floor(Math.random()*101+19);
    $("#numberToGet").text(numberToGet);
    red= Math.floor(Math.random()*11+1);
	blue= Math.floor(Math.random()*11+1);
	yellow= Math.floor(Math.random()*11+1);
	green= Math.floor(Math.random()*11+1);	
    totalScore= 0;
    $("#totalScore").text(totalScore);
} 

function win(){
	alert("You Won!!!");
	wins++; 
	$("#wins").text(wins);
	reset();
}

	function lose(){
	alert ("You Lost!!!");
	losses++;
	$("#losses").text(losses);
	reset()
}

  $("#red").on("click", function(){
    totalScore = totalScore + red;
    $("#totalScore").text(totalScore); 
        if (totalScore == numberToGet){
          win();
        }
        else if ( totalScore > numberToGet){
          lose();
        }   
  })  

 $("#blue").on("click", function(){
    totalScore = totalScore + blue;
    $("#totalScore").text(totalScore); 
        if (totalScore == numberToGet){
          win();
        }
        else if ( totalScore > numberToGet){
          lose();
        }   
  }) 

 $("#yellow").on("click", function(){
    totalScore = totalScore + yellow;
    $("#totalScore").text(totalScore); 
        if (totalScore == numberToGet){
          win();
        }
        else if ( totalScore > numberToGet){
          lose();
        }   
  }) 

 $("#green").on("click", function(){
    totalScore = totalScore + green;
    $("#totalScore").text(totalScore); 
        if (totalScore == numberToGet){
          win();
        }
        else if ( totalScore > numberToGet){
          lose();
        }   
  }) 










