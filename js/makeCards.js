var cardMaker = function(user, myCard){

	// (myCard != "fake")
	//{
		var suit = myCard.suit;
		var name = myCard.idCode;
		var sColor = myCard.suitColor;

		var newCard = $("<div>").attr("class", "cardINTERNAL card");

		var val1 = $("<p>").attr("class", "value");
		val1.attr("id", "first");
		val1.text(name);

		var val2 = $("<p>").attr("class", "value");
		val2.attr("id", "second");
		val2.text(name);

		var disSuit = $("<p>").attr("class", "suit");
		disSuit.html(suit);

		if(sColor == "red"){
			val1.css("color", "rgb(218,0,4)");
			val2.css("color", "rgb(218,0,4)");
			disSuit.css("color", "rgb(218,0,4)");
		}
		else{
			val1.css("color", "black");
			val2.css("color", "black");
			disSuit.css("color", "black");
		}

		newCard.append(val1);
		newCard.append(disSuit);
		newCard.append(val2);

		if(user == "p"){
			$(".playerCards").append(newCard);
		}
		else{
			$(".dealerCards").append(newCard);
		}
	/*}
	else{
		var fakeCard = $("<div>").attr("class", "cardINTERNAL card backC");
		fakeCard.attr("id", "dealerFlip");
		$(".dealerCards").append(fakeCard);
	}*/
}

