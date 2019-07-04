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