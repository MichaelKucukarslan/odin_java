// Write a program that takes a user’s input 
// and prints the numbers from one to the number the user entered. 
// However, for multiples of three print Fizz instead of the number 
// and for the multiples of five print Buzz. 
// For numbers which are multiples of both three and five print FizzBuzz.

// Get user input
// Print numbers
// Print Fizz when its a multiple of 3
// Print Buzz when its a multiple of 5
// Print FizzBuzz when its a multiple of 3 and 5

let userNumber = prompt("Please enter a number", "15");
for (let index = 1; index <= userNumber; index++) {
    if (index % 3 == 0 && index %5 ==0){
        console.log("FizzBuzz");
    } else if (index % 5 == 0){
        console.log("Buzz");
    } else if (index % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(index);
    }
}
console.log(userNumber);