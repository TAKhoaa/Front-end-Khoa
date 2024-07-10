/**
 * * Resolve call-back hell problem
 * * ES using PROMISE - Static methods of PROMISE
 */

'use strict'

console.clear()

//? Static methods
//! - Promise.resolve(value): return promise resolved (finish) with value (trả về promise đã được giải quyết kết thúc có giá trị )
//! - Promise.reject(reason): return promise reject (error) with value of error (trả về promise bị từ chối (lỗi) với giá trị lỗi)
//! - Promise.all(iterable of multiple promises): (có thể lặp lại nhiều promise)
//      + Input array of promises or non-promises objects (number, boolean, etc...) mảng đầu vào của đối tượng promises hoặc non-promises
//      + Return new promise object. (trả về đối tượng promises mới)
//      + Wait all of promises objects in array must be completed/resolved (finish) by order or promises in array ( + Đợi tất cả các đối tượng Promise trong mảng phải được hoàn thành/giải quyết (kết thúc) theo thứ tự hoặc các Promise trong mảng)
//      + If we have one of promises to be rejected, this promise (rejected) will throw error, but others is continue(Nếu có 1 trong promise bị từ chối sẽ đưa ra lỗi, nhưng promises khác vẫn tiếp tục )
//      + So, these promises are executed parallel (vì vậy những lời hứa này được thực hiện song song )
//! - Promise.race(iterable of multiple promises): (có thể lặp lại nhiều promises)
//      + Input array of promises or non-promises objects (number, boolean, etc...)
//      + Return new promise object. 
//      + Wait all of promises objects in array must be completed. Return of promise which is completed first will return the result (Resolved/Rejected)
//! - Promise.allSettled(iterable of multiple promises):
//      + Input array of promises or non-promises objects (number, boolean, etc...)
//      + Return new promise object. 
//      + Wait all of promises objects in array must be completed. Return array of result of all of promises
//! - Promise.any(iterable of multiple promises): experimental (beta)

const p_3 = Promise.resolve(100) // tạo 1 promises được giải quết với giá trị '100'
const p_4 = Promise.reject(true) // tạo 1 promises bị từ chối với giá trị 'true'
const p_5 = Promise.reject('Error') // tạo 1 promises bị từ chối với giá trị 'Error'

const p_6 = new Promise ((resolve, reject) => { // tạo 1 promises bị từ chối sau 1 giây với giá trị 'P_6 is resolved'
    setTimeout(() => {
        reject('p_6 is resolved')
    }, 1000)
})

//Promises.all :Trả về kết quả của tất cả các Promise nếu tất cả được giải quyết, hoặc trả về lỗi của Promise đầu tiên bị từ chối.
Promise.all([p_3, p_5, p_6])
.then(data => {
    console.log('P_3, p_5, p_6', data) // trong đây có 3 5 6 nhưng p_5 bị tự chối đầu tiên sẽ trả về error
})
.catch(error => {
    console.log('P_3, p_5, p_6', error)
})

Promise.all([p_3, p_4, p_5, p_6])
.then(data => {
    console.log('P_3, P_4, P_5, P_6', data)// trong đây có 3 4 5 6 nhưng p_4 bị tự chối đầu tiên sẽ trả về 'true'
})
.catch(error => {
    console.log('P_3, P_4, P_5, P_6', error)
})

//Promise.race   Trả về kết quả của Promise đầu tiên được giải quyết hoặc bị từ chối.
Promise.race([p_3, p_5, p_6]) // trong đây p3 đã hoàn thành đầu tiên nên trả về giá trị '100'
.then(data => {
    console.log('RACE: P_3, P_5, P_6', data)
})
.catch(error => {
    console.log('RACE: P_3, P_5, P_6', error)
})

Promise.race([p_3, p_4, p_5, p_6])// trong đây p3 đã hoàn thành đầu tiên nên trả về giá trị '100'
.then(data => {
    console.log('RACE: P_3, P_4, P_5, P_6', data)
})
.catch(error => {
    console.log('RACE: P_3, P_4, P_5, P_6', error)
})

//Promise.allSettled Trả về kết quả của tất cả các Promise, bao gồm cả những Promise bị từ chối, dưới dạng một mảng các đối tượng trạng thái.
Promise.allSettled([p_3, p_5, p_6])
.then(data => {
    console.log('ALL_SETTLED: P_3, P_5, P_6', data)
})
.catch(error => {
    console.log('ALL_SETTLED: P_3, P_5, P_6', error)
})


Promise.allSettled([p_3, p_4, p_5, p_6])
.then(data => {
    console.log('ALL_SETTLED: P_3, P_4, P_5, P_6', data)
})
.catch(error => {
    console.log('ALL_SETTLED: P_3, P_4, P_5, P_6', error)
})
