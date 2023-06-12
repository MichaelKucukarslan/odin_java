
// const for faster calculations
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function game(userChoice) {
    if (userChoice == "rock") {
        userChoice = ROCK;
    } else if (userChoice == "paper") {
        userChoice = PAPER;
    } else {
        userChoice = SCISSORS;
    }
    // Get a computer to make a choice
    let computerChoice = Math.floor(Math.random() * 3);
    // Test the outcomes of the user vs computer
    if (computerChoice == userChoice) {
        alert("Tie " + computerChoice);
    } else if (computerChoice == SCISSORS && userChoice == ROCK) {
        alert("You won");
        // add point to user
    } else if (computerChoice == ROCK && userChoice == SCISSORS) {
        alert("Computer Won");
        // add point to computer
    } else if (computerChoice > userChoice) {
        alert("Computer Won");
        // add point to computer
    } else {
        alert("You Won");
        // add point to user
    }
    // Display the outcome
    alertUser(userChoice, computerChoice);
    // Display the score
    
    // First one to 5 wins
}

function alertUser(userChoice, computerChoice) {
    userChoice = intToChoice(userChoice);
    computerChoice = intToChoice(computerChoice);
    alert("You Chose: " + userChoice + "\nComputer Chose: " + computerChoice);
}

function intToChoice(intToChange) {
    if (intToChange == ROCK) {
        return "Rock";
    } else if (intToChange == PAPER) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

