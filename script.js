//vaiable to test number 6 objective
let myName = "arayton";
//number of states in the USA
const states = 50;
//variable used to log 5 + 4
var math = 5 + 4;
//testing function
console.log(myName.toUpperCase().charCodeAt(0));

if (myName.toUpperCase().charCodeAt(0) >= 76) {
    console.log('Back of the line!')
} else {
    console.log('Next!')
}

function sayHello() {
    alert('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + " you aren't old enough to view this page!")
    }
}

checkAge("John", 17);

var favVeg = ["onions", "carrots", "cucmbers"]

for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
}

var nameAge = [{
        name: "John",
        age: 24
    },
    {
        name: "Drayton",
        age: 23
    },
    {
        name: "Cassie",
        age: 17
    },
    {
        name: "Tyler",
        age: 36
    },
    {
        name: "Jackson",
        age: 16
    }
];

for (var i = 0; i < nameAge.length; i++) {
    checkAge(nameAge[i].name, nameAge[i].age)
}

var word = getLength("Hello World")

function getLength(word) {
    return word.length;
}

console.log(word);

var newNumber = 11;

if (newNumber % 2 === 0) {
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
};