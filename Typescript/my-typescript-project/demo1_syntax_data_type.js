/**
 * * Base type of TypeScript
 */
//? boolean
var isDone = false;
console.log("isDone = ".concat(isDone, " - ").concat(typeof (isDone)));
//? number 
var decimal = 6; // integer
var hex = 0xf0000d; // hex      => is converted to decimal
var bin = 42; // binary   => is converted to decimal
var octal = 484; // octal    => is converted to decimal
console.log("Decimal = ".concat(decimal, " - ").concat(typeof (decimal)));
console.log("Hex     = ".concat(hex, " - ").concat(typeof (hex)));
console.log("Bin     = ".concat(bin, " - ").concat(typeof (bin)));
console.log("Octal   = ".concat(octal, " - ").concat(typeof (octal)));
var big = 100n;
console.log("Big int = ".concat(big, " - ").concat(typeof (big)));
//? string 
var color = 'light blue';
color = 'dark red';
console.log("Color   = ".concat(color, " - ").concat(typeof (color)));
