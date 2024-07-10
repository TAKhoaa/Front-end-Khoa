/**
 * * never - is return type of Exception function (return or not return) //là kiểu trả về của hàm Ngoại lệ (trả về hoặc không trả về)
 */
var show_error = function (message) {
    throw new Error(message);
};
var caculate = function () {
    try {
        show_error('Something is failed');
    }
    catch (e) {
        console.error(e);
    }
};
caculate();
