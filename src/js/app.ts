// Basic types in Typescript

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 3.50;
let num : number = 5;

// String
let color: string = "blue";

// Arrays 
let list: number[] = [1,2,3];
let listDow: Array<number> = [4,5,6];

// Tuple 
let x: [string, number]; //
x = ["hello", 10,];
// x = [10, "hey"]; won't work

// Enum
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;
console.log(c)



