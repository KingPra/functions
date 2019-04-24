
// Exercise 1
// Calculating gratuity is a repetitive task, so let's create a couple of functions that do the work for us.   
// create a variable titled billAmount and store a random number (ie: 100)
// create a function titled gratuity()
// gratutity should:
// multiply the value of billAmount by 20%
// hint: use 0.2
// return the value
// create a function titled totalWithGrat()
// totalWithGrat should:
// take in the amount as an argument
// call the gratutity function
// add that to the original bill amount
// return the total bill + gratuity
// log the total (with gratuity) to the console
// append new total to the following phrase:
// "your total including gratuity is:"
// Limitation
// You can only invoke the totalWithGrat function when logging the result
// Bonus Question
// Find a way to fix the decimal point to only 2 places, ie: 100.00
//  (hint: the answer is in the sentence above)


const billAmount = Math.round(Math.random() * 100);
console.log(billAmount);

function gratuity() {
    const total = billAmount * 0.2;
    return total + billAmount;
}

function totalWithGrat(val) {
    return gratuity() + val;
}

console.log(`your total including gratuity is: $${totalWithGrat(100).toFixed(2)}`);


/*--------------------------------------------------------------------------*/
/*
Exercise 2  
Let's revisit Rock Paper Scissors...

Define a hands array with the values 'rock', 'paper', and 'scissors';
Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3)
Define two objects for two players. Each player has name and getHand() properties.
Define a function called playRound() that
Takes two player objects as arguments
Gets hands from each
Determines the winner
Logs the hands played and name of the winner.
If its a tie, log the hands played and "it's a tie".
Returns the winner object (null if no winner)
Define a function called playGame() that takes arguments player1, player2, and playUntil.
Play rounds until one of the players wins playUntil hands
When one player has won enough games, return the winning player object
Play a game to 5 wins

Bonus Questions
Define a function called playTournament():

Take 4 players and playUntil as arguments
Play a game between the first two players, and the second two players
Play a game between the winners of the first round.
Announce the tournament winner's name "[name] is the world champion";

*/
const hands = ['paper', 'rock', 'scissors'];

function getHand() {
    let i = parseInt(Math.random() * 10) % 3;
    return hands[i];
}

const player1 = {
    name: 'Bob',
    hand: getHand()
}

const player2 = {
    name: 'Mike',
    hand: getHand()
}

function playRound(p1, p2) {
    let outcome = '';
    // paper = 0;
    // rock = 1;
    // sciccors = 2;
    switch(true) {
        //p1 wins
        case p1 === hands[0] && p2 === hands[1]:
            outcome = `Player 1 chose: ${p1} and Player 2 chose: ${p2}. Player 1 wins!`;
            break;
        case p1 === hands[1] && p2 === hands[2]:
            outcome = `Player 1 chose: ${p1} and Player 2 chose: ${p2}. Player 1 wins!`;
            break;
        case p1 === hands[2] && p2 === hands[0]: 
            outcome = `Player 1 chose: ${p1} and Player 2 chose: ${p2}. Player 1 wins!`;
            break;
        // p2 wins
        case p2 === hands[0] && p1 === hands[1]: 
            outcome = `Player 1 chose: ${p1} and Player 2 chose: ${p2}. Player 2 wins!`;
            break;
        case p2 === hands[1] && p1 === hands[2]: 
            outcome = `Player 1 chose: ${p1} and Player 2 chose: ${p2}. Player 2 wins!`;
            break;
        case p2 === hands[2] && p1 === hands[3]: 
            outcome = `Player 1 chose: ${p1} and Player 2 chose: ${p2}. Player 2 wins!`;
            break;
        case p2 === hands[2] && p1 === hands[0]: 
            outcome = `Player 1 chose: ${p1} and Player 2 chose: ${p2}. Player 2 wins!`;
            break;
            // defaults to a tie
            default: 
        outcome = `Player 1 chose: ${p1} and Player 2 chose: ${p2}. It's a tie!`
    }
    return outcome;
}

console.log(playRound(player1.hand, player2.hand));


// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

// playGame(player1, player2, playUntil) {
//     let counter = 0;

// }
/*-------------------------------------------------------------------------*/
/*------------------------this prints works on dom --------------------------------*/




// let userTip = document.getElementById('tip');
// let userTab = document.getElementById('bill');
// let form = document.getElementById('form');
// const totalLog = document.getElementById('total');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     calculate();
//     console.log('user tip : ', userTip.value);
// });

// function click(event) {
//     event.preventDefault();
//     console.log('click')
// }


// function calculate(percent, total) {
//     console.log(percent)
//     percent = parseInt(userTip.value);
//     total = parseInt(userTab.value);
//     percent /= 100;
//     console.log('percent', percent);
//     let tip = percent * total;
//     console.log(tip + total);
//     return `Your total is $${totalLog.textContent = tip + total}`;
// }

/*-------------------------------------------------------------------------------------*/
