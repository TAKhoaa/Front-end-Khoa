/**
 * * Async in ES6: Call-back hell
 * * use strict of ES6
 */

'use strict';

console.clear();

//? call-back function
let value =1; 
const f_1 = () => {
    console.log(value);
    setTimeout(() => { // setTimtout đặt hàm callback vào hàng đợi để thực thi sau 100ms
         // call-back function (Nested function) is here (hàm gọi (hàm lồng nhau))
         value++;
         console.log("Inside setTimeout()", value); 
    },100)
    console.log("Outside setTimeout()", value); //In ra chuỗi "Outside setTimeout()" cùng với giá trị hiện tại của value. Vì dòng này được thực thi ngay lập tức sau khi gọi setTimeout, giá trị của value vẫn là 1 tại thời điểm này.
};
f_1();

//? Problem of call-back function -> Call-back hell (vấn đề về chức năng call-back )
const f_2 = () => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log("Run #05")
                }, 200)
                setTimeout(() => {
                    console.log("Run #06")
                },100)
                console.log("Run #04")
            }, 300)
            console.log("Run #03")
        }, 500)
        console.log("Run #02")
    },1000)
    console.log("Run #01")
}

f_2()