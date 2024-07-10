/**
 * * Error Handling in ES6
 */

'use strict'

console.clear();

//? Syntax Error
//! console.log("Hello world!!!);

//? Runtime Error || Logic Error
let a = 5;
for(let i = a; i >= 0; i--)
    console.log(a / i);

//? Use try...catch...final to handle error sử dụng try catch để xử lí lỗi
var arr = [1,2,3,4,5];
try {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
catch(e)   { 
    console.log('error message', e);
}
finally {
    console.log('= > complete');
}

//? Call stack property
const trace = () =>{
    try{
        throw new Error("Have an error occurred: ");
    }catch(e)   {
        console.log(e.stack);
    }
}

const second = () => trace();

const first = () => second(1 , 'SEstudio', {});

first("Demo");

//? Case 02 for error handling
console.log("--- Case 02 ---");
let obj = {};
console.log("Init Object", obj);
try{
    obj.show();
    console.log('Show is complete')
}catch(e){
    console.log(e);
}
console.log("=> complete");


//? Case 03 for error handling
console.log("--- Case 03 ---");
const getInfo = (fileName) => {
    try {
        console.log("Code in TRY block: First time");
        let fileContent = fileName.read();
        console.log("Code in TRY block: Second time");
        return fileContent;
    } catch(e) {
        console.log("Code in CATCH blog. Something Error: ", e);
    } finally {
        console.log("Code in FINALLY block");
    }
    return "Cannot read file";
}

//! Test-case 01 
console.log("--- Call getInfo(null) ---");
let info = getInfo(null);
console.log("Info = ", info);

//! Test-case 02
console.log("--- Call getInfo(fileObject) ---");
let fileObject = {
    name : 'file_name',
    read : () => {
        return 'File data is loaded ';
    }
};
let file_data = getInfo(fileObject);
console.log(file_data);

//? Error type in ES6
//! 1. Syntax Error (lỗi syntax)
try { /*Khai báo biến x mà không gán giá trị.
    Gọi hàm eval với tham số x và hello. Tuy nhiên, cú pháp này là không hợp lệ vì hàm eval chỉ nhận một tham số là một chuỗi mã JavaScript hợp lệ.
    Cú pháp này sẽ gây ra lỗi.*/ 
    let x;
    eval(x, hello);    // function eval() is not defined
} catch(e) {
    console.log(e.name); // thuốc tính name sẽ cho biết loại lỗi xảy ra
}

//! 2. Range Error
let num = 1; 
try { /*Thử gọi phương thức toPrecision của đối tượng num với tham số 500.
    Phương thức toPrecision định dạng một số đến độ chính xác được chỉ định (số chữ số). Giá trị hợp lệ cho tham số này thường nằm trong khoảng từ 1 đến 100.
    Gọi num.toPrecision(500) nằm ngoài phạm vi hợp lệ, do đó sẽ gây ra lỗi RangeError.*/
    num.toPrecision(500);   // Out of range
} catch(e) {
    console.log(e.name); /*RangeError là lỗi xảy ra khi một giá trị không nằm trong phạm vi hoặc tập giá trị hợp lệ.
    Trong ví dụ này, tham số 500 truyền vào toPrecision không nằm trong phạm vi hợp lệ cho độ chính xác của số, dẫn đến lỗi RangeError.*/
}


//! 4. Type Error
num = 1;
try {
    num.toUpperCase();      // Num là 1 số nguyên nên không thể gọi phương thức toUpperCase() => (viết in hoa)
} catch(e) {
    console.log(e.name);
}

//! 5. URI Error
try {
    let uri = decodeURI("%%%");       // Cannot URI Decode because "%%%" is not URL (%%% không phải là URL)
    // let uri = decodeURI('https://www.google.com');
    console.log(uri);
} catch (e) {
    console.log(e.name)
}

//?-------------------- THROW ERROR --------------------
// console.clear();
// throw trong JavaScript được sử dụng để ném ra một lỗi. Lỗi này có thể là một chuỗi, số, boolean, đối tượng, hoặc bất kỳ giá trị nào khác.
/*Khi một lỗi được ném ra bằng từ khóa throw, mã trong khối try sẽ ngừng lại ngay lập tức, và quyền điều khiển sẽ được chuyển sang khối catch nếu có. Nếu không có khối catch, lỗi sẽ không được bắt và chương trình sẽ dừng lại với thông báo lỗi*/
console.log("--- Test throw any Object ---");
try {
    let obj = {};
    throw obj;
} catch (e) {
    console.log(e);
}

console.log("--- Test throw a Symbol ---");
try {
    let symbol = Symbol();
    throw symbol;
} catch(e) {
    console.log(e);
}

console.log("--- Test throw a Number ---");
try {
    let num = 404; 
    throw num;
} catch(e) {
    console.log(e);
}

console.log("--- Test throw a String ---");
try {
    let str = "File not found";
    throw str;
} catch(e) {
    console.log(e);
}

//! Create Object Error
console.log("--- Using Object Error ---");
let myError = new Error("Error something");
console.log("Init object Error");
try {
    throw myError;
} catch(e) {
    console.log(e);
}

//! Catch complex error
let myErr = new Error('Something error');
let rangeErr = new RangeError();
let evalErr = new EvalError("Eval error");

// random value in [0..9]
let randomValue = Math.floor(Math.random() * 10);

// [0, 1, 2, 3]
let randomObject = randomValue % 4;

console.log("Random object: ", randomObject);

try {
    switch(randomObject) {
        case 0: 
            throw myErr;
        case 1:
            throw rangeErr;
        case 2:
            throw evalErr;
        case 3:
            throw "String error is here!!!";
    }
} catch(e) {
    console.log("Type of error = ", (typeof e));
    
    if (e instanceof RangeError)
        console.log("-> RangeError");
    else if (e instanceof EvalError) 
        console.log("-> EvalError");
    else if (e instanceof Error)
        console.log("-> Error!!!");
    else if (typeof e == "string")
        console.log("-> String Error");
    else 
        console.log("->> Another Error type");
}

//! Error Property
// console.clear();
let firstErr = new Error();

firstErr.name = "First Error";
firstErr.message = "This is FIRST ERROR";
try {
    throw firstErr;
} catch(e) {
    console.log("Error Name: ", e.name);
    console.log("Error Message: ", e.message);
    console.log("Type of Error stack:", (typeof e.stack));
    console.log("-----------------");
    console.log(e.stack);
}

//! Re-throw Error
console.clear();
const checkScore = (score) => {
    if (score < 0 || score > 100) {
        throw "Invalid score: "  + score;
    }
}

const checkPlayer = (name, score) => {
    try {
        checkScore(score);
    } catch(e) {
        console.log('Something invalid with player:', name, '>>',  e);
        throw ("Score " + score + " invalid for player " + name);
    }
    console.log('OK, Player', name, 'have score', score);
}

try {
    checkPlayer("Petter", 90);
    checkPlayer("Marry", 110);
} catch(e) {
    console.log(e);
}
