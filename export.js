/**
 *  ==== export.js ====
 * This file is used to represent the use of export feature in ES6
 * It allows us to export data which we can import in another application.
 * You can also export classes and enums.
 */

export const data = [1,2,3];

//=======Classes
export class Animal{

    //constructor(){} or constructor([parameter1], [parameter2],...){}
    constructor(type, legs){ //Constructor of the class
        //No need to define the member variables beforehand.
        this.type = type;
        this.legs = legs;
    }

    //functionName(){} or functionName([parameter1], [parameter2],...){}
    makeNoise(sound = 'Loud Noise'){ //A member function of the class.
        console.log(sound);
    }
    //Note that we don't use the "function" keyword to specify that this is a class.

    //"static" keyword.
    //Can be accessed without creating an instance of the class.
    
    //Static method.
    static makeANoise(){
        console.log('Meow');
    }

    //"get" method.
    //It is a equivalent to getter method in java.
    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
}

///Inheritance
// class <childClassName> extends <parentClassName>{}
export class Cat extends Animal{
    
    // constructor(type, legs, hasTail){
    //     //"super" keyword is used to pass in the inherited member variables to the parent class for initialization.
    //     //"super" can also be used to call function from the parent class.
    //     super(type, legs);
    //     this.hasTail = hasTail;
    // }

    //Overriding method from the parent class, a static method in this case.
    makeNoise(sound = 'meow'){
        console.log(sound);
    }
}