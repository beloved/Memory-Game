

//Create shell images array - shell images used from https://pixabay.com/en/shell-seashell-nautilus-clam-1599178/
let imgArray = [
    '../img/shell1.png',
    '../img/shell2.png',
    '../img/shell3.png',
    '../img/shell4.png',
    '../img/shell5.png',
    '../img/shell6.png',
    '../img/shell7.png',
    '../img/shell8.png',
];

const shells = [...imgArray, ...imgArray];

//Shuffle shells Array
shells.sort(()=>0.5-Math.random());

//make the game board
let gameBoard = document.getElementById('game-board');

//Function makeCards created with Mentor Examples/Support
function makeCard (imageName){
    const image = document.createElement('img');
    image.src = 'img/' + imageName;
    const cardBack = document.createElement('div');
    cardBack.classList.add('game-card');
    cardBack.appendChild(image);
    image.style.visibility = 'hidden';
    return cardBack;

}

for (const shell of shells) {
    const card = makeCard(shell);
    gameBoard.appendChild(card);
}

//Add eventlistener to each gameCard
let gameCard = document.getElementsByClassName('game-card');
let cards = [...gameCard];
for (const card of cards) {
    card.addEventListener('click', showCard);
    card.addEventListener('click', cardsOpen);

}

//Display clicked gameCard
function showCard () {
    if (this.firstChild.style.visibility === 'hidden') {
        this.firstChild.style.visibility = 'visible';
    }

    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('disabled');

}

//Add clicked gameCard to a *list* of "open" cards
let openCards = [];
let countMatch = 0;
let showStars;
let lastMove;
let finishTime;
function cardsOpen() {
    openCards.push(this);
    if (openCards.length === 2) {
       countMoves();
        if (openCards[0].innerHTML === openCards[1].innerHTML){

            //Cards Match - Make a function
            openCards[0].classList.remove('open', 'show');
            openCards[1].classList.remove('open', 'show');
            openCards[0].classList.toggle('match');
            openCards[1].classList.toggle('match');
            openCards = [];
            countMatch ++;
            // You Win - Make a function

            if (countMatch === 8) {
                clearInterval(startTime);
                showStars = document.querySelector('.stars').innerHTML;
                lastMove = document.querySelector('.moves').innerHTML;
                finishTime = document.querySelector('.timer').innerHTML;

                document.getElementById('star-rating').innerHTML = showStars;
                document.getElementById('show-moves').innerHTML = lastMove ;
                document.getElementById('final-time').innerHTML = finishTime;
                showCongrats();
            }

        } else {

            //No Match - Make a function

            setTimeout(function() {
                openCards[0].classList.remove('open', 'show', 'disabled');
                openCards[1].classList.remove('open', 'show', 'disabled');
                openCards[0].firstChild.style.visibility = 'hidden';
                openCards[1].firstChild.style.visibility = 'hidden';
                openCards = [];
            }, 500);
        }
    }
}

//Count and show moves
let moves = 0;
let showMoves = document.querySelector('.moves');
let stars = document.getElementsByClassName('star');

function countMoves(){
    moves++;
    showMoves.innerHTML = moves;
    if (moves === 1) {
        second = 0;
        minute = 0;
        startTimer();
    }

    if (moves > 12 && moves < 24) {
        stars[2].style.visibility = 'hidden';
    }
    else if (moves > 24) {
        stars[1].style.visibility = 'hidden';
    }

}

//Timer


let second = 0;
let minute = 0;
let timer = document.querySelector('.timer');
let startTime;
function startTimer() {

   startTime = setInterval(function () {
        timer.innerHTML = `${minute} min(s) ${second} sec(s)`;
        second++;
        if (second === 60) {
            minute++;
            second = 0;
        }
    }, 1000);
}

// Congrats Modal

let modal = document.getElementById('congrats');
let span = document.getElementsByClassName("modal-close")[0];

function showCongrats() {
    modal.style.visibility='visible';
    span.onclick = function() {
        modal.style.visibility= 'hidden';
    }

}


