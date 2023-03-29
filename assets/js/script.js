// Waits for the DOM to finish loading befure running the game
// Gets the button elements and adds event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute ("data-type");
            runGame(playerChoice);
        })
    }
})

/**
 * Determines the players choice of rock, paper, scissors, lizard or spock
 * Runs the relevant function based on the players choice
 */

function runGame(playerChoice) {
    if (playerChoice === "rock") {
        playRock();
    } else if (playerChoice === "paper") {
        playPaper();
    } else if (playerChoice === "scissors") {
        playScissors();
    } else if (playerChoice === "lizard") {
        playLizard()
    } else if (playerChoice === "spock") {
        playSpock()
    } else {
        alert(`Unknown player choice ${playerChoice}`);
        throw `Unkown player choice ${playerChoice}. Aborting!`;
    }
    computerChoice()
}

/**
 * Determines the computers choice of rock, paper, scissors, lizard or spock by generating a random number between 1 and 5
 */

function computerChoice() {
    let getcomputerChoice = Math.floor(Math.random() * 5) + 1;
    if (getcomputerChoice === 1) {
     document.getElementById("computer-image").src="assets/images/rock.png";
    } else if (getcomputerChoice === 2) {
        document.getElementById("computer-image").src="assets/images/paper.png" ;
       } else if (getcomputerChoice === 3) {
        document.getElementById("computer-image").src="assets/images/scissors.png" ;
       } else if (getcomputerChoice === 4) {
        document.getElementById("computer-image").src="assets/images/lizard.png" ;
       } else if (getcomputerChoice === 5) {
        document.getElementById("computer-image").src="assets/images/spock.png" ;
       } 
 }


function playRock() {
    
   
}

function playPaper() {

}

function playScissors() {

}

function playLizard(){

}

function playSpock(){

}



function incrementPlayerScore() {
    
}

function incrementComputerScore() {
    
}