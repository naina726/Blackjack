console.log("dom.js loaded");
var bet = 0;

$(".startDeal").click(function(){
	initDeck();
	$("#annText").text("Place a bet and click hit!");

	$(".startDeal").prop("disabled", true);
	$("#ten").prop("disabled", false);
	$("#twenty").prop("disabled", false);
	$("#fifty").prop("disabled", false);
	//playGame();
});

$("#ten").click(function(){
	$("#hit").prop("disabled", false);
	bet+=10;
	$("#betBox").text("$" + bet);
});
$("#twenty").click(function(){
	$("#hit").prop("disabled", false);
	bet+=20;
	$("#betBox").text("$" + bet);
});
$("#fifty").click(function(){
	$("#hit").prop("disabled", false);
	bet+=50;
	$("#betBox").text("$" + bet);
});

$("#hit").click(function(){
	playerBank.makeBet(bet);
	$("#balBox").text("$" + playerBank.returnBalance());

	$("#ten").prop("disabled", true);
	$("#twenty").prop("disabled", false);
	$("#fifty").prop("disabled", false);
});

$("#stay").click(function(){
	$("#hit").prop("disabled", true);
	$(".startDeal").prop("disabled", true);
});
