const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "rock"
    roundResult.textContent = 
        playRound(playerSelection, getComputerChoice())
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "paper"
    roundResult.textContent = 
        playRound(playerSelection, getComputerChoice())
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "scissors"
    roundResult.textContent = 
        playRound(playerSelection, getComputerChoice())
})

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}
const roundResult = document.querySelector('#result-box');
let result = "0"
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {   
    const pScore = document.querySelector('#player-score');
    const cScore = document.querySelector('#computer-score');

    if (playerSelection == "rock") {
        if (computerSelection == 0) {
            result = "its a tie"
        } else if (computerSelection == 1) {
            result = "computer wins, paper beats rock"
            computerScore = ++computerScore
        } else if (computerSelection == 2) {
            result = "you win, rock beats scissors"
            playerScore = ++playerScore
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == 0) {
            result = "you win, paper beats rock"
            playerScore = ++playerScore
        } else if (computerSelection == 1) {
            result = "its a tie"
        } else if (computerSelection == 2) {
            result = "you lose, scissors beats paper"
            computerScore = ++computerScore
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == 0) {
            result = "you lose, rocks beats scissors"
            computerScore = ++computerScore
        } else if (computerSelection == 1) {
            result = "you win, scissors beats paper"
            playerScore = ++playerScore
        } else if (computerSelection == 2) {
            result = "its a tie"
        }
    }

    pScore.textContent = playerScore
    cScore.textContent = computerScore
    return result;

}


