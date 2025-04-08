// console.log("Hello World 123")

// part 3 : number, string, boolean
//3.1 Kiểu Number
// let a : number = 10;
// let b = 20; // khi gán cho b => tự hiểu là number mà không cần ghi giống như khai báo bên trên

// // a = "Hello"; Lỗi khong thể chuyẻn đổi kiểu dữ liệu
// a = 100; // không lỗi 
// console.log(a);
// console.log(b);

//3.2 Kiểu String 
// let fullName :String = "Nguyen Khac Minh"
// // fullName = 10; Lỗi

// console.log(fullName)
// //3.2 Kiểu Boolean
// let deleted : Boolean = false;
// deleted = true;
// // deleted = "true" // Lỗi
// console.log(deleted)


// 4. Kiểu Object
// const User = {
//     fullName : "Nguyen Khac Minh",
//     email : "minhkhac1002@gmail.com",
//     age : 18,
//     social : {
//         zalo: "zalo.me/012345",
//         facebook : "facebook/minhnguyen"
//     }
// }

// 55. Interface : Mục đích để tạo ra 1 cái khung chung 
// interface User {
//     fullName: string,
//     email: string,
//     age?: number,
//     social?: {
//         zalo?: string,
//         facebook?: string
//     }
// } 


// const user1: User = {
//     fullName : "Nguyen Khac Minh",
//     email : "minhkhac1002@gmail.com",
//     age : 18,
//     social : {
//         zalo: "zalo.me/012345",
//         facebook : "facebook/minhnguyen"
//     }
// }

// const user2: User = {
//     fullName : "Nguyen Khac Quang Anh",
//     email : "quanganh@gmail.com",
//     social : {
//         zalo: "zalo.me/0123457",
//     }
// }

// // user.age = "20"; // lỗi

// console.log(user1)
// console.log(user2)


// 6: Extend Interface
// interface Account {
//     fullName : string,
//     email : string,
//     password : string,
//     phone : string
// }

// interface AccountAdmin extends Account {
//     roleId : string,
//     hotline? : string
// }

// interface AccountUser extends Account {
//     scored : number,
//     cardId : string
// }

// const admin: AccountAdmin = {
//     fullName : "Le Van A",
//     email : "levana@gmail.com",
//     password : "123456",
//     phone : "0987654321",
//     roleId : "Abc",
// }

// const user: AccountUser = {
//     fullName : "Le Van B",
//     email : "levanb@gmail.com",
//     password : "123456",
//     phone : "0123456789",
//     scored : 90,
//     cardId : "123456"
// }

// console.log(user);
// console.log(admin)


// 7. Array
// Ví dụ 1
// const array: number[] = [];
// array.push(1);
// array.push(2);
// array.push(3);
// console.log(array)

// Ví dụ 2
// const names: string[] = [];
// names.push("Minh")
// names.push("Minh 1")
// names.push("Minh 2")
// console.log(names)


// Ví dụ 3
// const array2: (number | string)[] = []; // đa dạng dữ liệu truyền vào
// array2.push("Minh");
// array2.push(2);

// console.log(array2) 


// Ví dụ 4
// const number = [1, 2, 3, 4];
// number.push(4);
// // number.push("5"); // Error 
// // ts tự có thể suy luận được suy luận được kiểu giá trị dữ liệu của bảng 
// console.log(number);

// Ví dụ 5
// const array3 = [1, "Minh", 2];
// array3.push(4);
// array3.push("Minh 2");
// // array3.push(true); // Error : vì ban đầu khi định nghĩa mảng không có kiểu boolean


// Ví dụ 6
// const users: User[] = [];
// interface User {
//     readonly fullName : string,
//     email : string,
//     password : string,
//     phone?: string
// }

// const user1: User = {
//     fullName : "Minh Nguyen",
//     email : "minhnguyen@gmail.com",
//     password : "123456"
// }

// const user2: User = {
//     fullName : "Minh Nguyen2",
//     email : "minhnguyen2@gmail.com",
//     password : "123456"
// }
// users.push(user1);
// users.push(user2);

// console.log(users)       


// 8. Kiểu tuple
// Là array nhưng được khai báo trước chiều dài mảng và kiểu dữ liệu cho từng vị trí trong mảng
// Kiểu dữ liệu trong mảng có thể khác nhau

// let ourTuple : readonly [number, string, boolean];
// ourTuple = [10, "Minh", true];
// // ourTuple = [true, "Minh", 10]; // Không đúng vị trí => Lỗi
// // ourTuple = [true, "Minh", 10, "Minh nguyen"]; // Khi khởi tạo lần đầu => phải đúng và đủ như khai báo

// // ourTuple.push("Minh Nguyen"); // được push thêm => nếu không muốn push thì để tuple là readonly

// const graph : [x: number, y: number ] = [10, 20];
// const [x, y] = graph;
// console.log(x);
// console.log(y)


// const infoUser : [name: string, email: string] = ["Minh Nguyen", "minhnguyen@gmail.com"]
// const [fullName, email] = infoUser
// console.log(fullName)
// console.log(email)

// 9.Readonly
// interface User {
//     readonly fullName: string,
//     email : string,
//     phone : string
// }

// const user: User = {
//     fullName: "Nguyen Khac Minh",
//     email : "minhkhac1002@gmail.com",
//     phone : "09887654321"
// }

// // user.fullName = "Nguyen Van A"; // Khong the thay doi thuoc tinh
// console.log(user.fullName)


// 10. Functions
// // Declaration functions
// function sum(a: number, b: number): number{
//     return a + b;
// }

// const sum1 = sum(10, 2);
// console.log(sum1)

// // Expresstion function
// const sum2 = function(a: number, b:number): number {
//     return a + b;
// }
// const resutl2 = sum2(20, 40);
// console.log(resutl2)

// // Arrow function
// const sum3 = (a: number, b: number): number => {
//     return a + b;
// }
// console.log(sum3(10, 21));




// 11. Default Parameters
// Tham số mặc định
// const sum3 = (a: number = 10, b: number= 20): number => {
//     return a + b;
// }
// console.log(sum3())



// 12. Rest Parameters
// const sum = (...numbers) => {
//     const total = numbers.reduce((sum, number) => number + sum, 0)
//     return total
// }
// const resutl = sum(10, 20, 30, 40, 50);
// console.log(resutl)




// 13. Enum
// enum Status {
//     INITIAL = "initial",
//     DOING = "doing",
//     FINISH = "finish"
// }

// let statusCurrent: string = "initial";
// console.log(statusCurrent)

// switch (statusCurrent) {
//     case Status.INITIAL:
//         console.log("INITIAL")
//         break;
//     case Status.DOING:
//         console.log("DOING")
//         break;
//     case Status.FINISH:
//         console.log("FINISH")
//         break;

//     default:
//         break;
// }

// // Ví dụ 2 : có gán giá trị cho enum
// enum Status {
//     INITIAL,
//     DOING,
//     FINISH
// }

// let statusCurrent: number = 0;
// console.log(statusCurrent)

// switch (statusCurrent) {
//     case Status.INITIAL:
//         console.log("INITIAL")
//         break;
//     case Status.DOING:
//         console.log("DOING")
//         break;
//     case Status.FINISH:
//         console.log("FINISH")
//         break;

//     default:
//         break;
// }




// // 14. Kiểu Any : Giúp thay đổi linh hoạt kiểu dữ liệu của 1 biến 
// let a: any = 20;
// console.log(a);

// a = "Minh Nguyen";
// console.log(a);

// a= {
//     fullName : "Minh Nguyen",
//     age : 21
// }
// console.log(a)



// 15. Kiểu Unknow
// giống với any
    // let a: unknown = "Minh";
    // console.log(a);

    // a = 10;
    // console.log(a)

// Nếu để là any => Không an toàn : Vì không kiểm tra trước kiểu dữ liệu
// const getLength = (value: any): number => {
//     return value.length;
// }

// const length1 = getLength("Minh");
// console.log(length1)

// const length2 = getLength(42);
// console.log(length2)

// const length3 = getLength(true);
// console.log(length3)


// Nếu để là unknow : Sẽ kiểm tra kiểu dữ liệu trước khi thực kiện hàm => an toàn hơn any
// const getLength = (value: unknown): number => {
//     if(typeof value == "string"){
//         return value.length;
//     }else{
//         return -1;
//     }
// }

// const length1 = getLength("Minh");
// console.log(length1)

// const length2 = getLength(42);
// console.log(length2)

// const length3 = getLength(true);
// console.log(length3)

// Sự khác nhau giữa any và unknown : 
    // unknown an toàn hơn any 
    // unknown kiểm tra kiểu dữ liệu trước khi vào hàm còn any thì không