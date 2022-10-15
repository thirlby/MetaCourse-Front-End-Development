/*
Task 1: Using the logical && operator
You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.
1. Create a variable named  score and set it to  8
2. Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator
The expected output in the console should be: "Mid-level skills: true".
*/

var score;
score = 8;
console.log("Mid-level skills:", score>0 && score<10 );

/*
Task 2: Using the logical || operator
Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.
You need to code a new variable named timeRemaining and set it to 0. You also need to code a new variable named energy and set it to 10.
Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.

Complete the task using the following steps:
1. Declare the variable timeRemaining, and assign the value of 0 to it.
2. Declare the variable energy, and assign the value of 10 to it.
3. Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0
Note that the expected output in the console should be: "Game over: true".
*/

var timeRemaining, energy;
timeRemaining = 0;
energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

/*
Task 3: Using the modulus operator, %, to test if a given number is odd
You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).
To achieve this task, you need to declare six variables, as follows:
The first variable, named num1,  should be assigned a number value of 2.
The second variable, named num2, should be assigned a number value of 5.
The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.
The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.
The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.
The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.
Run console log two times after you've set the variables:
The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1
The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2
*/

var num1, num2, test1, test2, result1, result2;
// variables
num1 = 2;
num2 = 5;
test1 = num1 % 2;
test2 = num2 % 2;
result1 = test1 == 0;
result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

/*
Task 4: Add numbers using the + operator
Console log the result of adding two numbers, 5 and 10, using the + operator.
*/

console.log(5+10);

/*
Task 5: Concatenate numbers and strings using the + operator
Code three variables:
The first variable should be a string with the following value: "Now in ". Name the variable now.
The second variable should be a number with the value: 3. Name the variable three.
The third variable should a string with the following value: "D!". Name the variable d.
Console log the following code: now + three + d.
Note: The expected output should be: "Now in 3D!".
*/

var now, three, d;
now = "Now in ";
three =3;
d = "D!";
console.log(now + three + d);

/*
Task 6: Use the += operator to accumulate values in a variable
Code a new variable and name it counter, assigning it to the value of 0.
On the next line, use the += operator to increase the value of counter by 5.
On the next line, use the += operator to increase the value of counter by 3.
On the fourth line, console log the value of the counter variable.
Note: The output value should be 8.
*/

var counter;
counter = 0;
counter += 5;
counter += 3;
console.log(counter);