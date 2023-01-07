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


// TEMPLATE LITERALS

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

function hello(){
        return 'hello';
}

html = `
<ul>
  <li>Name: ${name}</li> 
  <li>Age: ${age}</li> 
  <li>Job: ${job}</li> 
  <li>City: ${city}</li> 
  <li> ${2 + 2}</li> 
  <li> ${hello()}</li> 
  <li> ${age > 30 ? 'Over 30' : 'Under 30'}</li> 
  </ul>
  `;

document.body.innerHTML = html;

