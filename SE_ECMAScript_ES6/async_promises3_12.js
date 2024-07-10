/**
 * * Resolve call-back hell problem
 * * ES using PROMISE - Static methods of PROMISE
 */

'use strict'

console.clear()

//? Static methods
//! - Promise.resolve(value): return promise resolved (finish) with value
//! - Promise.reject(reason): return promise reject (error) with value of error
//! - Promise.all(iterable of multiple promises):
//      + Input array of promises or non-promises objects (number, boolean, etc...)
//      + Return new promise object. 
//      + Wait all of promises objects in array must be completed/resolved (finish) by order or promises in array
//      + If we have one of promises to be rejected, this promise (rejected) will throw error, but others is continue
//      + So, these promises are executed parallel
//! - Promise.race(iterable of multiple promises):
//      + Input array of promises or non-promises objects (number, boolean, etc...)
//      + Return new promise object. 
//      + Wait all of promises objects in array must be completed. Return of promise which is completed first will return the result (Resolved/Rejected)
//! - Promise.allSettled(iterable of multiple promises):
//      + Input array of promises or non-promises objects (number, boolean, etc...)
//      + Return new promise object. 
//      + Wait all of promises objects in array must be completed. Return array of result of all of promises
//! - Promise.any(iterable of multiple promises): experimental (beta)

//? Chaining promises (xâu chuỗi promises)
const p_7 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('P_7 is resolved')
    }, 1000);
})

const p_8 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('P_8 is resolved')
    }, 2000);
})

const p_9 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('P_9 is resolved')
    }, 3000);
})

p_7.then(data => {
    console.log(data)
    return p_8
})

.then(data => {
    console.log(data)
    return p_9
})

.then(data => {
    console.log(data)
})

/*Đoạn mã trên tạo ba Promise (p_7, p_8, p_9) sẽ được giải quyết tuần tự sau các khoảng thời gian 1 giây, 2 giây và 3 giây.
Sử dụng chuỗi .then() để thực thi các hành động bất đồng bộ theo thứ tự. Kết quả của Promise trước sẽ được truyền vào Promise kế tiếp trong chuỗi.
Kết quả sẽ được in ra theo thứ tự sau khi từng Promise được giải quyết*/