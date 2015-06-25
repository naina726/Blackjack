console.log("hand.js loaded");

var player = {
	hand: [],
	currentSum: 0,

	computeValue: function(){
		this.currentSum = 0;
		for(var i = 0; i < (this.hand).length; i++){
			this.currentSum += (this.hand[i].value)
		};
		return;
	},

	initialDeal: function(){
		this.hand.push(deck.shift());
		this.hand.push(deck.shift());
		this.computeValue();
		console.log("Player current total: " + this.currentSum);
		return;
	},

	hit: function(){
		this.hand.push(deck.shift());
		this.computeValue();
		this.checkBust();
		console.log("Player current total: " + this.currentSum);
		return;
	},

	checkBust: function(){
		if (this.currentSum > 21){
			alert(this.currentSum + " - BUST! YOU LOSE");
			return true;
		};
		return false;
	}
};

var dealer = {
	hand: [],
	currentSum: 0,

	computeValue: function(){
		this.currentSum = 0;
		for(var i = 0; i < (this.hand).length; i++){
			this.currentSum += (this.hand[i].value)
		};
		return;
	},

	initialDeal: function(){
		this.hand.push(deck.shift());
		this.computeValue();
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
			alert(this.currentSum + " - BUST! DEALER LOSES!");
			return true;
		};
		return false;
	}
};

var compareHands = function(){
	if(player.currentSum > dealer.currentSum){
		return "player";
	}
	else if (player.currentSum < dealer.currentSum){
		return "dealer";
	}
	else{
		return "draw";
	}
	//resetDeck();
};

//////////////////////////////////////
var resetDeck = function(){
	while(player.hand != [])
	{
		deck.push(player.hand.unshift());
	}
	while(dealer.hand != [])
	{
		deck.push(player.hand.unshift());
	}
	shuffle();
};