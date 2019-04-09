/* == LOOSE comparison; only compares values
   === STRICT comparison; compares type AND value

   everything in js has an INHERENT BOOLEAN value
   you can check whether something is "truthy" or 
   "falsey" by putting two NOTs (!!) in front

   some falsey values are: false, 0, "", null, undefined, and
   NaN (a special numeric value meaning 'Not a number')

   truthy values are: any non-empty string, any non-zero number,
   and true

   NOT !: if value is truthy, return true; if value is falsey,
   		return false
   OR ||: return FIRST truthy value; if both values are falsey,
   		return the LAST falsey value
   AND &&: return the FIRST falsey; if both values are truthy,
   		return the LAST truthy value


   switch statements will ONLY work if you are testing the SAME
   variable (or expression) in EVERY condition
   they increase readability and reduce repetition
   as a rule of thumb, use switches when you're:
   	- only working with one var
   	- you have three or more conditions to  check
*/

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var createBoard = function(){
	for(var i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		/*side note, since the script is executed WITHIN the
		html file, the path file should be relative to 'index'*/
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var cardsInPlay = [];	

var resetBoard = function(){
	var list = document.querySelectorAll("img");
	/*we select all img elements in the DOM; 4 img
	elements should be populated when we invoke the
	createBoard function*/
	for(var i=0; i<cards.length; i++){
		list[i].setAttribute('src', 'images/back.png');
		/*set all cards with their back facing up*/
		list[i].addEventListener('click', flipCard);
		/*in the checkForMatch function, we remove all
		EventListeners once two cards are flipped; we
		add the EventListeners back here*/
	}
}


var wins = 0;
var losses = 0;

var checkForMatch = function(){
	if(cardsInPlay.length===2){
		if(cardsInPlay[0]===cardsInPlay[1]){
			alert("You found a match! Press the Reset button to play again!");
			wins++;
			
		} else{
			alert("Sorry, try again.");
			losses++;
		}

		var list = document.querySelectorAll("img");
		for(var i=0; i<cards.length; i++){
			list[i].removeEventListener('click', flipCard);
		}
		/*code block above removes the ability to flip
		cards once 2 have been selected*/
	}
	var scoreDiv = document.getElementById('score');
	scoreDiv.textContent = "Wins: "+wins+"\n"+"Losses: "+losses;
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	//console.log("User flipped "+cards[cardId].rank+".");
	cardsInPlay.push(cards[cardId].rank);
	//console.log("value of cardsinplay"+cardsInPlay);
	//console.log(cards[cardId].suit);
	//console.log(cards[cardId].cardImage);

	var newSrc = cards[cardId].cardImage;
	this.setAttribute('src', newSrc);
	this.removeEventListener('click', flipCard);
	/* removed the ability for the user to click on the
	same flipped card twice in order to get a match	*/

	var delayInMilliseconds = 100;
	/*added a short delay, so that the user will see 
	the card flip before being alerted*/
	setTimeout(checkForMatch, delayInMilliseconds);
	/*constantly checking to see if the conditions
	for checkForMatch are met*/
};

createBoard();

var resetGame = function(){
	cardsInPlay = [];
	resetBoard();
}

var btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', resetGame);





