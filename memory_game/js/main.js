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

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];	

var checkForMatch = function(){

	if(cardsInPlay[0]===cardsInPlay[1]){
		/*note that the index values for the condition
		are HARD CODED; cardsInPlay[] shooouuld only 
		have 2 elements, but i think we may need a way
		to clear it, would make the game more robust
		(i guess the user could just refresh the page); 
		*/
		console.log("You found a match!");
	} else{
		console.log("Sorry, try again.");
	}
	
};

var flipCard = function(cardId){
	console.log("User flipped "+cards[cardId]+".");
	cardsInPlay.push(cards[cardId]);

	if(cardsInPlay.length===2){
		/*note that due to the condition in of the if 
		statement, this code block flat out won't run 
		if the array length is anything but a 2*/
		checkForMatch();
	}
};

flipCard(2);
flipCard(3);





