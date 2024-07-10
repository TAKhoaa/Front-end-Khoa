/**
 * * Union types
 */
var printObj = function (obj) {
    if (typeof obj === 'string')
        console.log(obj.toUpperCase());
    else
        console.log(obj);
};
printObj(100);
printObj('Hello world');
//? compare Array[string] with String (so sánh mảng string với string)
var getName = function (name) {
    if (Array.isArray(name))
        console.log("Name is array sting : ".concat(name));
    else
        console.log("Name : ".concat(name, " "));
};
getName(['hello', 'World', 'Petter', 'Marry']);
getName('TAK');
