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

class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarInfo(){
        console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    }
}
const car1 = new Car("Toyota", "Corolla", 2015);
const car2 = new Car("Ford", "Fusion", 2018);
const car3 = new Car("Chevrolet", "Malibu", 2016);

car1.getCarInfo();
car2.getCarInfo();
car3.getCarInfo();

const user = {
    name: "Mikko Mallikas",
    email: "Mallikas@malli.fi",
    address: {
        street: "Mallitie 1",
        city: "Mallikaupunki",
        zip: "12345"
    }
};
const { name, email, address: { street, city, zip } } = user;
console.log("Name: " + name);
console.log("Email: " + email);
console.log("Address: " + street + ", " + city + " " + zip);

const updatedUser = { ...user, email: "Mallikas.uus@malli.fi" };
console.log("Updated email: " + updatedUser.email);