function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () { console.log(`You drive the ${this.model}`) }
}

const car1 = new Car("Dacia", "Duster", 2020, "red");
const car2 = new Car("Ford", "Mustang", 2024, "blue");

console.log(car1.make, car1.model, car1.year, car1.color);
car1.drive();
console.log(car2.make, car2.model, car2.year, car2.color);
car2.drive();