console.log("theDeck.js loaded");

deck = [];
var card;

var Card = function(value, suit, idCode, suitColor){
  this.value = value;
  this.suit = suit;
  this.idCode = idCode;
  this.suitColor = suitColor;
  //this.imgURL = (suit + value + ".jpg");
};

var initDeck = function(){
  var allSuits = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
  var allColors = ["red", "red", "black", "black"]

  for (var i = 0; i < allSuits.length; i++){
    for (var k = 1; k < 14; k++){
      if(k == 1){
        card = new Card(1, allSuits[i], "A", allColors[i]);
        deck.push(card);
      }
      else if(k < 11){
        card = new Card(k, allSuits[i], k, allColors[i]);
        deck.push(card);
      }
      else if (k == 11){
        card = new Card(10, allSuits[i], "J", allColors[i]);
        deck.push(card);
      }
      else if (k == 12){
        card = new Card(10, allSuits[i], "Q", allColors[i]);
        deck.push(card);
      }
      else if (k == 13){
        card = new Card(10, allSuits[i], "K", allColors[i]);
        deck.push(card);
      }
      else { console.log("Error in initDeck loop"); }
    }
  }
  shuffle();
  return;
};

//Shuffle function is JS implementation of Fisher-Yates shuffle:
//from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
var shuffle = function(){
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  console.log("Shuffled");
  return;
};





