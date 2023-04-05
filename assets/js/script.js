// Waits for the DOM to finish loading befure running the game
// Gets the button elements and adds event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute ("data-type");
            runGame(playerChoice);
        });
    }
});

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
        playLizard();
    } else if (playerChoice === "spock") {
        playSpock();
    } else {
        alert(`Unknown player choice ${playerChoice}`);
        throw `Unkown player choice ${playerChoice}. Aborting!`;
    }
}

/**
 * Sets the player-image to rock
 * Generates a number between 1 and 5 to determine the computers choice
 * Compares the players choice to the computers choice to determine the result of the game
 * Calls incrementPlayerScore or incrementComputerScore and displays a message telling the player the result of the game
 */

function playRock() {
    document.getElementById("player-image").src = "assets/images/rock.png";
    let getcomputerChoice = Math.floor(Math.random()* 5) +1;
    if (getcomputerChoice === 1) {
     document.getElementById("computer-image").src="assets/images/rock.png";
     document.getElementById("result").innerText = "Computer chose rock. Draw! Nobody wins.";
    } else if (getcomputerChoice === 2) {
        document.getElementById("computer-image").src="assets/images/paper.png" ;
        document.getElementById("result").innerText="Computer chose paper. Paper covers rock. You lose :(";
        incrementComputerScore();
       } else if (getcomputerChoice === 3) {
        document.getElementById("computer-image").src="assets/images/scissors.png" ;
        document.getElementById("result").innerText="Computer chose scissors. Rock smashes scissors. You win!";
        incrementPlayerScore();
       } else if (getcomputerChoice === 4) {
        document.getElementById("computer-image").src="assets/images/lizard.png" ;
        document.getElementById("result").innerText="Computer chose lizard. Rock smashes lizard. You Win!";
        incrementPlayerScore();
       } else if (getcomputerChoice === 5) {
        document.getElementById("computer-image").src="assets/images/spock.png" ;
        document.getElementById("result").innerText="Computer chose spock. Spock vaporises rock. You lose :(";
        incrementComputerScore();
       } 
}

/**
 * Sets the player-image to paper
 * Generates a number between 1 and 5 to determine the computers choice
 * Compares the players choice to the computers choice to determine the result of the game
 * Calls incrementPlayerScore or incrementComputerScore and displays a message telling the player the result of the game
 */

function playPaper() {
    document.getElementById("player-image").src = "assets/images/paper.png";
    let getcomputerChoice = Math.floor(Math.random()* 5) +1;
    if (getcomputerChoice === 1) {
     document.getElementById("computer-image").src="assets/images/rock.png";
     document.getElementById("result").innerText = "Computer chose rock. Paper covers rock. You win!.";
     incrementPlayerScore();
    } else if (getcomputerChoice === 2) {
        document.getElementById("computer-image").src="assets/images/paper.png" ;
        document.getElementById("result").innerText="Computer chose paper. Draw! Nobody wins.";
       } else if (getcomputerChoice === 3) {
        document.getElementById("computer-image").src="assets/images/scissors.png" ;
        document.getElementById("result").innerText="Computer chose scissors. Scissors cuts paper. You lose :(";
        incrementComputerScore();
       } else if (getcomputerChoice === 4) {
        document.getElementById("computer-image").src="assets/images/lizard.png" ;
        document.getElementById("result").innerText="Computer chose lizard. Lizard eats paper. You lose :(";
        incrementComputerScore();
       } else if (getcomputerChoice === 5) {
        document.getElementById("computer-image").src="assets/images/spock.png" ;
        document.getElementById("result").innerText="Computer chose spock. Paper disproves spock. You win!";
        incrementPlayerScore();
       } 
}

/**
 * Sets the player-image to scissors
 * Generates a number between 1 and 5 to determine the computers choice
 * Compares the players choice to the computers choice to determine the result of the game
 * Calls incrementPlayerScore or incrementComputerScore and displays a message telling the player the result of the game
 */

function playScissors() {
    document.getElementById("player-image").src = "assets/images/scissors.png";
    let getcomputerChoice = Math.floor(Math.random()* 5) +1;
    if (getcomputerChoice === 1) {
     document.getElementById("computer-image").src="assets/images/rock.png";
     document.getElementById("result").innerText = "Computer chose rock. Rock smashes scissors. You lose :(";
     incrementComputerScore();
    } else if (getcomputerChoice === 2) {
        document.getElementById("computer-image").src="assets/images/paper.png" ;
        document.getElementById("result").innerText="Computer chose paper. Scissors cuts paper. You win!";
        incrementPlayerScore();
       } else if (getcomputerChoice === 3) {
        document.getElementById("computer-image").src="assets/images/scissors.png" ;
        document.getElementById("result").innerText="Computer chose scissors. Draw! Nobody wins";
       } else if (getcomputerChoice === 4) {
        document.getElementById("computer-image").src="assets/images/lizard.png" ;
        document.getElementById("result").innerText="Computer chose lizard. Scissors decapitates lizard. You win!";
        incrementPlayerScore();
       } else if (getcomputerChoice === 5) {
        document.getElementById("computer-image").src="assets/images/spock.png" ;
        document.getElementById("result").innerText="Computer chose spock. Spock smashes scissors. You lose :(";
        incrementComputerScore();
       } 
}

/**
 * Sets the player-image to lizard
 * Generates a number between 1 and 5 to determine the computers choice
 * Compares the players choice to the computers choice to determine the result of the game
 * Calls incrementPlayerScore or incrementComputerScore and displays a message telling the player the result of the game
 */

function playLizard(){
    document.getElementById("player-image").src = "assets/images/lizard.png";
    let getcomputerChoice = Math.floor(Math.random()* 5) +1;
    if (getcomputerChoice === 1) {
     document.getElementById("computer-image").src="assets/images/rock.png";
     document.getElementById("result").innerText = "Computer chose rock. Rock crushes lizard. You lose :(";
     incrementComputerScore();
    } else if (getcomputerChoice === 2) {
        document.getElementById("computer-image").src="assets/images/paper.png" ;
        document.getElementById("result").innerText="Computer chose paper. Lizard eats paper. You win!";
       } else if (getcomputerChoice === 3) {
        document.getElementById("computer-image").src="assets/images/scissors.png" ;
        document.getElementById("result").innerText="Computer chose scissors. Scissors decapitates lizard. You lose :(";
        incrementComputerScore();
       } else if (getcomputerChoice === 4) {
        document.getElementById("computer-image").src="assets/images/lizard.png" ;
        document.getElementById("result").innerText="Computer chose lizard. Lizard eats paper. You lose :(";
        incrementComputerScore();
       } else if (getcomputerChoice === 5) {
        document.getElementById("computer-image").src="assets/images/spock.png" ;
        document.getElementById("result").innerText="Computer chose spock. Lizard poisions spock. You win!";
        incrementPlayerScore();
       } 
}

/**
 * Sets the player-image to spock
 * Generates a number between 1 and 5 to determine the computers choice
 * Compares the players choice to the computers choice to determine the result of the game
 * Calls incrementPlayerScore or incrementComputerScore and displays a message telling the player the result of the game
 */

function playSpock(){
    document.getElementById("player-image").src = "assets/images/spock.png";
    let getcomputerChoice = Math.floor(Math.random()* 5) +1;
    if (getcomputerChoice === 1) {
     document.getElementById("computer-image").src="assets/images/rock.png";
     document.getElementById("result").innerText = "Computer chose rock. Spock vaporises rock. You win!";
     incrementPlayerScore();
    } else if (getcomputerChoice === 2) {
        document.getElementById("computer-image").src="assets/images/paper.png" ;
        document.getElementById("result").innerText="Computer chose paper. Paper disproves spock. You lose :(";
        incrementComputerScore();
       } else if (getcomputerChoice === 3) {
        document.getElementById("computer-image").src="assets/images/scissors.png" ;
        document.getElementById("result").innerText="Computer chose scissors. Spock crushes scissors. You win!";
        incrementPlayerScore();
       } else if (getcomputerChoice === 4) {
        document.getElementById("computer-image").src="assets/images/lizard.png" ;
        document.getElementById("result").innerText="Computer chose lizard. Lizard poisions spock. You lose :(";
        incrementComputerScore();
       } else if (getcomputerChoice === 5) {
        document.getElementById("computer-image").src="assets/images/spock.png" ;
        document.getElementById("result").innerText="Computer chose spock. Draw! Nobody wins";
       } 
}


/**
 * Increases the player score by 1
 */

function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}

/**
 * Increases the computer score by 1
 */

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}