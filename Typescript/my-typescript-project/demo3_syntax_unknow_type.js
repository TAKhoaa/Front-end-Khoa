/**
 * * Unknown types
 */
//? unknown
var not_sure = 3;
console.log(not_sure, typeof (not_sure)); //
not_sure = "Hello, world!";
console.log(not_sure, typeof (not_sure)); //
not_sure = true;
console.log(not_sure, typeof (not_sure)); //
//? special case of Unknown
var maybe = true;
//const num : number = maybe  //-> Error: cannot assign unknown to Number because maybe have contain True (boolean type)
if (maybe === true) {
    var value_boolean = maybe;
    console.log(value_boolean, typeof (value_boolean));
}
maybe = "Hello, world!";
if (typeof (maybe) === "string") {
    var value_string = maybe;
    console.log(value_string, typeof (value_string)); //
}
