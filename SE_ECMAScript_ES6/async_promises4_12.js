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

//? Catch error and callback error of THEN
const resolvePromise = new Promise((resolve, reject) => { // tạo 1 promises đã giải quyết với thông điệp 'Promises is resolved'
    resolve('Promise is resolved')
})

const rejectPromise = new Promise((resolve, reject) => { // tạo 1 promises bị từ chối với thông điệp 'Promises is rejected'
    reject('Promise is rejected')
})

rejectPromise
.then(() => { /*Khi rejectPromise bị từ chối, hàm callback thứ hai trong .then() được gọi với tham số là thông điệp từ chối 'Promise is rejected'.
    Kết quả là 'rejectPromise: Promise is rejected' được in ra console.
    Lưu ý: Hàm callback thứ nhất trong .then() sẽ không được gọi trong trường hợp này vì Promise đã bị từ chối. Hàm callback thứ hai xử lý lỗi ngay lập tức, vì vậy lỗi sẽ không lan truyền xuống các .then() tiếp theo.*/
    throw new Error('Oh no no Error')
}, error => {
    console.log('rejectPromise: ', error)
})

// resolvePromise /*Đoạn mã này bị comment và sẽ không được thực thi. Nếu được thực thi, nó sẽ ném ra một lỗi mới 'Oh no no ERROR' trong hàm callback thứ nhất của .then() nhưng hàm callback thứ hai sẽ không được gọi vì Promise đã được giải quyết thành công.*/
// .then(() => {
//     throw new Error('Oh no no ERROR')
// }, error => {
//     console.log('resolvePromise: ', error)
// })

resolvePromise
.then(() => {
    throw new Error('Oh no no ERROR')
})
.catch(error => {
    console.log('resolvePromise: ', error)
})