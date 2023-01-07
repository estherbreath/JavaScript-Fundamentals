//Log to console
// console.log('Hello World');
// console.log(123);
// console.log(true);
// console.table({a:1, b:2});
// console.error('thos is some error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
//     console.log('Hello world');
//     console.log('Hello world');
//     console.log('Hello world');
//     console.log('Hello world');
//     console.log('Hello world');
//     console.log('Hello world');
// console.timeEnd('Hello');

//Variables
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// //Multi word vars
// var firstName = 'John'; //Camel case
// var first_name = 'Sara'; //Underscore
// var FirstName = 'Tom'; //Pascal case
// var firstname;

// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // const name = 'John';
// // console.log(name);

// // const of object
// const person = {
//     name: 'John',
//     age: 30
// }
// person.name = 'Sara';
// person.age = 32;

// // console.log(person)

// // const of arrays
// const numbers = [1,2,3,4,5];
// numbers.push(6)

// console.log(numbers);


// DATA TYPES
// primitive
// Reference
// arrays
// object literals
// dates
// const today = new Date();
// console.log(today);


// Numbers The Math Object
// const num1 = 100; 
// const num2 = 50;
// let val;

// //Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;
// console.log(val);


// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad';
// const tags = 'web design, development, programming';
// let val;

// //concatenation
// val = firstName + ' ' + lastName

// //Append - To add to
// val = 'Brad ';
// val += 'Travery';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// //Escaping -it makes special character regular (')
// val = 'That\'s awesome, I can\'t wait';

// //Lenght
// val = firstName.length;

// //concat
// val = firstName.concat(' ', lastName)

// //Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];
// //indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt()
// val = firstName.charAt('2');
// //Get last char
// val = firstName.charAt(firstName.length - 1);

// //subsrting()
// val = firstName.substring(0,4);

// //slice()
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// //split()
// val = str.split(' ');
// val = tags.split(' , ');

// //replace()
// val = str.replace('Brad', 'Jack');

// //includes
// val = str.includes('foo');

// console.log(val);


// // TEMPLATE LITERALS

// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// function hello(){
//         return 'hello';
// }

// html = `
// <ul>
//   <li>Name: ${name}</li> 
//   <li>Age: ${age}</li> 
//   <li>Job: ${job}</li> 
//   <li>City: ${city}</li> 
//   <li> ${2 + 2}</li> 
//   <li> ${hello()}</li> 
//   <li> ${age > 30 ? 'Over 30' : 'Under 30'}</li> 
//   </ul>
//   `;

// document.body.innerHTML = html;



// Create some  arrays
const numbers = [43,56,98,44,45,51,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
//check
val = Array.isArray(numbers);//is to check if it's an array
//Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(45);

// MUTATING ARRAYS
//Add on to end
numbers.push(250);
//Add on to front
numbers.unshift(120);
//Take off from end
numbers.pop();
//Take off from front
numbers.shift();
//Splice values
numbers.splice(1,3) //the !st value is where is starts and the 2nd where it ends
//Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

//Use the "compare function"
val = numbers.sort(function(x, y){
    return x - y;
});

//Reverse sort
val = numbers.sort(function(x, y){
    return y - x;
});

Find
function under50(num){
    return num < 50;
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);
