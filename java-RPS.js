
// const for faster calculations
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let userScore = 0;
let computerScore = 0;

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
        userScore++;
        // add point to user
    } else if (computerChoice == ROCK && userChoice == SCISSORS) {
        alert("Computer Won");
        computerScore++;
        // add point to computer
    } else if (computerChoice > userChoice) {
        alert("Computer Won");
        computerScore++;
        // add point to computer
    } else {
        alert("You Won");
        userScore++;
        // add point to user
    }
    // Display the outcome
    alertUserOfOutcome(userChoice, computerChoice);
    // Display the score
    alertUserOfScore(userScore, computerScore);
    // First one to 5 wins
}

function alertUserOfScore(userScore, computerScore){
    alert("The score is:\n" + "You: " + userScore + "\nComputer: " + computerScore);
    if (userScore == 5){
        alert("You won the game");
        userScore = 0;
        computerScore = 0;
    } else if (computerScore == 5){
        alert("The computer won the game");
        userScore = 0;
        computerScore = 0;
    }
}
function alertUserOfOutcome(userChoice, computerChoice) {
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

