console.log("dom.js loaded");
var bet = 0;
var tempBal = 500;
var keepPlaying = true;
initDeck();


$("#ten").click(function(){
	$(".startDeal").prop("disabled", false);

	if(tempBal>=10){
		$("#annText").text("Place a bet and click the deck to deal!");
		bet+=10;
		tempBal-=10;
		var betString = "$" + bet.toString();
		var balString = "$" + tempBal.toString();
		$("#betBox").html(betString);
		$("#balBox").html(balString);
		$(".playerCards").empty();
		$(".dealerCards").empty();
	}
	else{
		$("#annText").text("Try a smaller amount or click the deck to deal!");
		$(".playerCards").empty();
		$(".dealerCards").empty();
	}

});
$("#twenty").click(function(){
	$(".startDeal").prop("disabled", false);

	if(tempBal>=20){
		$("#annText").text("Place a bet and click the deck to deal!");
		bet+=20;
		tempBal-=20;
		var betString = "$" + bet.toString();
		var balString = "$" + tempBal.toString();
		$("#betBox").html(betString);
		$("#balBox").html(balString);
		$(".playerCards").empty();
		$(".dealerCards").empty();
	}
	else{
		$("#annText").text("Try a smaller amount or click the deck to deal!");
		$(".playerCards").empty();
		$(".dealerCards").empty();
	}
});
$("#fifty").click(function(){
	$(".startDeal").prop("disabled", false);

	if(tempBal>=50){
		$("#annText").text("Place a bet and click the deck to deal!");
		bet+=50;
		tempBal-=50;
		var betString = "$" + bet.toString();
		var balString = "$" + tempBal.toString();
		$("#betBox").html(betString);
		$("#balBox").html(balString);
		$(".playerCards").empty();
		$(".dealerCards").empty();
	}
	else{
		$("#annText").text("Try a smaller amount or click the deck!");
		$(".playerCards").empty();
		$(".dealerCards").empty();
	}
});

$(".startDeal").click(function(){
	$("#annText").text("Hit or Stay?");
	playerBank.makeBet(bet);
	tempBal = playerBank.returnBalance();
	$(".startDeal").prop("disabled", true);
	$("#ten").prop("disabled", true);
	$("#twenty").prop("disabled", true);
	$("#fifty").prop("disabled", true);
	$("#hit").prop("disabled", false);
	$("#stay").prop("disabled", false);
	player.initialDeal();
	dealer.initialDeal();
});

$("#hit").click(function(){
	if(!player.checkBust()){
		player.hit();
		if(player.checkBust()){
			if(playerBank.balance == 0){
				$("#annText").text("You Lost!");
				setTimeout(function () {
      				 window.location.href = "youlose.html"; }, 2000);
			}
			else{
				$("#hit").prop("disabled", true);
				$("#stay").prop("disabled", true);
				playerBank.lostBet();
				bet = 0;
				var balString = "$" + playerBank.returnBalance().toString();
				$("#betBox").html("$0");
				tempBal = playerBank.returnBalance();
				var balString = "$" + tempBal.toString();
				$("#balBox").html(balString);

				$("#annText").text("You busted! Place a bet to play again.");
				$("#ten").prop("disabled", false);
				$("#twenty").prop("disabled", false);
				$("#fifty").prop("disabled", false);
				resetDeck();
			}
		}
	}			
});

$("#stay").click(function(){
	//$("#dealerFlip").remove();
	dealer.hit();
	if (dealer.checkBust()){
		if (player.hasBlackjack()){
			$("#annText").text("Blackjack! Place a bet to play again.");
			playerBank.blackjackBet();
		}
		else{
			$("#annText").text("Dealer busted, place a bet to play again.");
			playerBank.wonBet();
		}
	}

	else{
		var winner = computeRoundWinner();
		if (winner == "playerBlackjack"){
			$("#annText").text("Blackjack! Place a bet to play again.");
		}
		else if (winner == "player"){
			$("#annText").text("You Won! Place a bet to play again.");
		}
		else if (winner == "dealer"){
			if(playerBank.balance == 0){
				$("#annText").text("You Lost!");
				setTimeout(function () {
      				 window.location.href = "youlose.html"; }, 2000);
			}
			else{
				$("#annText").text("You Lost! Place a bet to play again.");
			}
		}
		else if(winner == "draw"){
			$("#annText").text("Draw! Place a bet to play again.");
		}
	}

	bet = 0;
	tempBal = playerBank.returnBalance();
	var balString = "$" + tempBal.toString();
	$("#betBox").html("$0");
	$("#balBox").html(balString);


	$("#hit").prop("disabled", true);
	$("#stay").prop("disabled", true);

	$("#ten").prop("disabled", false);
	$("#twenty").prop("disabled", false);
	$("#fifty").prop("disabled", false);

	resetDeck();
});





