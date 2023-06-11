// Writing to console
console.log("First");

// Using a Timer;
let timerStart = Date.now();
console.log(timerStart);

// Creating variables
let name = "John";
let admin = name;
console.log(admin);

// Writing Functions and Returning values
function add7(number) {
    return number + 7;
}
// Using Functions
let newNumber = add7(8);
console.log(newNumber);

// Function with 2 parameters
function multiply(a, b){
    return a*b;
}
console.log(multiply(7,8));

//Function to capitalize the first letter
function capitalizeFirst(string){
    let s = string.toLowerCase()
    let f = s.charAt(0).toUpperCase() + s.slice(1);
    return f;
}
console.log(capitalizeFirst("HeLLO"));

// Function to retrieve last letter
function lastLetter(string){
    return string.charAt(string.length - 1);
}
console.log(lastLetter("hello my name is"));

//Showing how long the page took to load
let pageLoaded = Date.now() - timerStart;
console.log("Page loaded in " + pageLoaded + "/1000 seconds");