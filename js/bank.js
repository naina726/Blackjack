console.log("bank.js loaded");

playerBank = {
	balance: 500,
	currentBet: 0,

	returnBalance: function(){
		return this.balance;
	},

	keepPlaying: function(){
		return (this.balance != 0);
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