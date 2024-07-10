/**
 * * Type assertion
 */

let str_value  : unknown =  '4.2'// unknown có thể chứa bất cứ giá trị nào nhưng cần phải cần kiểm tra dữ liệu trước khi sử dụng (4.2 là string)
console.log(str_value, typeof(str_value))

let value  : number = parseFloat(str_value as string) // chuyển đổi kiều 'str_value' sang number (float là số thực)
console.log(value, typeof(value))
