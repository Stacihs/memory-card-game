/*
 * Create a list that holds all of your cards
 */
 const cards = [ "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle", "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle"];

const deck = document.querySelector(".deck");
const gameBoard = document.createDocumentFragment();


//generate game board
function createBoard() {
    shuffle(cards);
    for (const card of cards) {
      const li = document.createElement("li");
      li.innerHTML = `<li class="card"><i class="fa ${card}"></i></li>`;
      gameBoard.appendChild(li);
      deck.appendChild(gameBoard);
    };

    return deck;
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
createBoard();

const allCards = document.querySelectorAll(".card");
let openCards = [];
let matchedCards = [];
let moves = 0;

allCards.forEach(function(card) {
   card.addEventListener("click", function(event) {
     card.classList.add("open", "show");
     saveCard(card);
  });
});


function startGame() {

}

//add displayed cards to list
function saveCard(card) {
  openCards.push(card);
}


//check if cards in list match
function matchCards(card) {
  if (openCards[0].isEqualNode(openCards[1])) {
    openCards[0].classList.add("match");
    openCards[1].classList.add("match");
    matchedCards.push(openCards[0], openCards[1]);
    openCards = [];
  } else {
    openCards[0].classList.remove("open", "show");
    openCards[1].classList.remove("open", "show");
    openCards = [];
  }
}


function countMoves() {


}

//quality of play
function starRating() {

}

function gameOver() {
  
}
