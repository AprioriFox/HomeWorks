class Transport{
    constructor(name, wheels, engine, fuel, color) {
        this.name = name
        this.wheels = wheels;
        this.engine = engine;
        this.fuel = fuel;
        this.color = color;
    }

    startEngine() {
        console.log("Engine is enable");
    }
}
class Car extends Transport{
    constructor(name, wheels, engine, fuel,color,doors) {
        super(name, wheels, engine, fuel,color);
        this.doors = doors;
    }
    startEngine() {
        console.log("Engine is start")
    }
}
class Motorcycle extends Transport{
    constructor(name, wheels, engine, fuel, color,type) {
        super(name, wheels,engine,fuel,color);
        this.type = type;
    }
    startEngine() {
        console.log("Engine is start")
    }
}
class Bike extends Transport{
    constructor(name, wheels, engine, fuel, color, speeds) {
        super(name, wheels, engine, fuel,color);
        this.speeds = speeds;
    }
    startEngine() {
        console.log("У велосипеда нет двигателя, кроме ног!")
    }
}

const spectra = new Bike("Spectra Comp", 2, "Foot","Muscle","Green-Black", 20)
console.log(spectra)
spectra.startEngine()

const zhiguli = new Car("Zhiguli", 4, 1.2, 9.5, "Orange",3)
console.log(zhiguli)
zhiguli.startEngine()

const kawasaki = new Motorcycle("Kawasaki Ninja ZX-10R", 2, 998, 6, "Green", "Sport")
console.log(kawasaki)
kawasaki.startEngine()