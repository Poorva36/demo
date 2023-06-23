// Coding Challenge #3
/*
1. Use a constructor function to implement a Car.A car has 'make' and  a speed property.
the speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will
increase the car's speed by 10, and log the new speed
to the console;
3. Implement a 'brake' method that will decrease the
car's speed by 5, and log the new speed to the
console;
4. Create 2 car objects and experiment with calling
'accelerate' and 'brake' multiple times on each of
them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK
*/

const ImplementingCar = function(make, speed){
    this.carName = make
    this.speed = speed
}
ImplementingCar.prototype.accelerate = function(){
    this.speed = this.speed + 10
    console.log(`${this.carName} have new speed with: ${this.speed}`);
}
ImplementingCar.prototype.brake = function(){
    this.speed = this.speed - 5
    console.log(`${this.carName} have new speed with: ${this.speed}`);
}

// bmw and marcedes are the object made by constructor function

const BMW = new ImplementingCar('BMW' , 95)
console.log(BMW);
//object.method - here bmw object and accelerate method
BMW.accelerate()
BMW.brake()

const marcedes = new ImplementingCar('MERCEDES', 105)
console.log(marcedes);

marcedes.accelerate()
marcedes.brake()


