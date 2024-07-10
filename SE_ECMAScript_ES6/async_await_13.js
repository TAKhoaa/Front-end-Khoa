    /**
 * * Async ... Await ~ Promise
 */

'use strict'

console.clear()

//? Promise

const resolveAfter2MilliSeconds = () => {
    return new  Promise(resolve => {
        setTimeout(() => {
            resolve('resolve')
        }, 2)
    })
}

// resolveAfter2Second()
//     .then(data => {
//         console.log(data)
//     })

async function asyncCall(){ // async call là hàm bất đồng bộ (async function) bên trong hàm có sử dụng 'await' để chờ cho Promise được giải quyết trước mới thực hiện các dòng tiếp theo
    console.log('Calling') // in ra calling
    const result = await resolveAfter2MilliSeconds() /*Hàm này trả về một Promise được giải quyết sau 2 mili giây.
    Sử dụng setTimeout để trì hoãn việc giải quyết Promise trong 2 mili giây.*/
    console.log(result) // chờ promises từ  resolveAfter2MilliSeconds() được giải quyết và gán kết quả vào
    console.log('DONE')
    console.log("------------------------------")
}

console.log("STARTING")
asyncCall()
console.log("COMPLETED")
/*STARTING được in ra đầu tiên.
asyncCall bắt đầu thực thi và in ra Calling.
COMPLETED được in ra tiếp theo do asyncCall chờ Promise.
Sau 2 mili giây, Promise được giải quyết và asyncCall tiếp tục thực thi, in ra resolve, DONE và dòng phân cách.*/

//? Async is similar Promise. Await must be waiting here
async function foo() {
    return 1
}

// function foo() {
//     return Promise.resolve(1)
// }

//? Compare Async with Promise ( so sánh async với promises)
const p = new Promise((resolve, reject) => {
    resolve(1) // Đây là 1 promise được tạo mới và được giải quyết ngay lập tức với giá tri '1'
})

async function a() { // hàm bát đồng bộ trả về p
    return p
}

function basic() {
    return Promise.resolve(p) // hàm func bìn thường trả về p
}

console.log(p === basic()) // hàm basic trả về chính promises p 
console.log(p === a()) //hàm a bất đồng bộ và luôn trả về một Promise, //Khi gọi a(), kết quả trả về sẽ là một Promise mới, được giải quyết với giá trị của Promise p.

/**
 * async function foo() {
 *      await 1
 * }
 * 
 * function foo() {
 *      return Promise.resolve(1).then(() => undefine)
 * }
 */

async function f_sequence_1() {
    const result_1 = await new Promise(resolve => {
        console.log('result_1 is called')
        setTimeout(() => resolve('1'))
    })

    const result_2 = await new Promise(resolve => {
        console.log('result_2 is called')
        setTimeout(() => resolve('2'))
    })
    
}
f_sequence_1()


async function f_sequence_2() {
    const result_1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))

    const result_2 = new Promise((resolve,reject) => setTimeout(() => reject('2'), 500))

    const result = [await result_1, await result_2]
}

f_sequence_2()
    .then(data => console.log(data))
    .catch(error => {
        console.log("=> ERROR", error)
    })