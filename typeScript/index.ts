function sum(a: number, b: number) {
    return a + b;
}

const SUM = sum(78, 45);

console.log(SUM);

// Boolean

let booleano: boolean = false;

// Números

let firstNumber: number = 45;
let secondNumber: number = 78;

let result = firstNumber + secondNumber;

// String

let saludo: string = "Me llamo Lucas";

// Arreglos

let peopple: string[] = [];
peopple = ["Lenin", "Mathias", "Carlos", "Pepe"];

let numbers: number[] = [];
numbers.push(45);
numbers.push(789);

let numbersAndStrings: Array<string | number> = [];
numbersAndStrings.push("Lenin");
numbersAndStrings.push(789);

// Enum

enum Colores {
    rojo = "Rojo",
    verde = "Verde",
    azul = "Azul",
    amarillo = "Amarillo",
}
let colorFavorito: Colores = Colores.verde;
console.log(`Mi color favorito es: ${colorFavorito}`);

// Any

let comodin: any = "Joker";
comodin = { type: "Wildcar" };

// Object

let someObject: object = { type: "Wildcard" };

// Funciones

function suma(a: number, b: number) {
    return a + b;
}
const add = suma(12, 78);
console.log(add);

function createAdder(a: number): (number) => number {
    return function (b: number) {
        return a + b;
    };
}
const sumar = createAdder(12);
const addTwelve = sumar(7);

function fullName(name: string, lastName: string = "Mazabanda"): string {
    return `${name} ${lastName}`;
}
const richard = fullName("Richard");

console.log(richard);

// Interfaces

enum Color {
    red = "Red",
    green = "Green",
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rectan: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.green,
};

function area(r: Rectangulo): number {
    return r.ancho * r.alto;
}

const areaRect = area(rectan);
console.log(areaRect);

rectan.toString = function () {
    return this.color ? `Rectangulo ${this.color}` : "Un rectángulo";
};

console.log(rectan.toString());
