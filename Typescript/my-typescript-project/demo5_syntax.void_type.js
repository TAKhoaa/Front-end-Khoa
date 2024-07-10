/**
 * * void - look like void in C/c++
 */
var val = undefined;
console.log(val, typeof (val));
// val = null //Lỗi , vì val is undefined
function sayHello() {
    console.log("Hello, World!");
}
sayHello();
var sayHi = function () {
    console.log("Hi, Everybody!");
};
sayHi();
