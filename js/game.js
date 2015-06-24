console.log("game.js loaded");

var initGame = function(){
	initDeck();
	player.initialDeal();
	console.log(player.hand);
};

playerBank = {
	balance: 500,
	currentBet: 0,

	makeBet: function(){
		this.currentBet = prompt("Enter bet!")
		while (this.currentBet > this.balance){
			alert("Insufficient funds");
			this.currentBet = prompt("Enter bet!");
		}
		this.balance -= this.currentBet;
		console.log("Bank balance: " + this.balance);
		console.log("Current bet: " + this.currentBet);
		return;
	},

	wonBet: function(){
		this.balance+=(this.currentBet * 2);
		this.currentBet = 0;
		console.log("Bank balance: " + this.balance);
	},

	lostBet: function(){
		this.currentBet = 0;
		console.log("Bank balance: " + this.balance);
	},
	
	drawBet: function(){
		this.balance+=this.currentBet;
		this.currentBet = 0;
		console.log("Bank balance: " + this.balance);
	}
};

var playerTurn = function(){
	playerBank.makeBet();
	var playerHit = confirm("Hit?");
	player.hit();

	while(!player.checkBust() && playerHit){
		playerHit = confirm("Hit?");
		if (playerHit){
			player.hit();
		};
	};
}

var dealerTurn = function(){
	dealer.initialDeal();
	dealer.hit();
}

var playGame = function(){
	initGame();
	playerTurn();

	if(player.checkBust()){
		playerBank.lostBet();
	}

	else{
		dealerTurn();
		if(dealer.checkBust()){
			playerBank.wonBet();
		}
		else{
			var finalResult = compareHands();
			case(finalResult){
				case "player":
					playerBank.wonBet();
					break;
				case "dealer":
					playerBank.lostBet();
					break;
				case "draw":
					playerBank.drawBet();
			}
		}
	}
}














