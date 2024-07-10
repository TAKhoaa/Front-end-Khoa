/**
 * * never - is return type of Exception function (return or not return) //là kiểu trả về của hàm Ngoại lệ (trả về hoặc không trả về)
 */
/*Hàm show_error nhận một chuỗi message làm tham số và ném ra một
 ngoại lệ (exception) với thông báo lỗi này. Kiểu trả về never 
 cho biết hàm này sẽ không bao giờ trả về giá trị nào (vì nó luôn
  ném ra ngoại lệ).*/
const show_error = (message : string) : never => {
    throw new Error(message)
}

const caculate = () => {
    try{
        show_error('Something is failed')
    } catch (e) {
        console.error(e)
    }
}

caculate()