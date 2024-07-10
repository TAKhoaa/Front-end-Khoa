/**
 * * Define Object (JSON) with simple method (* Xác định đối tượng (JSON) bằng phương pháp đơn giản)
 */

console.clear(); 

//? Shorthand assignment (bài tập viết tắt)
let a = 3; 
let a_object = {a};
console.log(a_object);

let b = 4; 
let b_object = {b : b};
console.log(b_object);

//? Method definition (định nghĩa phương thức)
let obj = {
    value : 5,
    double() {
        return this.value * 2; 
    }, 
    square : () => {
        return this.value * this.value;
    }, 
    triple : () => {
        return obj.value * 3;      // Cannot call this.value 
    }
};

console.log(obj);
console.log("Value of object: ", obj.value);
console.log("Value of object called by method: ", obj.double());
console.log("Value of object called by Square method: ", obj.square());
console.log("Value of object called by Triple method: ", obj.triple());

//? Computed properties
let value = 100; 
let pro = {
    ['product' + value] : 'Number of Product is ' + value,
    ['method_' + value](x) {
        return value + x;
    }
};

console.log(pro);
console.log(pro.method_100(50)); /*Gọi phương thức method_100 với tham số 50.
Phương thức này trả về tổng của value (100) và 50, kết quả là 150.*/ 

//? Symbol ~ is immutable and unique (~ là bất biến và duy nhất)
let s1 = Symbol('Symbol 01'); //Symbol là một kiểu dữ liệu nguyên thủy trong JavaScript, đại diện cho một giá trị duy nhất và không thể thay đổi.
let s2 = Symbol('Symbol 02'); //s1 và s2 là hai Symbol khác nhau, mặc dù chúng có mô tả giống nhau ('Symbol 01' và 'Symbol 02').

console.log('s1 == s2', s1 == s2);
console.log('s1 === s2', s1 === s2);//s1 === s2 sẽ là false vì mỗi Symbol là duy nhất.

let o = {
    [Symbol('id')] : 5, //Thuộc tính Symbol được định nghĩa bằng cách sử dụng [], giúp tạo ra một thuộc tính duy nhất.
    data : 100
};

console.log(o);
console.log(Object.getOwnPropertyNames(o)); //Object.getOwnPropertyNames(o) trả về một mảng các thuộc tính không phải là Symbol. Kết quả chỉ bao gồm 'data'.
let str = JSON.stringify(o);        // convert object to String // JSON.stringify(o) chuyển đổi đối tượng o thành một chuỗi JSON. Thuộc tính Symbol sẽ không được bao gồm trong chuỗi JSON.
console.log("String:", str);
let jsonObject = JSON.parse(str);   // convert string to object json //JSON.parse(str) chuyển đổi chuỗi JSON trở lại thành đối tượng JSON. Kết quả đối tượng sẽ chỉ có thuộc tính data mà không có thuộc tính Symbol.
console.log("Object JSON:", jsonObject);
console.log(Object.getOwnPropertyNames(o));

//? Object destructuring (phá hủy obj)
var user = {
    id : 1,
    name : "Mary", 
    city : "Tokyo", 
    role : "Admin"
};

console.log("Object user: ", user); 

var {id, name, city, role} = user; 

console.log("id:", id); 
console.log("name:", name);
console.log("city:", city); 
console.log("role:", role);

//? Lock OBJECT (khóa obj)
console.log("--- LOCK OBJECT ---");
let pObject = {
    id: 1, 
    name: "Product", 
    location: {
        long: 1.25,
        lat: 2.45
    },
    description: "Note something"
};
console.log("Product is", pObject);

//! add new COLOR property for object (thêm mới color cho đối tượng)
pObject.color = Math.round(Math.random() * 100); /*Math.random() tạo ra một số ngẫu nhiên giữa 0 (bao gồm) và 1 (không bao gồm).
Nhân số ngẫu nhiên này với 100 để tạo ra một số ngẫu nhiên giữa 0 và 100.
Math.round() làm tròn số này đến số nguyên gần nhất.*/
console.log("Product is added color Property", pObject);

//! update value of property (cập nhật giá trị của thuộc tính)
pObject.name = "Person";
console.log("Product name is update", pObject);

//! remove property of object (loại bỏ thuộc tính của đối tượng)
delete pObject.description;
console.log("Description property is deleted", pObject);

//! SEAL is lock object, cannot add or delete property of Object (SEAL là đối tượng khóa không thể thêm bớt thuộc tính)
console.log(pObject);

Object.seal(pObject);

console.log("After Object.seal(), cannot add or delete property");
pObject.size = [200, 300];
console.log(pObject);

delete pObject.color;
console.log(pObject);

console.log("Object can be change value"); // có thể thay đổi giá trị
pObject.id = 2;
pObject.location.height = 1000;
console.log(pObject);

//! FREEZE is lock all value and property of object (FREEZE là khóa tất cả giá trị và thuộc tính của đối tượng)
Object.freeze(pObject);

console.log("After Object.freeze(), cannot change value of object");
pObject.id = 1;
console.log(pObject);

pObject.size = [200, 300];
console.log(pObject);

delete pObject.color;
console.log(pObject);

console.log("But object can changed value of sub-object"); // đối tượng có thể thay đổi giá trị của đối tượng phụ
delete pObject.location.height;
console.log(pObject);

pObject.location.long = 99.65;
console.log(pObject);