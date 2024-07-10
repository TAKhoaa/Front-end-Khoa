/**
 * * Array in ES6
 */

console.clear();

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//? Print array (in mảng)
console.log("--- Print array ---");
for(let i = 0; i < a.length; i++)
    console.log(a[i]);

//? Insert item (chèn thêm mục)
console.log("--- Append item to array ---");
a.push(99);
console.log(a);

//? Print all item with forEach (in tất cả mục  với forEach)
console.log("--- List even element ---"); // element là tham số đại diện cho mảng a
a.forEach(element => {
    if (element % 2 == 0)
        console.log(element);
});
console.log("--------------------------------------");

//? Get First and Last item of Array
let firstItem = a[0]; 
console.log("First item:", firstItem);
let lastItem = a[a.length - 1]; // lấy phần tử cuối cùng của mảng (a là 99 bởi vì đã push 99 vào mảng a ở dòng trên)
console.log("Last item:", lastItem);
console.log("Object a is a:", typeof(a)); //typeof(a) trả về kiểu dữ liệu của biến a.
console.log("Object a is array:", Array.isArray(a)); //kiểm tra xem biến a có phải là mảng không

//? Revert array (mảng đảo ngược)
a.reverse();
console.log("Array is reverted:", a);

//? Sort array (sắp xếp mảng)
a.sort();
console.log("Array is sorted:", a);

//? Insert and Remove item at HEAD and TAIL of Array (chèn và xóa phần tử tại HEAD và TAIL của mảng)
console.log("--- Add and Remove item at TAIL of array ---");
a.push([888, 66, [11, 22, 33]]); //chèn thêm phần tử
console.log(`PUSH: Insert 888 to array:`, a);
let number = a.pop(); // xóa mục cuối cùng của mảng
console.log(`POP: Remove last item ${number} of array:`, a);

console.log("--- Add and Remove item at HEAD of array ---");
a.unshift([100, 125, 85]);// thêm phần tử vào đầu mảng
console.log(`UNSHIFT: Insert 100 array have`, a);
number = a.shift(); // xóa phần tử ở đầu mảng
console.log(`SHIFT: Number is ${number} and array have`, a);

//? Insert and Remove items at MIDDLE array (thêm phần tử vào giữ mảng)
console.log("--- Add and Remove item at MIDDLE of array ---");
let b = a.splice(4, 2); 
console.log("Remove 2 items is", b, "and array have", a); //bỏ 2 phần tử của mảng lấy từ 0 - 4 là 5 6

a.splice(6, 2, 'a', 'b', 'c'); // bỏ 2 phần tử của mảng lấy từ 0 - 7 (đã mất 5 va 6) là 8 9 , thêm a b c vào phần tử 8 9 đã bỏ
console.log("Remove 2 items [8, 9] and insert 'a', 'b', 'c' to array", a);

let c = a.slice(2, 5); // lấy từ số thứ 2 đến thứ 5 la 2 3 6 và bỏ 2 phần tử đầu là 1 2
console.log("Get sub-array is", c, "and array have", a);

console.log("--------------------------------------");

//? Using MAP //Phương thức map() duyệt qua từng phần tử của mảng a.
console.log("--- MAP in array ---");
a.map((element, index) => { 
    console.log("Element: ", element, "at", index);
});

//? Using FILTER
console.log("--- FILTER in array ---");
let arrA = a.filter((element) => { 
    return element % 2 != 0;        // this is condition to filter (dùng để lọc những phần tử chia hết cho 2)
});
console.log(arrA);

//? Using REDUCE (dùng để thực hiện các phép tính trên mảng)
console.log("--- REDUCE in array ---");
let arrB = a.reduce((result, element) => { /*a.reduce((result, element) => { ... }, 0) là cách sử dụng phương thức reduce() cho mảng a.
    result là giá trị tích lũy (accumulator), ban đầu được đặt là 0 ở cuối tham số thứ hai của reduce().
    element là giá trị của từng phần tử trong mảng a.*/
    return result + element; // cộng các phần tử của mảng
}, 0);

console.log(arrB);

//? Iterator protocol (giao thức lặp)
console.log("--- Iterator protocol ---");
let str = "abcde";
let arrStrA = [...str]; // Toán tử spread '...' sử dụng với một chuỗi sẽ tách ký tự trong chuỗi và đặt trong mảng mới
let arrStrB = Array.from(str); //array.from() để chuyển đổi chuỗi 'str' thành một mảng các ký tự
console.log(arrStrA);
console.log(arrStrB);

//sử dụng iterator để duyệt qua mảng
let item = [1, 2, 3, 4, 5][Symbol.iterator](); //Tạo một iterator từ mảng [1, 2, 3, 4, 5]. Symbol.iterator trả về một iterator cho mảng này.
do {
    var temp = item.next() // Gọi phương thức next() của iterator để lấy phần tử tiếp theo. temp là một đối tượng có dạng { value: <giá trị>, done: <boolean> }.
    if (temp.done === true) //Nếu temp.done là true, tức là iterator đã duyệt hết mảng, thoát khỏi vòng lặp.
        break;
    console.log(temp.value);
} while (temp.done === false); // tiếp tục vòng lặp cho đến khi false

//? Apply Iterator protocol (áp dụng giao thức iterator)
console.log('--- using iterator protocol to generate object ---')
const generator = (value) => { /*Định nghĩa một hàm generator nhận vào một tham số value. Hàm này trả về một đối tượng có thể lặp lại (iterable object) bằng cách sử dụng Symbol.iterator.*/
    return {
        [Symbol.iterator]() { /*Đây là phương thức được định nghĩa để trả về một iterator. Khi đối tượng này được sử dụng trong một vòng lặp for...of, phương thức này sẽ được gọi để lấy iterator.*/
            let i = 0; // khởi tạo biến i = 0
            return {
                next() { //Trả về một đối tượng iterator với phương thức next(). Phương thức này sẽ được gọi mỗi khi cần lấy giá trị tiếp theo trong quá trình lặp. 
                    return {
                        done : (i > value) ? true : false, //done là true nếu i > value tức là đã duyệt qua các giá trị cần thiết. Nếu không done là false
                        value: i++ //giá trị đó tăng lên 1
                    };
                }
            }
        }
    };
};

for(let item of generator(5)) { /*Sử dụng vòng lặp for...of để lặp qua các giá trị được tạo ra bởi generator(5).
    Mỗi giá trị item sẽ được in ra bằng console.log("item:", item);.*/
    console.log("item:", item);
};

console.log('object:', generator(5));