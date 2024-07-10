/**
 * * Type assertion
 */
var str_value = '4.2'; // unknown có thể chứa bất cứ giá trị nào nhưng cần phải cần kiểm tra dữ liệu trước khi sử dụng (4.2 là string)
console.log(str_value, typeof (str_value));
var value = parseFloat(str_value); // chuyển đổi kiều 'str_value' sang number (float là số thực)
console.log(value, typeof (value));
