
// const for faster calculations
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let userScore = 0;
let computerScore = 0;
var userScoreText = $("#userScore");
var computerScoreText = $("#computerScore");


function animateMe() {
    console.log("here");
    console.log($("#userScore")[0]);
    $("#userScore")[0].setAttribute( "class", animateMe );
    setTimeout( function() {
        $("#userScore")[0].setAttribute( "class", "" );
    }, 1000);
}

function game(userChoice) {
    // removeMyClass();
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
    // if (computerChoice == userChoice) {
    //     alert("Tie " + computerChoice);
    // } else if (computerChoice == SCISSORS && userChoice == ROCK) {
    //     alert("You won");
    //     userScore++;
    //     userScoreText.addClass("animateMe", 2000, removeMyClass);
    //     userScoreText.addEventListener("animationend", removeMyClass);
    // } else if (computerChoice == ROCK && userChoice == SCISSORS) {
    //     alert("Computer Won");
    //     computerScore++;
    //     $("#computerScoreText").addClass("animateMe");
    //     $("#computerScoreText").on("animationend", removeMyClass);
    // } else if (computerChoice > userChoice) {
    //     alert("Computer Won");
    //     computerScore++;
    //     $("#computerScoreText").addClass("animateMe", 2000, removeMyClass);
    //     $("#computerScoreText").addEventListener("animationend", removeMyClass);
    // } else {
    //     alert("You Won");
    //     userScore++;
    //     $("#userScoreText").addClass("animateMe", 2000, removeMyClass);
    //     $("#userScoreText").addEventListener("animationend", removeMyClass);
    // }
    // Display the outcome
    alertUserOfOutcome(userChoice, computerChoice);
    // First one to 5 wins
    updateScore();
}

function removeMyClass(){
    console.log("Here");
    $("#userScore").removeClass("animateMe");
    $("#computerScore").removeClass("animateMe");
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

function updateScore(){
    userScoreText.innerHTML = userScore;
    computerScoreText.innerHTML = computerScore;
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

