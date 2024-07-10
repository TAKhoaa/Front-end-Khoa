/** 
 * * Define Class in ES6
 */

console.clear();

//? Define base class (Parent Class)
class Parents{
    // Define attribute inside constructor(xác định thuộc tính bên trogn hàm)
    constructor(value = 'anonymous') {
        this.name = value;
    }

    get Name(){
        return this.name;
    }

    set Name(value) {
        this.name = value;
    }

    toString() {
        return `Name of Object is ${this.name}`;
    }

    static getType() {
        return 'Parent';
    }

}

//? Define Child class extends from Parents class (xác định lớp con kế thừa lớp cha)
class Child extends Parents {
    constructor() {
        super();                // call attribute or method of Parents (gọi thuộc tính hoặc phương thức parents)
        this.hight = 100;
    }

    toString() {
        return `${this.name} is tall ${this.hight}`;
    }

    static getType() {
        return "Child";
    }
}

let parents = new Parents();
parents.name = "Mary";
parents.Name = "Peter";
console.log(parents);
console.log(parents.toString());
console.log(Parents.getType());

let child = new Child();
console.log(child);
console.log(child.toString());
console.log(Child.getType());