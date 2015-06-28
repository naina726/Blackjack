console.log("hand.js loaded");

var player = {
	hand: [],
	currentSum: 0,

	computeValue: function(){
		this.currentSum = 0;
		aceHigh = 0;
		aceLow = 0;
		var firstAce = true;
		for(var i = 0; i < (this.hand).length; i++){
			if ((this.hand[i].idCode == "A") && firstAce){
				aceHigh += 11;
				aceLow += 1;
				firstAce = false;
			}
			else{
				aceHigh += this.hand[i].value;
				aceLow += this.hand[i].value;
			}
		};

		if (aceHigh <= 21){
			this.currentSum = aceHigh;
		}
		else{
			this.currentSum = aceLow;
		}
		return;
	},

	showHand: function(){
		var handVals = [];
		for (var i = 0; i < this.hand.length; i++){
			handVals.push(this.hand[i].idCode);
			//handVals.push(this.hand[i].value);
		}
		return handVals;
	},

	initialDeal: function(){
		this.hand.push(deck.shift());
		this.hand.push(deck.shift());
		this.computeValue();

		console.log("Player hand: " + this.showHand());
		console.log("Player current total: " + this.currentSum);
		return;
	},

	hit: function(){
		this.hand.push(deck.shift());
		this.computeValue();
		this.checkBust();
		console.log("Player hand: " + this.showHand());
		console.log("Player current total: " + this.currentSum);
		return;
	},

	checkBust: function(){
		if (this.currentSum > 21){
			//alert(this.currentSum + " - BUST! YOU LOSE");
			return true;
		};
		return false;
	},

	hasBlackjack: function(){
		return (this.currentSum == 21);
	}
};

var dealer = {
	hand: [],
	currentSum: 0,

	computeValue: function(){
		this.currentSum = 0;
		aceHigh = 0;
		aceLow = 0;
		var firstAce = true;
		for(var i = 0; i < (this.hand).length; i++){
			if ((this.hand[i].idCode == "A") && firstAce){
				aceHigh += 11;
				aceLow += 1;
				firstAce = false;
			}
			else{
				aceHigh += this.hand[i].value;
				aceLow += this.hand[i].value;
			}
		};

		if (aceHigh <= 21){
			this.currentSum = aceHigh;
		}
		else{
			this.currentSum = aceLow;
		}
		return;
	},

	initialDeal: function(){
		this.hand.push(deck.shift());
		this.computeValue();
		console.log("Dealer's visible hand: " + this.hand[0].idCode);
		console.log("Dealer current total: " + this.currentSum);
		return;
	},

	hit: function(){
		while (this.currentSum < 17){
			this.hand.push(deck.shift());
			this.computeValue();
			this.checkBust();
			console.log("Dealer current total: " + this.currentSum);
		}
		return;
	},

	checkBust: function(){
		if (this.currentSum > 21){
			//alert(this.currentSum + " - BUST! DEALER LOSES!");
			return true;
		};
		return false;
	}
};

var compareHands = function(){
	if (player.currentSum == 21){
		if(dealer.currentSum == 21){
			return "draw";
		}
		else{
			return "playerBlackjack";
		}
	}
	else if(player.currentSum > dealer.currentSum){
		return "player";
	}
	else if (player.currentSum < dealer.currentSum){
		return "dealer";
	}
	else{
		return "draw";
	}
};

//////////////////////////////////////
var resetDeck = function(){
	while(player.hand.length != 0)
	{
		deck.push(player.hand.pop());
	}
	while(dealer.hand.length != 0)
	{
		deck.push(dealer.hand.pop());
	}
	player.currentSum = 0;
	dealer.currentSum = 0;
	shuffle();
	return;
};