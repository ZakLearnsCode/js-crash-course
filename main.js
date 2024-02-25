// --- 1.VARIABLES --- //

// let and const are used for setting variables
// they are both block scoped
// var was previously used for setting variables but it has been replaced as it was globally scoped leading to causing potential problems and inconsistencies when 2 variables had the same name

// let can be directly reassigned while const cannot
// in practice it is best to always use const unless you know you will reassign the value


// --- 2.DATA TYPES --- //

//primitive data types = directly assigned to memory, all other data types are formed by primitive data types

// String, Numbers, Boolean, null, undefined, Symbols

// examples:

const name = 'John'; // String = represents a sequence of characters that are enclosed by single or double quotes
const age = 30; // number 
const rating = 4.5; // decimal but considered a number
const isCool = true; // Boolean = only accepts two values i.e. true or false
const x = null; // null
const y = undefined; // undefined = value not assigned
let z; //(is also undefined)

console.log(typeof isCool); // the "typeof" function is used for inspecting the specific type of a data


// --- 2.1 Concatenation --- //

// is used for strings; joins character strings end to end
// taking into consideration the previous constants : line19 + line20

console.log('My name is ' + name + ' and I am ' + age);

// this was the old school way of concatenating different strings but now we have


// --- Template Strings (or template literals)--- //

console.log(`My name is ${name} and I am ${age}`); // this is also called string interpolation, using the variable w/o directly their value

//template strings require to be enclosed in backticks (``), can also be used as variables themselves

const hello = `My name is ${name} and I am ${age}`;

console.log(hello);


// --- 2.2 Strings properties and methods --- //

const s = 'Yippie ka yay';

// properties are values associated with JavaScript objects (string in this case); properties can be changed, added and deleted.

console.log(s.length); // simply determines the length of a string.

//methods are functions associated with objects (strings for example), they always require a parenthesis () as shown in the example.

console.log(s.toUpperCase()) //sets all characters to upper case.
console.log(s.substring(0,6)) //pulls a substring following two indexes (a beginning and an end) from a pre established string.

//methods can also be chained:

console.log(s.substring(10,13).toUpperCase());

//methods can also have a transformative function on the data type; the split() function separates a string into arrays based on the input:

console.log(s.split(''));

//better example:

const b = 'technology, computers, it, code';

console.log(b.split(' ,'));


// ---2.3 Arrays --- //

// arrays are variables that hold multiple values
// arrays can be created through multiple ways, one of them is using a constructor

const numbers = new Array(1,2,3,4,5); // 'new' is a constructor

console.log(numbers);

// in most cases though, simple brackets are used to create an array

const fruits = ['apples', 'oranges', 'pears'];

// in JavaScript you can have multiple data types in the same array as shown in the example above

console.log(fruits); // arrays nomenclature starts with 0 and follows 1,2,3 etc.

fruits[3] = 'grapes'; // it is possible to add values to the end of an array with the precise number ordered to where it takes the spot in the array.

fruits.push('mangos'); // the push function allows to add values at the end of the string without the need to know the precise ordered number.

fruits.unshift('strawberries'); // the unshift function adds values at the beginning of the array.

fruits.pop('mangos'); // the pop function removes the last value added to the array.

console.log(Array.isArray(fruits)) // Array.isArray checks to see if a data structure is indeed an array, if we where to input a string in the function it would return as false.

console.log(fruits.indexOf('oranges')); // indicates the specific ordered location of a value in an array

console.log(fruits);



// --- 2.4 Object literals --- //

// are composed of key-value pairs where each key is a string and each value can be any valid JavaScript data value

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {                               // this is an embedded object.
        street:'50 main st',
        city:'Boston',
        state:'MA',
    }
}

console.log(person.firstName, person.lastName); //different values can be selected or concatenated with a coma in the log.

console.log(person.hobbies[1]); // it is possible to select single values.

const { firstName, lastName } = person; // or even create constants out of the already assigned values and pull them. This is called destructuring.

person.email = 'john@gmail.com' // it is also possible to add properties to the existing object.

console.log(person); 


// one of the most common forms of object literals are arrays of objects; here's an example of a todo list.

const todo = [
 {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
 },
 {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
 },
 {
    id: 3,
    text: 'Dentist app',
    isCompleted: false
 },
 
]

console.log(todo[1].text); // by defining the const as an array and creating multiple literals per value, it is possible to create single value outputs with specific property declaration.


// --- 2.5 JSON --- //

// JSON stands for "JavaScript Object Notation", it is a data format used in full stack development in between servers or APIs
//the format is very similar to object literals - using 'freeformatter.com/json-formatter.html' to transform the previous object literal into a json we obtain the following:

/* {
   "const todo": [
      {
         "id": 1,
         "text": "Take out trash",
         "isCompleted": true
      },
      {
         "id": 2,
         "text": "Meeting with boss",
         "isCompleted": true
      },
      {
         "id": 3,
         "text": "Dentist app",
         "isCompleted": false
      }
   ]
} */

// it is also possible and more common to print out the data available directly in the console log by using the following function:

const todoJSON = JSON.stringify(todo);

console.log(todoJSON);


// --- 2.6 Loops --- //

// executes a block of code for a specified number of times, until the condition set by the 3rd parameter is met
// they are handy if you want to repeat code with different values 
// often this is the case when working with arrays 

//the "for" statement creates a loop with 3 expressions:

/* for (expression 1; expression 2; expression 3) {
   code block to be executed
} */

for(let i = 0; i <= 10; i++) {
   console.log(i);
}

// it is possible to use string literals in the aforementioned for loop statement and that will be repeated 

for(let i = 0; i <= 10; i++) {
   console.log(`for loop number: ${i}`)
}

// the "while" loop is used when the number of loops required are unknown; example: waiting for the user input of the correct value and keep looping until they input the proper value.
// the variable of a "while" loop is set outside the loop
// it is ALWAYS required to set the value to be incremental at the end of the loop !!!
// otherwise it will crash the browser as the condition will never be met and the loop will repeat itself forever

let i = 0;
while(i<10) {
   console.log(`while loop number: ${i}`);
   i++; // !! NEVER FORGET THIS, IF YOU DO YOU WILL CRASH THE BROWSER !! //
}


// --- 2.7 Looping through Arrays --- //

for(let i = 0; i < todo.length; i++) { // the length property can be used on arrays as wells as strings //
   console.log(todo[i].text) // the index (the starting point) would be the "i" value
}

// the more common way of looping though an array is through a "for of" loop

for(let t of todo) { // the todo here is the name of the array; the let value can have any name
   console.log(t.text);
}

// operating on an array with loops is also called iteration, these methods are called 


// --- 2.8 High order array methods --- //

// they all use as a parameter a function which can itself take multiple parameter but the first thing it uses is the variable as each item //

// forEach, map, filter

// forEach = loops through the array

todo.forEach(function(y) {
   console.log(y.text);
});

// map = creates a new array from an array

const todoText = todo.map(function(y) {
   return y.text
});

console.log(todoText);

// filter = create a new array based on a condition

const todoCompleted = todo.filter(function(y) {
   return y.isCompleted === true;
});

console.log(todoCompleted);

// it is also possible to concatenate high order array methods //

const todoCompletedandMap = todo.filter(function(y) {
   return y.isCompleted === true;
}).map(function(y) {
   return y.text;
})

console.log(todoCompletedandMap);

// this is a type of functional programming, it is very powerful and can be useful on many levels


// --- 2.9 Conditionals --- //

const x2 = '10';

if(x2 === 10) {
   console.log('x2 is 10')
} 
else {
   console.log('x2 is not 10')
};

// the if statements can be very useful for verifying the nature of a certain data type; for that purpouse it is good to know that a double equal (==) sign will only check if the contents of the constant are correct and then execute the function
// on the other hand, a triple equal (===) statement does also check to see if the data type is correct i.e. if the constant is a string and the conditional is a number then it will not display anything unless otherwise specificed.

// there can be as many "if" statments and "else if" concatenations as required

const x3 = 5;

if(x3 === 10) {
   console.log('x3 is 10');
} else if (x3 > 10) {
   console.log('x3 is greater than 10');
} else {
   console.log('x3 is less than 10');
}

