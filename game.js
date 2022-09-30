const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "rock"
    console.log(playRound(playerSelection, getComputerChoice()))
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "paper"
    console.log(playRound(playerSelection, getComputerChoice()))
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "scissors"
    console.log(playRound(playerSelection, getComputerChoice()))
})


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let result = ""
    if (playerSelection == "rock") {
        if (computerSelection == 0) {
            result = "its a tie"
        } else if (computerSelection == 1) {
            result ="computer wins, paper beats rock"
        } else if (computerSelection == 2) {
            result = "you win, rock beats scissors"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == 0) {
            result = "you win, paper beats rock"
        } else if (computerSelection == 1) {
            result = "its a tie"
        } else if (computerSelection == 2) {
            result = "you lose, scissors beats paper"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == 0) {
            result = "you lose, rocks beats scissors"
        } else if (computerSelection == 1) {
            result = "you win, scissors beats paper"
        } else if (computerSelection == 2) {
            result = "its a tie"
        }
    }
    return result;
}