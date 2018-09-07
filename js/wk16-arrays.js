/*
1. The following code declares a new array. Using this array attempt the following:
a) Output the text ‘Tuesday’
b) Output the text ‘Monday is the first day of the week’
c) Output the text ‘Friday and Saturday are my favourite days’
d) Output the entire contents of the array using a for loop
e) Output the entire contents of the array using a forEach loop
*/

const daysOfTheWeek= ["Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday","Sunday"];

/*
2. The following code declares an array of numbers. Using this array attempt the following:
a) Output the entire contents of the array using a forEach loop
b) Use a map to double each element in the array. Save the resulting array as doubleNums and output its contents using a forEach loop
c) Use a filter to generate an array of positive numbers based on nums. Save the resulting array as positiveNums and output its contents using a forEach loop
d) Instead of using a 'hard-coded' array of numbers, use a for loop to repeatedly ask the user for a number. Each time the user answers with a number, store the answer in the nums array. Using this array output the double of each element, and all the positive numbers that were entered. 
*/

const nums = [23,-1,20,10,-5,2];

/*
3. The following code declares an array. Using this array attempt the following:
a) Output the entire contents of the array using a forEach loop
b) Use a filter to generate an array of countries that contain the letter 'n'. Have a look at using indexOf().  Save the resulting array and output its contents using a forEach loop
c) Modify your program from (b) so that you ask the user for a search term and then display the countries that match the search term e.g. if the user enters 'in', China, India and Indonesia should be displayed. 
*/
const countries=["China","India","USA","Indonesia","Brazil","Pakistan"];

/*
4. Taking your answer to 2d, structure this program as a series of functions - getUserNumbers, getDoubleNumbers,getPositiveNumbers and printNumbers. Here is some example code showing the functions being called.

const userNumbers = getUserNumbers();
const doubleNumbers = getDoubleNumbers(userNumbers);
const positiveNumbers = getPositiveNumbers(userNumbers);
printNumbers(userNumbers);
printNumbers(doubleNumbers);
printNumbers(positiveNumbers);
*/

