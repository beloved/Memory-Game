//Add cards to array
let gameBoard = document.getElementById('game-board');
let gameCard = document.getElementsByClassName('game-card');
let cards = [...gameCard];


let openCards = [];

//Load shell images to array- shell images used from https://pixabay.com/en/shell-seashell-nautilus-clam-1599178/
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

function makeCard (id, imageName){
    const img = document.createElement('img');
    img.src = 'img/' + imageName;
    const div = document.createElement('div');
    div.id = id;
    div.classList.add('game-card');
    div.appendChild(img);
    return div;
}

for (let i = 0; i < shells.length; i++) {
    const card = makeCard(i, shells[i]);
    gameBoard.appendChild(card);
}


//Add eventlistener to each gameCard

for (const card of cards) {
    card.addEventListener('click', showCard);
    card.addEventListener('click', addCard);
}
//Display clicked gameCard
function showCard () {

    this.classList.toggle("open");
    this.classList.toggle("show");

}

//Add clicked gameCard to a *list* of "open" cards
function addCard() {
    openCards.push(this);
}


// /*
//  * Display the cards on the page
//  *   - shuffle the list of cards using the provided "shuffle" method below
//  *   - loop through each gameCard and create its HTML
//  *   - add each gameCard's HTML to the page
//  */
//
// // Shuffle function from http://stackoverflow.com/a/2450976
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
//
//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//
//     return array;
// }
//
//
// /*
//  * set up the event listener for a gameCard. If a gameCard is clicked:
//  *  - display the gameCard's symbol (put this functionality in another function that you call from this one)
//  *
//  *  - add the gameCard to a *list* of "open" cards (put this functionality in another function that you call from this one)
//  *  - if the list already has another gameCard, check to see if the two cards match
//  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//  *    + if the cards do not match, remove the cards from the list and hide the gameCard's symbol (put this functionality in another function that you call from this one)
//  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
//  */

