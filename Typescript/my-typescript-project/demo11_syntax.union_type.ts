/**
 * * Union types
 */

const printObj = ( obj : number | string ) : void => { // obj là number hoặc stirng , void là hàm không trả về giá trị nào 
    if ( typeof obj === 'string')
        console.log( obj.toUpperCase() )
    else
        console.log(obj)
}

printObj(100)
printObj('Hello world')


//? compare Array[string] with String (so sánh mảng string với string)

const getName = (name : string[] | string) :void => {
    if(Array.isArray(name))
        console.log(`Name is array sting : ${name}`)
    else
    console.log(`Name : ${name} `)
}

getName(['hello', 'World', 'Petter','Marry'])
getName('TAK')