console.log("game.js loaded");

var playerTurn = function(){
	var playerHit = true;
	while(!player.checkBust() && playerHit){
		playerHit = confirm("Hit?");
		if (playerHit){
			player.hit();
		}
	};
	return;
};

var dealerTurn = function(){
	dealer.hit();
	return;
};

var computeRoundWinner = function(){
	var finalResult = compareHands();

	if(finalResult == "playerBlackjack"){
		alert("BLACKJACK!\nPlayer wins!\n" + player.currentSum + " to " + dealer.currentSum);
		playerBank.blackjackBet();
	}
	else if (finalResult == "player"){
		alert("Player wins!\n" + player.currentSum + " to " + dealer.currentSum);
		playerBank.wonBet();
	}
	else if (finalResult == "dealer"){
		alert("Dealer wins!\n" + dealer.currentSum + " to " + player.currentSum);
		playerBank.lostBet();
	}
	else if (finalResult == "draw"){
		alert("Draw!\n" + dealer.currentSum + " to " + player.currentSum);
		playerBank.drawBet();
	}
	else{ console.log("Error with bets");}
	return;
}

var playGame = function(){
	console.log("Bank balance: $" + playerBank.returnBalance());
	playerBank.makeBet();
	player.initialDeal();
	dealer.initialDeal();

	playerTurn();

	if(player.checkBust()){
		alert("Dealer wins!\n" + dealer.currentSum + " to " + player.currentSum);
		playerBank.lostBet();
	}

	else{
		dealerTurn();
		if(dealer.checkBust()){
			alert("Player wins!\n" + player.currentSum + " to " + dealer.currentSum);
			playerBank.wonBet();
		}
		else{
			computeRoundWinner();
		}
	}
	resetDeck();
	return;
};




