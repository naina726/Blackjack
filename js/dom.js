console.log("dom.js loaded");
var bet = 0;
var tempBal = 500;
initDeck();

//while(playerBank.returnBalance() != 0){
	$(".startDeal").click(function(){
		$("#annText").text("Place a bet and click hit!");
		$(".startDeal").prop("disabled", true);
		$("#ten").prop("disabled", false);
		$("#twenty").prop("disabled", false);
		$("#fifty").prop("disabled", false);
		//playGame();
	});

		$("#ten").click(function(){
			$("#hit").prop("disabled", false);

			if(tempBal>=10){
				$("#annText").text("Place a bet and click hit!");
				bet+=10;
				tempBal-=10;
				var betString = "$" + bet.toString();
				var balString = "$" + tempBal.toString();
				$("#betBox").html(betString);
				$("#balBox").html(balString);
			}
			else{
				$("#annText").text("Try a smaller amount or click hit!");
			}

		});
		$("#twenty").click(function(){
			$("#hit").prop("disabled", false);

			if(tempBal>=20){
				$("#annText").text("Place a bet and click hit!");
				bet+=20;
				tempBal-=20;
				var betString = "$" + bet.toString();
				var balString = "$" + tempBal.toString();
				$("#betBox").html(betString);
				$("#balBox").html(balString);
			}
			else{
				$("#annText").text("Try a smaller amount or click hit!");
			}
		});
		$("#fifty").click(function(){
			$("#hit").prop("disabled", false);

			if(tempBal>=50){
				$("#annText").text("Place a bet and click hit!");
				bet+=50;
				tempBal-=50;
				var betString = "$" + bet.toString();
				var balString = "$" + tempBal.toString();
				$("#betBox").html(betString);
				$("#balBox").html(balString);
			}
			else{
				$("#annText").text("Try a smaller amount or click hit!");
			}
		});

	$("#hit").click(function(){
		playerBank.makeBet(bet);
		tempBal = playerBank.returnBalance();
		$("#ten").prop("disabled", true);
		$("#twenty").prop("disabled", true);
		$("#fifty").prop("disabled", true);
		player.initialDeal();
		


	});

	$("#stay").click(function(){
		$("#hit").prop("disabled", true);
		$(".startDeal").prop("disabled", true);
	});
//}


