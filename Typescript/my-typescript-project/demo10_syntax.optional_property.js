/**
 * * Optional properties (thuộc tính tùy chọn)
 */
var caculate = function (a, b) {
    console.log('A: ', a);
    if (b !== undefined)
        console.log('B: ', b);
};
caculate(10, 20);
caculate(10);
