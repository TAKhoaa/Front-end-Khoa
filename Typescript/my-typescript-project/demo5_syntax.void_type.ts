/** 
 * * void - look like void in C/c++
 */


let val : void = undefined
console.log(val, typeof(val))

// val = null //Lỗi , vì val is undefined

function sayHello(): void {
    console.log("Hello, World!")
}

sayHello() 

const sayHi = () : void => {
    console.log("Hi, Everybody!")
}

sayHi();