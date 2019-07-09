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
/*
    function add(numArray){
        let total = 0;
        numArray.forEach((element) => {
            total += element;
        });

        console.log(`1. The total is ${total}`);
    }
    add();
*/
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



/**
 * ----let & const----
 * #When we call an uninitialized var in the code, we don't get an error, instead we get a null/undefined.
 * #This is due to variable hoisting in javascript, where JS hoists the vars on the function scope level.
 * #It is not supported by Internet Explorer.
 */
console.log("+++++====== Let & Const ======+++++");

//Using var
if(false){
    var example = 5;
}
console.log('1. ');
console.log(example);
//This outputs null/undefined instead of an error because the interpreter sees this code as following:

/*
    var example; //See that the variable is pre-initialized outside of it's block.

    if(false){
        example = 5;
    }
    console.log(example);
*/

//------Using let
// #let is stricter version of var which uses block scope.
/*
    if(false){
        let num = 5;
    }
    console.log(num);
*/
//Will give us an error- "Uncaught ReferenceError: num is not defined"
//We should mostly always use let instead of var especially when the values are supposed to be reassignable for the variable.

//------Using const
//#Const sets the variable as a read-only.
//#In case of primitive types (int, boolean, string), you can not change the value once it is assigned.
//#In case of an array, you can carry array operations (pop, push) but can not change it into a primitive type or an object.
//#In case of an object, you can add properties but can not change it into a primitive type or an array.
//#So basically in case of an object/array, you can modify the values but can not change the datatype.

const constPrem = 5;
console.log(`2. contPrem is ${constPrem}`);

//constPrem = 10; //Invalid operation, will raise an error.

const constArr = [3,6,4,7];
console.log(`3. contArr is ${constArr}`);

constArr.push(4); //Valid as it is an array operation.
console.log(`4. contArr is ${constArr}`);

//constArr = 8; //Will raise an error as we can not change the datatype of a constant array.

const constObj = {};
console.log('5. constObj is');
    console.log(constObj);

constObj.firstName = 'John'; //Valid addition to the properties of the constant object.
console.log('6. constObj is');
    console.log(constObj);

//constObj = []; //Will raise an error as we can not change the datatype of a constant object.



/**
 * ----Import & Export----
 * #Allows to do dependency injections.
 * #Introduces more Object Oriented Programming.
 * #Allows the code to be more modular.
 * 
 * Note: See export.js file
 */
console.log("+++++====== Import & Export ======+++++");

//---------Import
// In order for import/export to work, we have to run the file from a server (WAMP,LAMP, etc.) otherwise the CROS policy will prevent the linking of the two files.
// i.e., simplify opening the file in the browser from the file manager will not work and will get out an error.

// import <{ <identifier 1>, [identifier 2], [identifier 3] }> from <'src_path'>;
import { data } from './export.js';

let updatedData = data; //Passed as reference

updatedData.push(5);
data.push(9);

console.log(`1. ${updatedData}`);
console.log(`2. ${data}`);



/**
 * ----padStart() & padEnd()----
 * #padStart() - Gives us the ability to add values to the START of a string.
 * #padEnd() - Gives us the ability to add values to the END of a string.
 * #Depends on long the string is.
 */
console.log("+++++====== padStart() & padEnd() ======+++++");

let string1 = 'John';
let string2 = 'John Doe';

// <stringIdentifier>.padStart(<max_stringLength_after_concatenation>, ['substring'])
// <stringIdentifier>.padEnd(<max_stringLength_after_concatenation>, ['substring'])

console.log(`1. ${string1.padStart(10, 'ab')}`);
console.log(`2. ${string2.padEnd(10, 'a')}`);



/**
 * ----Classes----
 * #Like Classes in Java
 * #Added more Object Oriented Programing possibilities.
 */
console.log("+++++====== Classes ======+++++");

import { Animal } from './export.js'

let cat = new Animal();
console.log('1. ');
console.log(cat);

let dog = new Animal('Groud', 4);
console.log('2. ');
console.log(dog); //Print whole object
console.log(`3. The dog is a ${dog.type} type animal.`); //Print a property of the object.

dog.legs = 5; //Chaning the values
console.log(`4. My dog has ${dog.legs} legs (*￣o￣)╭.`);

console.log('5. ');
cat.makeNoise();

console.log('6. ');
dog.makeNoise('woof!');

console.log('---Static---');
console.log('7. ');
Animal.makeANoise(); //Use the class name directly without the use of an object.

console.log('---Get Method---');
console.log('8. ');
console.log(dog.metaData); //We call get method without putting brackets '()'

console.log('---Inheritance---');
import { Cat } from './export.js';
//We could have also done import { Animal, Cat } from './export.js'; to began with.

//Calling overridden method of the class.
let cat2 = new Cat('Ground', 4);
console.log('9. ');
cat2.makeNoise();

//Calling an inherited method of the class, a get method in this case.
console.log('10. ');
console.log(cat2.metaData);



/**
 * ----Trailing Commas----
 * #With ES6, it is a non issue if you leave out commas at the end of the line without specifying an identifier after it.
 * #This would have raised an error in JS before ES6.
 */
console.log("+++++====== Trailing Commas ======+++++");

function tCommas(param1,){ //We left a common without specifying the next formal parameter.
    const tCom = {
        firstName: 'John', //Here we are leaving a comma in an object without putting-in the property.
    }
    console.log(tCom);
}

tCommas();



/**
 * ----Sets----
 * #Sets allow us to create a unique list.
 * #Outputting the set only shows the unique values contained within the set.
 * #Checking the size of the site reports the number of unique values in it.
 * #sets are iterable i.e., we can use all type of loops to parse through it.
 */
console.log("+++++====== Sets ======+++++");

// new Set([ [value1], [value2], [value3], [value4],.... ]);
const exampleSet = new Set([1,1,2,2,2,3]); //6 values in total but only 3 unique values.

console.log("1.1. ");
console.log(exampleSet);
console.log("1.2. ");
console.log(exampleSet.size); //".size" returns the size of the set.

//We can add more values using ".add()"
exampleSet.add(5);
console.log("2.1. ");
console.log(exampleSet);
console.log("2.2. ");
console.log(exampleSet.size);
exampleSet.add(4).add(8).add(2);
console.log("2.3. ");
console.log(exampleSet);
console.log("2.4. ");
console.log(exampleSet.size);

//We can delete a particular value from set using ".delete()"
//"delete()" return true if the operation was successfully(if the value was contained within the set) and vice-versa
console.log("3.1. " + exampleSet.delete(5));
console.log("3.2. ");
console.log(exampleSet);
console.log("3.3. ");
console.log(exampleSet.size);

//We can check if a value exists in the set using ".has()" which returns a boolean.
console.log("4. " + exampleSet.has(5));

//We can clear an entire set using ".clear()"
exampleSet.clear();
console.log("5.1. ");
console.log(exampleSet);
console.log("5.2. ");
console.log(exampleSet.size);

/**
 * ----Async & Wait----
 * #With ES6, async and wait operations can be written very fast with small code.
 */
console.log("+++++====== Async & Wait ======+++++");

const apiURL = 'https://api.github.com/users';

//----Using Promises
//Making an asynchronous AJAX call which will fetch us some data.
function getUsers1(){
    fetch(apiURL) //"fetch" takes a URL and gets the data(response) which is called a "promise" 
        .then((response) => response.json()) //"then" decides what happens with the response once it is arrived. In this case we are resolving our promise(by converting it into a JSON) as our JS can't process this promise on it's own.
            .then((json) => { //Here, once we get the promise from the last "then", we can process it further.
                console.log("1. ");
                console.log(json[0]);
            }).catch((error) => {
                console.log('Data fetching operation failed!');
            });
}

getUsers1();

//----Using Async & Wait
// The "async" keyword marks the function as an asynchronous type
// async function funcName([param1, param2,....]){}
async function getUsers2(){
    //use keyword "await" to make an asynchronous request.
    const response = await fetch(apiURL);
    const json = await response.json();

    console.log("2. ");
    console.log(json[0]);
}

getUsers2();

//Example 2

//This function emulated a process that may introduce delay and needs asynchronous code to operate with.
function resolveAfter3Secs(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved!');
        }, 3000);
    });
}

//Using Promises
resolveAfter3Secs().then((data) => {
    console.log("3. " + data);
});

//Using Async
async function getAsyncData(){
    const result = await resolveAfter3Secs();
    console.log("4. " + result);
}
getAsyncData();


