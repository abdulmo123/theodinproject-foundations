var choices = ["ROCK", "PAPER", "SCISSORS"];
var humanScore = 0;
var computerScore = 0;

function playGame() {
    var humanChoice = '';
    var buttons = document.querySelectorAll("#btn");
    const humanScoreEle = document.querySelector('.h-score');
    const computerScoreEle = document.querySelector('.c-score');

    humanScoreEle.textContent = 0;
    computerScoreEle.textContent = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            humanChoice = button.textContent;
            const humanSelection = document.querySelector('.h-selection');
            humanSelection.textContent = humanChoice;
            const computerChoice = getComputerChoice();
            const computerSelection = document.querySelector('.c-selection');
            computerSelection.textContent = computerChoice;

            playRound(humanChoice, computerChoice);
        });
    });

    if (humanScore > computerScore) {
        console.log('HUMAN WINS THE GAME!')
    } else if (humanScore < computerScore) {
        console.log('COMPUTER WINS THE GAME!')
    } else {
        console.log("GAME ENDED IN DRAW")
    }
}

function getComputerChoice() {

    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function getHumanChoice() {
    const input = Number(prompt("Enter a number between 0 and 2 (inclusive)"));

    if (input >= 0 && input <= 2) {
        return choices[input];
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'paper') {
        console.log("Computer wins round!");
        computerScore++;
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors') {
        console.log("Human wins round!");
        humanScore++;
    } else if (humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock') {
        console.log("Human wins round!");
        humanScore++;
    } else if (humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'scissors') {
        console.log("Computer wins round!");
        computerScore++;
    } else if (humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'rock') {
        console.log("Computer wins round!");
        computerScore++;
    } else if (humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper') {
        console.log("Human wins round!");
        humanScore++;
    } else {
        console.log("Draw!")
    }

    const humanScoreEle = document.querySelector('.h-score');
    const computerScoreEle = document.querySelector('.c-score');

    humanScoreEle.textContent = humanScore;
    computerScoreEle.textContent = computerScore;
}

function restartGame() {
    const btn = document.querySelector('#reset');
    btn.addEventListener('click', () => {
        // reset human score
        const humanScoreEle = document.querySelector('.h-score');
        humanScore = 0;
        humanScoreEle.textContent = 0;

        // reset computer score
        const computerScoreEle = document.querySelector('.c-score');
        computerScore = 0;
        computerScoreEle.textContent = 0;

        // reset human selection box
        const humanSelection = document.querySelector('.h-selection');
        humanSelection.textContent = '';

        // reset computer selection box
        const computerSelection = document.querySelector('.c-selection');
        computerSelection.textContent = '';

    });
}

// initiate game
playGame()