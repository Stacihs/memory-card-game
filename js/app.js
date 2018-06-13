/*
 * Create a list that holds all of your cards
 */
 const cards = [ "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle", "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle"];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//generate game board
function createBoard() {

}

function startGame() {

}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


 const everyCard = document.querySelectorAll(".card");
 let openCards = [];
 const card = document.querySelector("li.card");

//show card
everyCard.forEach(function(card) {
   card.addEventListener("click", function(evt) {
     card.classList.add("open", "show");
     console.log(card);
   });
});

//add matched cards to list of open cards
function saveCards() {
  const openCard = card.classList.contains("open", "show", "match");
  openCards.push(openCard);
  console.log(openCards);
}

function matchCards() {


}

function countMoves() {

}

//quality of play
function starRating() {

}

function gameOver() {

}
