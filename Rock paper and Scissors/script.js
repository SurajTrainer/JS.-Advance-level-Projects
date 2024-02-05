

let choices = ['rock','paper','scissor'];

let playerDisplay = document.getElementById('playerDisplay')
let computerDisplay = document.getElementById('computerDisplay')
let resultDisplay = document.getElementById('resultDisplay')
let playerScore = document.getElementById('playerScore')
let computerScore = document.getElementById('computerScore')

let playerScoreDisplay = 0;
let computerScoreDisplay = 0;


function playGame(surajChoice) {
    
    let computerChoice = choices[Math.floor(Math.random() *3)]
    let results = '';

    if (surajChoice === computerChoice) {
        results =  ` IT'S A TIE`
    }else{
        switch (surajChoice) {
            case 'rock':
                results = (computerChoice === 'scissor') ? 'YOU WIN' : 'YOU LOSS'
                break;
            case 'paper':
                results = (computerChoice === 'rock') ? 'YOU WIN' : 'YOU LOSS'
                break;
            case 'scissor':
                results = (computerChoice === 'paper') ? 'YOU WIN' : 'YOU LOSS'
                break;
        }
    }

    playerDisplay.textContent = `PLAYER :   ${surajChoice}`;
    computerDisplay.textContent = `COMPUTER :   ${computerChoice}`;
    resultDisplay.textContent = results;

    resultDisplay.classList.remove('greenText', 'redText');

    switch (results) {
        case 'YOU WIN':
            resultDisplay.classList.add('greenText')
            playerScoreDisplay++;
            playerScore.textContent = playerScoreDisplay;
            break;
        case 'YOU LOSS':
            resultDisplay.classList.add('redText')
            computerScoreDisplay++;
            computerScore.textContent = computerScoreDisplay;
            break;
    
        default:
            break;
    }

}

