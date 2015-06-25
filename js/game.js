console.log("game.js loaded");

var initGame = function(){
	initDeck();
	player.initialDeal();
	dealer.initialDeal();
	console.log(player.hand);
	console.log(dealer.hand);
	console.log("Bank balance: $" + playerBank.returnBalance())
};

playerBank = {
	balance: 500,
	currentBet: 0,

	returnBalance: function(){
		return this.balance;
	},

	makeBet: function(){
		this.currentBet = parseInt(prompt("Enter bet!"));
		while (this.currentBet > this.balance){
			alert("Insufficient funds");
			this.currentBet = prompt("Enter bet!");
		}
		this.balance -= this.currentBet;
		console.log("Bank balance: $" + this.balance);
		console.log("Current bet: $" + this.currentBet);
		return;
	},

	wonBet: function(){
		this.balance+=(this.currentBet * 2);
		this.currentBet = 0;
		console.log("Bank balance: $" + this.balance);
	},

	lostBet: function(){
		this.currentBet = 0;
		console.log("Bank balance: $" + this.balance);
	},
	
	drawBet: function(){
		this.balance += this.currentBet;
		this.currentBet = 0;
		console.log("Bank balance: $" + this.balance);
	},

	blackjackBet: function(){
		this.balance += (this.currentBet + (this.currentBet*1.5));
		this.currentBet = 0;
		console.log("Bank balance: $" + this.balance);
	}

};

var playerTurn = function(){
	playerBank.makeBet();
	var playerHit = true;
	while(!player.checkBust() && playerHit){
		playerHit = confirm("Hit?");
		if (playerHit){
			player.hit();
		};
	};
	return;
};

var dealerTurn = function(){
	dealer.hit();
	return;
};

var computeRoundWinner = function(){
	var finalResult = compareHands();

	if(finalResult == playerBlackjack){
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
	initGame();
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




