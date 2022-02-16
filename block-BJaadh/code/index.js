// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

let index101 = numbers.indexOf(101);
console.log(index101);

// - Find the last index of `9` in numbers

let lastIndex9 = numbers.lastIndexOf(9);
console.log(lastIndex9);


// - Convert value of strings array into a sentance like "This is a collection of words"

let joinStrings = strings.join(" ");
console.log(joinStrings);

// - Add two new words in the strings array "called" and "sentance"

strings.push("called", "sentence");


// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

joinStrings = strings.join(" ");
console.log(joinStrings);

// - Remove the first word in the array (strings)

delete strings[0];
console.log(strings);

// - Find all the words that contain 'is' use string method 'includes'

let IncludesIs = strings.filter(string => string.includes(`is`));
console.log(IncludesIs);

// - Find all the words that contain 'is' use string method 'indexOf'

let includesIsIndex = strings.filter(string => string.indexOf(`is`) !== -1);
console.log(includesIsIndex);

// - Check if all the numbers in numbers array are divisible by three use array method (every)

let everyDivisibleByThree = numbers.every(number => number % 3 ===0);
console.log(everyDivisibleByThree);

// -  Sort Array from smallest to largest
let smallToLarge = [...numbers].sort((a,b) => a-b);
console.log(smallToLarge)


// - Remove the last word in strings

strings.pop();
strings.shift();

// - Find largest number in numbers

let largestNum = [...numbers].sort((a,b) => a - b).pop();
console.log(largestNum);

// - Find longest string in strings

let longestString = [...strings].sort((a,b)=>a.length-b.length).pop();
console.log(longestString);


// - Find all the even numbers
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// - Find all the odd numbers
let oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers);


// - Place a new word at the start of the array use (unshift)

strings.unshift(`This`);
console.log(strings)

// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);

// - Make a subset of strings array ['a','collection']

let sliceString = strings.slice(2,4)
console.log(sliceString);


// - Replace 12 & 18 with 1221 and 1881


numbers.splice(numbers.indexOf(12), 1, 1221);
numbers.splice(numbers.indexOf(18), 1, 1881);
console.log(numbers);




// - Replace words in strings array with the length of the word

let stringLength = strings.map((string) => string.length);
console.log(stringLength);

// - Find the sum of the length of words using above question


function sum(){
  let sum = 0;
  for(var length of stringLength){
    sum = sum + length
  }
  return sum
}
console.log(sum());
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

let filteredCustomer = customers.filter((customer)=>customer.firstname.startsWith(`J`));
console.log(filteredCustomer);

// - Create new array with only first name

let array = customers.map((customer) => customer.firstname);
console.log(array);

// - Create new array with all the full names (ex: "Joe Blogs")

let array2 = customers.map((customer)=>customer.firstname+" "+customer.lastname);
console.log(array2);

// - Sort the array created above alphabetically
[...array2].sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.

