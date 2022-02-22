
// if (true) {
//     console("if else chỉ quan tâm đúng và sai");
// }else{
//     console.log("là sai")
// }

/**
 rightnow take a change
 */
var fName = "Vmax Martis" ;
var age = 22 ;
// alert(fName );
// alert (age);
console.log("Đây là dòng note");
console.warn(age);
console.error(age);
/**
 * hàm thông báo
 */
prompt("Đây là hàm thông báo nhập nội dung Nhập số tuổi của bạn ?") // thông báo nhập
confirm(" Đây là hàm thông báo xác nhận Bạn đã đủ 18 tuổi ?"); //thông báo xác nhận
alert(fName );
alert (age); //hiện thông báo

//chạy đoạn code sau 1 thời gian
setTimeout(function() {
alert("Thông báo hiện ra sau 1.8s")
}, 1800 ) ;


//chạy đoạn code sau 1 thời gian và lặp đi lặp lại
// setInterval(function() {
//     console.log("Thông báo hiện ra sau 0.9s " + Math.random(1-9));
//     alert("Thông báo hiện ra và lặp lại liên tạc sau thời gian đã setup :)")
//     }, 900 ) ;
   
    
//gán biến     
var vm = 'Vmax';
var x = 9;
var y = x + 9 ;

alert(x+y); 

if(x<y){
    alert("X nhỏ hơn Y");//toám tư so sánh 
};

if (x>1 && y>1) {
    alert(" Toán tử logic  ");
    
}
// +	phép cộng	25 + 5 = 30
// -	phép trừ	10 - 5 = 5
// *	phép nhân	2*3 = 6
// /	phép chia	20 / 2 = 10
// %	lấy phần dư của phép chia	56 / 3 = 2
// ++	Tăng thêm 1	var a = 10; a ++; //giá trị a là 11
// --


// Toán tử	Ví dụ	Ý nghĩa
// =	x = y	gán y vào x
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y

//TOÁN TỬ LOGIC
// &&	phép và trả về true nếu 2 số hạng là true: a && b
// ||	phép hoặc trả về true nếu 1 trong 2 số hạng là true : a || b
// !	phủ định; trả về giá trị ngược với biểu thức !a

console.log(fName + " dây là toán tử chuỗi nối tên và tuổi " + age) // đây là nối chuỗi
var nameT = "vmax martis"
nameT = nameT + " 55 Ngo May"
console.log(nameT + " dây là toán tử chuỗi nối tên và tuổi " + age) // đây là nối chuỗi
if (x>y & y>0) {
    console.log("so sánh đúng")
}else(
    console.log("so sánh sai")
)

//KIỂU DỮ LIỆU

// Kiểu dữ liệu trong javascript là gì ?
// Number :
// String:
// Boolean(kiểu logic)
// Null:
// Underfined:
// Object:
var function1 = function(){
    console.log("Kiểu function");
}
function1();

/**
 * boolean
 */
 var a = 2;
 var b = 4;
 var isSuccess = a > b; // trả về kết quả true hay false
 console.log(isSuccess);
 /**
  * if else
  * 
  * '' hoặc "" hoặc `` (chuỗi rỗng)
 0 hoặc -0 (số 0)
 null
 undefined
 NaN
 false   
 
 
 các giá trị này đều là TRUE
  */
//opject
 var myOj ={
     nameTh = "Đinh Thiên Thoại" ,
     ageT = 22 ,
     myFs = function() {
         alert(nameT + " " + ageT);
         
     }

 }

 //array
 var myArray = [
    "1",
    "hai ",
    'ba'

 ]