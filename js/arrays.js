/*
1. The following code declares a new array. Using this array attempt the following:
a) Output the text ‘Tuesday’
b) Output the text ‘Monday is the first day of the week’
c) Output the text ‘Friday and Saturday are my favourite days’
d) Output the entire contents of the array using a for loop
e) Output the entire contents of the array using a forEach loop
*/

const daysOfTheWeek= ["Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday","Sunday"];
console.log(daysOfTheWeek[1]);
console.log(`daysOfTheWeek[0] is the first day of the week.`);
console.log(`daysOfTheWeek[4] and daysOfTheWeek[5] are my favourite days.`);

for(let i=0;i<daysOfTheWeek.length;i++){
    console.log(daysOfTheWeek[i]);
}

daysOfTheWeek.forEach(function(day){
    console.log(day);
})

/*
2. The following code declares an array. Using this array attempt the following:
a) Output the entire contents of the array using a forEach loop
b) Use a filter to generate an array of countries that contain the letter 'n'. Have a look at using indexOf() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).  Save the resulting array and output its contents using a forEach loop
c) Modify your program from (2b) so that you ask the user for a search term and then display the countries that match the search term e.g. if the user enters 'in', China, India and Indonesia should be displayed.
*/
const countries=["China","India","USA","Indonesia","Brazil","Pakistan"];

countries.forEach(function(country){
    console.log(country);
})

const countriesWithLetterN=countries.filter(function(country){
    if(country.indexOf("n")===-1){
        return false;
    }
    return true;
})
countriesWithLetterN.forEach(function(country){
    console.log(country);
})

const searchTerm=prompt("Enter a search term");
const matchingCountries=countries.filter(function(country){
    if(country.indexOf(searchTerm)===-1){
        return false;
    }
    return true;
})

matchingCountries.forEach(function(country){
    console.log(country);
})

/*
3. The following code declares an array of numbers. Using this array attempt the following:
a) Output the entire contents of the array using a forEach loop
b) Use a map to double each element in the array. Save the resulting array as doubleNums and output its contents using a forEach loop
c) Use a filter to generate an array of positive numbers based on nums. Save the resulting array as positiveNums and output its contents using a forEach loop
d) Instead of using a 'hard-coded' array of numbers, use a for loop to repeatedly ask the user for a number. Each time the user answers with a number, store the answer in the nums array. Using this array output the double of each element, and all the positive numbers that were entered.
e) Use the reduce function to get the total of all the numbers entered.
f) Use reduce to get the largest of the numbers that have been entered.
*/

//const nums = [23,-1,250,10,-5,2];

const userNum = parseInt(prompt("How many numbers would you like to enter?"))
const nums = []
for(i=1;i<=userNum;i++){
  const num = parseInt(prompt(`Enter number ${i}`))
  nums.push(num)
}

nums.forEach(function(num){
    console.log(num);
})

const doubleNums=nums.map(function(num){
    return num*2;
})
console.log("The numbers doubled:");
doubleNums.forEach(function(num){
    console.log(num);
})

const positiveNums=nums.filter(function(num){
    if(num>0){
        return true;
    }
    return false;
})
console.log("The numbers filtered:");
positiveNums.forEach(function(num){
    console.log(num);
})

const total = nums.reduce(function(a,b){
  return a+b;
})
console.log(`The total is ${total}.`);

const largest = nums.reduce(function(a,b){
  if(a>b) {
    return a;
  }else{
    return b;
  }
})
console.log(`The largest number is ${largest}.`);
