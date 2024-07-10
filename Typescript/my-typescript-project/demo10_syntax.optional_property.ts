/**
 * * Optional properties (thuộc tính tùy chọn)
 */

const caculate = (a : number, b? : number) : void => { //b? tham số b có thể là number hoặc không bắt buộc
    console.log('A: ',a)
    if(b !== undefined) // nếu b không phải undefined thì in ra b
        console.log('B: ',b)
}

caculate(10, 20)
caculate(10)