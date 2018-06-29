/*
* Create a list that holds all of your cards
*/
const cards = [ "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle", "fa-diamond", "fa-paper-plane-o", "fa-bomb", "fa-bolt", "fa-cube", "fa-bomb", "fa-leaf", "fa-bicycle"];
let star_count = document.querySelector("ul.stars");
const star = document.querySelector("ul.stars li");
const counter = document.querySelector("span.moves");
let moves = 0;
const restart = document.querySelector(".restart");
const clock = document.querySelector("span.timer");
let seconds = 0;
let timer;
const deck = document.querySelector(".deck");
const gameBoard = document.createDocumentFragment();
const yes = document.querySelector("[name=yes]");
let totalTime = document.querySelector("p.totalTime");
let stars_rating = document.querySelector("ul.stars-rating");

createBoard();

const allCards = document.querySelectorAll(".card");
let matchedCards = [];
let openCards = [];

restart.addEventListener("click", function(event) {
  newGame();
})

yes.addEventListener("click", function(event) {
  document.querySelector(".modal").style.visibility = "hidden";
  newGame();
})

allCards.forEach(function(card) {
    card.addEventListener("click", function(event) {
      if (seconds == 0) {// start timer on first click
        startTimer(); // starts the timer immediately
        timer = setInterval(startTimer, 1000);
      }
      saveCard(card); // flip cards
    });
});

setInterval(matchCards, 2000);

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

function startTimer() {
  let minutes = Math.floor(seconds / 60);
  let otherSeconds = seconds % 60;
  seconds++;
  clock.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${otherSeconds < 10 ? '0' : ''}${otherSeconds}`;
}

function stopTimer() {
  clearInterval(timer);
}

//add displayed cards to a list
function saveCard(card) {
  if (!card.classList.contains('open') && !card.classList.contains('show')) {
    openCards.push(card);
    card.classList.add("open", "show");
  }
}

//check if cards in openCards list match
function matchCards() {
  // keep matched cards displayed
  if (openCards.length == 2) {
    if (openCards[0].isEqualNode(openCards[1])) {
      openCards[0].classList.add("match");
      openCards[1].classList.add("match");
      matchedCards.push(openCards[0], openCards[1]);
      openCards = [];
      movesCounter()
    } else {
      // flip unmatched cards back over
      openCards[0].classList.remove("open", "show");
      openCards[1].classList.remove("open", "show");
      openCards = [];
      movesCounter();
    }
  }
}

//rate quality of play by removing stars
function movesCounter() {
  moves++;
  counter.textContent = `${moves}`;
  const children = star_count.children;
  if (moves == 10) {
    star_count.removeChild(children[2]);
  } else if (moves == 20) {
    star_count.removeChild(children[1]);
  }
  else {
    return;
  }
}

// congrats modal pops up when game is won
function gameOver() {
  stopTimer();
  totalTime.textContent = clock.textContent;
  stars_rating.innerHTML = star_count.innerHTML;
  if (matchedCards.length === 16) {
    document.querySelector(".modal").style.visibility = "visible";
  };
}

// start a new game
function newGame() {
  window.location.reload(true);
}
