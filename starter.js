// ============================================================
// WEEK 6 STARTER: Functions, Objects and Arrays
// Run this by opening index.html in Chrome, then press F12
// and look at the Console tab.
// ============================================================

// ------------------------------------------------------------
// PART 1: FUNCTIONS
// ------------------------------------------------------------

// Example (live-code this with the class)
function sayHello() {
	console.log("Hello, world!");
}
sayHello();
sayHello();
// Exercise 1.1: write greet(name) that RETURNS "Hello, <name>!"
function greet(name) {
	return `Hello, ${name}!`;
}

console.log(greet("john")); // Hello, john

// Exercise 1.2: write isEven(number) that returns true or false
function isEven(number) {
	const result = number % 2 === 0;
	return result;
}

const isOdd = (number) => {
	return number % 2 !== 0;
};

const evenCheck = isEven(4);
const oddCheck = isOdd(7);
console.log(evenCheck);
console.log(oddCheck);

// Exercise 1.3: write calculate(a, b, operator) using a switch
// operators: "+", "-", "*", "/"
function calculate(a, b, operator) {
	// TODO
}

// Test your functions (uncomment when ready)
// console.log(greet("Amina"));          // Hello, Amina!
// console.log(isEven(4));               // true
// console.log(isEven(7));               // false
// console.log(calculate(10, 5, "+"));   // 15
// console.log(calculate(10, 5, "/"));   // 2

// ------------------------------------------------------------
// PART 2: OBJECTS
// ------------------------------------------------------------

// Exercise 2.1: create a book object with title, author, year
const bio = {
	name: "John Keno",
	age: 29,
	course: "Web Development",
	isActive: true,
	greet: function () {
		console.log(
			`Hello, my name is ${this.name} and I am ${this.age} years old.`,
		);
	},
};

// Exercise 2.2: add a describe() method that logs "<title> by <author>"
// TODO

// Exercise 2.3: use for...in to print every key and value

for (const key in bio) {
	console.log(`${key}: ${bio[key]}`);
}

console.log(bio["name"]); // John Keno
console.log(bio["age"]); // 29

// Test your object (uncomment when ready)
// console.log(book.title);
// book.describe();

// ------------------------------------------------------------
// PART 3: ARRAYS
// ------------------------------------------------------------

const numbers = [1, 0, 2, 5, 5];

console.log(numbers[0]); // 1

// Exercise 3.1: use map to square every number -> [1, 4, 9, 16, 25]
const squared = numbers.map(function (num) {
	return num * num;
});
const squaredArrow = numbers.map((num) => num * 2);

console.log(squared); // [1, 4, 9, 16, 25]
console.log(squaredArrow); // [1, 4, 9, 16, 25]

// Exercise 3.2: use filter to keep numbers greater than 2 -> [3, 4, 5]
const bigNumbers = numbers.filter((num) => num >= 2);

// console.log(squared);
console.log(bigNumbers);

const multiplyFive = numbers
  .filter((num) => num >= 2)
  .map((num) => num * 5);

  multiplyFive.push(100);
  multiplyFive.pop();

console.log("multiplyFive",multiplyFive); // [10, 15, 25]

// Array of objects (used in Exercise 3.3 and the Mini Challenge)
const students = [
	{ name: "Amina", score: 72 },
	{ name: "Chidi", score: 45 },
	{ name: "Bola", score: 88 },
	{ name: "Ngozi", score: 56 },
];

// Exercise 3.3: names of students who scored above 50 (use filter then map)
const passedNames = students.filter((student) => student.score >= 50)
  .map((student) => student.name);

console.log(passedNames);   // ["Amina", "Bola", "Ngozi"]

// ------------------------------------------------------------
// PART 4: MINI CHALLENGE: GRADE TRACKER
// ------------------------------------------------------------
// A = 70 and above, B = 60 to 69, C = 50 to 59, F = below 50

function getGrade(score) {
  if (score >= 70) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "F";
  }
}


function getGrade2(score) {
  switch (true) {
    case score >= 70:
      return "A";
    case score >= 60:
      return "B";
    case score >= 50:
      return "C";
    default:
      return "F";
  }
}
// Loop through students and print "name: grade", e.g. "Amina: A"

for (const student of students) {
  console.log(`${student.name}: ${getGrade(student.score)}`);
}

students.map((student) => {
  console.log(`${student.name}: ${getGrade2(student.score)}`);
});
