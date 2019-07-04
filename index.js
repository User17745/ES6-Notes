/** 
 * ==== ES6 ====
 * ES6 has an emphases on making it possible to do more with less code.
 * Also makes the code a lot more easier to read.
 */

/**
 * ----Template Literals----
 * #Enables us to use variables as template literals.
 * #Similar to how we use variables in a template engine or in PHP.
 * #Allows for simpler text formating and arithmetic operations.
 * #Template literals have to be encapsulated within the tick symbol(`) and variables are to be put inside ${} contraption.
 */
console.log("+++++====== Template Literals ======+++++");
let word1 = "John";
let word2 = "Doe";
let num1 = 4;
let num2 = 8;
const full = word1 + " " + word2;

//Spaces, characters and new lines can be incorporates as such without the need of special characters.
//Calculations can also be done easily.
console.log(`1. ${word1} is ${word2}`); 
console.log(`2. There are ${num1} ${word1}s
but ${num2} ${word2}s`);
console.log(`3. ${num1} + ${num2} = ${num1 + num2}`);



/**
 * ----Destructuring Objects----
 * #Destructurs our object so we could easily access all of it's properties.
 * #Give us the ability to essentially write shorthands and reassigned values.
 */
console.log("+++++====== Destructuring Objects ======+++++");
const personalInformation = {
    //key: value,
    firstName: 'John',
    lastName: 'Doe',
    city: 'Somecity',
    state: 'Delhi'
};

const {firstName, lastName} = personalInformation;
console.log(`1. ${firstName} ${lastName}`);

//Reassigning Values (Renaming variables/making shorthands)
let {city:ct, state:st} = personalInformation;
ct = 'HomeCity';
console.log(`2. lives in ${ct} in ${st}`);
//Note: when reassigning values, it is good practice to keep a good naming convention and keep the scope of these variables very short.



/**
 * ----Destructuring Arrays----
 * #Very similar to Destructuring Objects but in case of Arrays.
 * #Can not reassign values for shorthands.
 */
console.log("+++++====== Destructuring Arrays ======+++++");

//A regular array.
let name = ['John', 'Freaking', 'Doe'];

//A destructured array.
let [fName, mName, lName] = ['John', 'Freaking', 'Doe']; 
console.log(`1. ${fName} ${mName} ${lName}`);



/**
 * ----Object Literals----
 * Allows us to write less code if the keys used inside a function are identified the same as it's formal parameters.
 */
console.log("+++++====== Object Literals ======+++++");

//Without Object literals (When keys and formal parameters are different.)
function addressMaker1(city, state){
    //A associative array
    const newAddress = {newCity:city, newState:state};

    console.log(newAddress);
}
addressMaker1('Gurugram', 'Harayana');

//With object literals
function addressMaker2(city, state){
    const newAddress = {city, state};

    console.log(newAddress);
}
addressMaker2('Austin', 'Texas');



/**
 * ----For of Loop----
 * #Similar to foreach loop that is used in Java
 * #Output is provided as value and not as reference, therefore, we can't manipulate the values within array using for of loops.
 */
console.log("+++++====== For of Loops ======+++++");

//We can parse through arrays
console.log("----- Parsing through array -----");
var incomes = [63000, 56200, 61000];
for(var income of incomes){
    console.log(`${income}`);
}

//We can also parse through strings
console.log("----- Parsing through string -----");
var text = "Hello, how are you my friend?";
for(const char of text){
    console.log(char);
}



/**
 * ----Spread Operator----
 * #Unwraps the values of one array into another.
 * #Identified with triple dots(...)
 * #Not passed by reference
 * #Can be used with objects as well.
 */
console.log("+++++====== Spread Operator ======+++++");

let example1 = [1,2,3,4,5,6];
let example2 = [...example1];

example2.push(7); //Changes do not propagate to the original array.

console.log(`1. example1 = ${example1}`);
console.log(`2. example2 = ${example2}`);

let example3 = {
    firstName: 'John',
    lastName: 'Doe'
};

let example4 = {
    middleName: 'Freaking', //We can use this to add a default parameter in case we don't get a corresponding key/value pair, these ones are used.
    lastName: 'Vain',
    ...example3
};
//Note that the default values are to be added before the use of spread operator otherwise they will be overwritten.

console.log('3. ');
    console.log(example3);
console.log('4. ');
    console.log(example4);



/**
 * ----Rest Operator----
 * #Give us the ability to get the arguments out of our function.
 * #Used when we don't know how many inputs are going to be used.
 * #Identified by the use of triple dots(...) in front of the argument.
 */
console.log("+++++====== Rest Operator ======+++++");

//Conventional method is to use the 'arguments' object which give a description of the arguments in the function but not in form or an array and therefore, not easily iterable.
function show1(nums){
    console.log('1. '); 
        console.log(arguments);
}
show1(2,4,6,5,7);

//With help of the Rest operator we get an array.
function show2(...nums){
    console.log(`2. ${nums}`);
}
show2(2,4,6,5,7);



/**
 * ----Arrow Functions----
 * #Helps us to reduce the boilerplate code for callback functions.
 * #Identified by the use of a arrow(=>) in an argument.
 */
console.log("+++++====== Arrow Functions ======+++++");

//Without the use of Arrow function.
function add1(...nums){
    let total = nums.reduce(function (x,y){ //This is a callback function.
        return x+y;
    });
    
    console.log(`1. The total is ${total}`);
}

add1(1,3,5,6,3);

//With Arrow function.
function add2(...nums){
    let total = nums.reduce((x,y) => x + y);

    console.log(`2. The total is ${total}`);
}

add2(1,3,5,6,3);



/**
 * ----Default Params----
 * #Provides us the ability to set default parameters with the function definition.
 * #Helps us to decrease the possibility of errors.
 */
console.log("+++++====== Default Params ======+++++");

//Conventional method to write this sort of a function did not use to provide a way for us to provide default parameter.
// function add(numArray){
//     let total = 0;
//     numArray.forEach((element) => {
//         total += element;
//     });

//     console.log(`1. The total is ${total}`);
// }
// add();
//Note that this will raise an error- "Uncaught TypeError: Cannot read property 'forEach' of undefined" as we have not passed any array in the function call.

//With the help of default params
function add(numArray = []){ //Simple set the default values in the formal parameters.
    let total = 0;
    numArray.forEach((element) => {
        total += element;
    });

    console.log(`The total is ${total}`);
}
add();



/**
 * ----Includes()----
 * #Allows us to check if a particular value is included in an array.
 * #Returns a boolean when called indicating the presence/absence of the value.
 * #It is not supported by Internet Explorer.
 */
console.log("+++++====== Includes ======+++++");

let numArray = [3,6,2,6,8,5,7];
let toFind = 0;

//Without the use of includes() before ES6 we used to trick indexOf() function get achieve this which returns -1 when the value is not contained in the array.
if(numArray.indexOf(toFind) != -1)
    console.log(`1. ${toFind} is included inside the array.`)
else
    console.log(`1. ${toFind} is NOT included inside the array.`)

//With includes(), the task becomes a bit more straight forward.
if(numArray.includes(toFind))
    console.log(`2. ${toFind} is included inside the array.`)
else
    console.log(`2. ${toFind} is NOT included inside the array.`)

