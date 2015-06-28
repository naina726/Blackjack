console.log("makeCards.js loaded")

var cardMaker = function(user, myCard){
	if (myCard != "fake")
	{
		var suit = myCard.suit;
		var name = myCard.idCode;
		var sColor = myCard.suitColor;

		var newCard = $("<div>").attr("class", "card");

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
			//setTimeout(function () {

			//newCard.css({"display":"table-cell", "vertical-align":"middle"})
      		$(".dealerCards").append(newCard); 
      		//}, 500);
		}
	}
	else{
		var fakeCard = $("<div>");
		fakeCard.attr("id", "dealerFlip");
		//fakeCard.css({"display":"table-cell", "vertical-align":"middle"})
		/*
		var val1 = $("<p>").attr("class", "value");
		var val2 = $("<p>").attr("class", "value");
		var val3 = $("<p>").attr("class", "value");
		fakeCard.append(val1);
		fakeCard.append(val2);
		fakeCard.append(val3);
		*/
		$(".dealerCards").append(fakeCard);
	}
}

