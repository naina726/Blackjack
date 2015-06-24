console.log("game.js loaded");

var initGame = function(){
	initDeck();
	player.initialDeal();
	console.log(player.hand);
	
}