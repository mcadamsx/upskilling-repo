//Declaring a Variable
var firstName;
// let middleName;
//NB const variable without initialized is not allowed

// initializing a variable
var firstName = "paul";
let middleName = "Daniel";
const lastName = "Thomas"

// Primitive Data Types (String, Number, Boolean, undefined, null)
let name = "paul"; // (string literal)
let age = 30; // (Number literal)
let isApproved = false; // (Boolean literal)
let courseName  = undefined; // NB: by default a value of a declared variable is undefined but in cases you want to explicitly assign undefined.
let selectedColor = null;//

// Reference Types (Objects, Array, Function)

// OBJECTS (collection of key value pairs)

// Object syntax
let person = { 
    name: "paul",
    age: 30,
};
// NB: name is the key and "paul" is the value, together they are known as property. i.e. name and age are properties of the object person

// reading and reassigning values of the properties in an object

// using DOT NOTATION
console.log(person.name);  //reading values
person.age = 50; // reassigning value of object

// using BRACKET NOTATION
person["name"] = "Derrick";
console.log(person["age"]);

//ARRAYS
let selectedColors = ["red", "blue"];

// FUNCTION  (set of statement that perform a specific task)

// function declaration
function greet(){
    console.log("Hello World");
}
greet();

console.log("this is the final line")
