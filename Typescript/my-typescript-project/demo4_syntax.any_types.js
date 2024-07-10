/**
 * * any types is unknown the type of object (any không xác định được với loại obj)
 * * any is new type of object in ES (any là loại đối tượng mới trong ES)
 */
var number = 1;
console.log(number, typeof (number));
number = "Hello world!";
console.log(number, typeof (number));
var s = number;
console.log(s, typeof (s));
number = 111;
s = number.toString();
console.log(s, typeof (s));
s = number;
console.log(s, typeof (s));
