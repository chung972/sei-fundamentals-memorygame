console.log("Up and running!");


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

var cardOne = cards[2];
cardsInPlay.push(cardOne);
console.log("You flipped "+cardOne);

var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("You flipped "+cardTwo);

if(cardsInPlay.length===2){
	if(cardsInPlay[0]===cardsInPlay[1]){
		alert("You found a match!");
	} else{
		alert("Sorry, try again.");
	}
}