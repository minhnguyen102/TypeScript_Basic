// 1. Kiểu void : Hàm không trả về giá trị nào cả
// const printName = (name: string) : void => {
//     console.log(`Hello ${name}`)
// }

// printName("Minh")


// 2. Generics
    // // Vd1
    // const getValue = <T>(value: T): T => {
    //     return value
    // }

    // const getNumber = getValue(10);
    // console.log(getNumber)

    // const getString = getValue("Hello");
    // console.log(getString)

    // // Vd2
    // const reverseArray = <A>(array :A[]): A[] => {
    //     const newArray = array.reverse();
    //     return newArray;
    // }

    // const arrayString = reverseArray(["A", "B", "C"]);
    // console.log(arrayString);
    // const arrayNumber = reverseArray([1, 2, 3]);
    // console.log(arrayNumber)



// 3. Union Types :  used when a value can be more than a single type.
// const printStatusCode = (code : string | number) => {
//     console.log(`My status code is ${code}`);
// }
// printStatusCode(404);
// printStatusCode('404')



// 4. Type alias
// type statusCode = string | number

// const printStatusCode = (code : statusCode) => {
//     console.log(`My status code is ${code}`);
// }
// printStatusCode(404);
// printStatusCode('404')



// 5. intersection : Nhóm 2 hoặc nhiều interface 
// interface Account {
//     fullName : string,
//     email : string,
//     hotline? : string
// }
// interface Contact {
//     phone: string,
//     address?: string
// }

// interface Social {
//     zalo?: string,
//     facebook: string,
//     tiktok?: string
// }

// type AccountContact = Account & Contact;
// type AccountDetail = Account & Contact & Social;

// const user: AccountContact = {
//     fullName : "Nguyen Khac Minh",
//     email : "minhnguyen@gmail.com",
//     phone : "0987654321"
// }

// const user2: AccountDetail = {
//     fullName : "Nguyen Khac Minh",
//     email : "minhnguyen@gmail.com",
//     phone : "0987654321",
//     facebook : "facebook/minhnguyen.102"
// }


// 6. Declaration merging (Hợp 2 interface trùng tên thành 1)
// interface User {
//     readonly id: string,
//     fullName: string
// }

// interface User {
//     email: string,
//     phone?: string
// }

// // => Khi đặt 2 interface cùng tên nhau => Hệ thống tự động gộp 2 interface thành 1
// const user2: User = {
//     id : "abcskhjasd",
//     fullName : "Nguyen Khac Minh",
//     email: "minhnguyen@gmail.com"
// }


// 7.Utility Types
    // 7.1.Partial : Chuyển tất cả các thuộc tính trong object thành optional(?)
        // interface Product {
        //     readonly id: string,
        //     title: string,
        //     price: number,
        //     description?: string,
        //     discount?: number
        //     voucher?: string
        // }

        // const product1: Product = {
        //     id : "1",
        //     title : "san pham 1",
        //     price : 100000
        // }

        // const product2: Partial<Product> = {
        //     id : "2",
        //     title : "san pham 2"
        //     // không cần nhập price
        // }

    // 7.2.Required : chuyển mọi thuộc tính trong object thành bắt buộc (ngược lại với partial)
        // interface Product {
        //     readonly id: string,
        //     title: string,
        //     price: number,
        //     description?: string,
        //     discount?: number
        //     voucher?: string
        // }

        // const product1: Product = {
        //     id : "1",
        //     title : "san pham 1",
        //     price : 100000
        // }

        // const product2: Required<Product> = {
        //     id : "2",
        //     title : "san pham 2",
        //     price : 100000,
        //     description : "Mô tả sản phẩm 2",
        //     discount : 10,
        //     voucher : "Gift 1"
        // }


    // 7.3.Omit : xóa thuộc tính trong object
        // interface Product {
        //     readonly id: string,
        //     title: string,
        //     price: number,
        //     description?: string,
        //     discount?: number
        //     voucher?: string
        // }

        // const product1: Product = {
        //     id : "1",
        //     title : "san pham 1",
        //     price : 100000
        // }

        // const product2: Omit<Product, "discount"> = { // không cho nhập discount
        //     id : "2",
        //     title : "san pham 2",
        //     price : 100000,
        //     description : "Mô tả sản phẩm 2",
        //     voucher : "Gift 1"
        // }

        // const product3: Omit<Product, "discount" | "voucher"> = { // không cho nhập discount và voucher
        //     id : "3",
        //     title : "san pham 3",
        //     price : 100000,
        //     description : "Mô tả sản phẩm 3",
        // }

    // 7.4.Pick : Xóa tất cả các thuộc tính trong object, chỉ giữa lại những thuộc tính được pick
        // interface Product {
        //     readonly id: string,
        //     title: string,
        //     price: number,
        //     description?: string,
        //     discount?: number
        //     voucher?: string
        // }

        // const product1: Product = {
        //     id : "1",
        //     title : "san pham 1",
        //     price : 100000
        // }

        // const product2: Pick<Product, "id" | "title"> = { // chỉ được nhập id và title
        //     id : "2",
        //     title : "san pham 2",
        // }

    // 7.5.Readonly
        interface Product {
            readonly id: string,
            title: string,
            price: number,
            description?: string,
            discount?: number
            voucher?: string
        }

        const product1: Readonly<Product> = {
            id : "1",
            title : "san pham 1",
            price : 100000
        }

        // product1.title = "san pham test" //  Lỗi