/**
 * * Null vs Undefine type to TS
 */
var a = undefined;
var b = null;
console.log(a, typeof (a));
console.log(b, typeof (b));
//? null and undefine only assign for unknown type (null vs undefined chỉ gán được trong unknown)
var c = a;
console.log(c, typeof (c));
c = b;
console.log(c, typeof (c));
//! cannot assign null or undefine value for number or string (không thể gán null hoặc undefine vào number hoặc string)
// let d : number = null        // -> error
// let e : string = undefined   // -> error
