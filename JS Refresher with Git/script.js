// Part 1: Variables, Operators, and Functions
function calculateArea(radius){
    const Pi = 3.14159;
    const area = Pi * radius * radius;
    console.log("The area of the circle is: " + area);
}
function compareNumbers(a, b){
    if(a > b){
        console.log(a + " is greater than " + b);
    } else if(a < b){
        console.log(a + " is less than " + b);
    } else {
        console.log(a + " is equal to " + b);
    }
}

calculateArea(3);
compareNumbers(5, 25);
compareNumbers(8, 12);
compareNumbers(32, 22);
// Part 2: Arrays, Objects, and Functions
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled numbers: " + doubledNumbers);
const filteredNumbers = numbers.filter(number => number > 2);
console.log("Filtered numbers: " + filteredNumbers);