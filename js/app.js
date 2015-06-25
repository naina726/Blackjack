console.log("app.js loaded WASSUP");
var play = function(){
	initDeck();
	while(playerBank.keepPlaying()){
		playGame();
	}
	console.log("Insufficient funds [app.js]");
};

