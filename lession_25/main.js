// các loại funtion

/**
 * Declara
 * Expression
 * Arrow
 */
 function declaraF() {
     console.log("Declara Function ")

    }
    declaraF();

    var expression = function () {
        console.log("Expression Function ")

    }; expression();
    
//OPJECT
var emailKey= "email"
    var myOj = {
        name: 'Vmax Martis',
        age: '22',
        adress:'Sunsise',
        [emailKey]:"vmaxmartis@gmail.com" ,
        getname: function () {
            return this.name;
            
        }
    };
console.log(myOj);
console.log(myOj.adress);
console.log(myOj.getname());



//XÂY DỰNG 1 KHUNG ĐỐI TƯỢNG

function userIF(fName, lName, avatar) {
    this.fName = fName;
    this.lName = lName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.lName} ${this.avatar}`;
    }
}
var user1 =  new userIF("Đinh", "Thiên", "Thoại"); //kế thừu 
var admin =  new userIF("Lê", "Thu", "Thảo"); //kế thừu 

userIF.prototype.dateL = "24/11"
//thêm được nhiều đối tượng user
user1.comment ="vãi xoài"
admin.title = "oke meck"
console.log(user1);
console.log(admin);


console.log(user1.dateL);
console.log(admin.getName());

//đối tượng date(ngày giờ)
var date = new Date();//oj

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();


console.log(`${this.day} / ${this.month} / ${this.year} `);

// CÂU LỆNH RẼ NHÁNH IF ELSE
    var date = 9;
    if (date === 8) {
        console.log("Hôm nay là ngày 8");

    }else if(date === 9){
        console.log("Hôm nay là ngày 9");        
    }else {
        console.log("Hôm nay là ngày 10");
    }

    switch (date) {
        case 7:
        console.log("Hôm nay là ngày 7"); 
            break;
        case 8:
        console.log("Hôm nay là ngày 8"); 
            break;
        case 9:
        console.log("Hôm nay là ngày 9"); 
            
        case 10:
        console.log("Hôm nay là ngày 10"); 
            break;  // BREAK LÀ NGĂN CHẶN KHỐI LỆNH LỌT XUỐNG DƯỚI
        case 11:
        console.log("Hôm nay là ngày 11"); 
            break;
        default:
            break;
    }
        var filter = {
            name: "Bộ lọc",
            value: 270
        }

        //TOÁN TỬ 3 NGÔI
        var result = filter.value >= 270 ? `${filter.value}  LAGER` : 'MINIUM';
        console.log(result); 

        //FOR LOOP
        for (var i=1; i<=9;){
            console.log("Đếm " + i)
            i++
        }
        

        var mang = [
            'Thoai',
            'Thuy',
            'The',
            'Thương',
            'pepsi',
            'kem',
        ]
        console.log(mang[3]); 
        //var doDaimang = mang.length;
        for (var i=0; i < mang.length;){
            console.log(mang[i]);
            i++
        }
 // FOR IN đk: oj mới sdung đc
 
for (const key in  myOj) {
    console.log(myOj[key]); 

}

var ten = "Vmax Martis"
for (const value of ten) {
    console.log(value); //phân tách từng giá trị trong oj
    
}
for (var value of Object.values(myOj)) {
    console.log(value); //phân tách từng giá trị trong oj
    
}

var a = 1;
while (a<mang.length) {
    console.log(mang[a]); 
    a++

}

do {
    a++
    console.log(a); 
    
} while (a<18);



var x=1;
for (let x = 0; x < 10; x++) {
    if (x%2 !== 0) {
        continue;
        
    };     console.log(x);  
}
        
// VÒNG LẶP LỒNG NHAU
var mang2 = [
    [1,2],
    [3,3],
    [3,4],
    [4,5],

]
for (var x = 0 ; x<mang2.length ;x++) {
    for(var y = 0; y<mang2[x].length ; y++){
        console.log(mang2[x][y]); 

    }
}

for (var v =100 ;  v>=0 ; v-=5 ) {
    console.log(v); 
}



var danhSach = [
    {
        id:1,
        nameV:'Thoại',
        point:900

    },
    {
        id:2,
        nameV:'Thuy',
        point:80

    },
    {
        id:3,
        nameV:'The',
        point:100

    },
    {
        id:4,
        nameV:'THương',
        point:0

    }
];
danhSach.forEach(function(danhsach, index){
    console.log(index, danhsach); 
}) //  DUYỆT QUA CÁC PHẦN TỬ CỦA MẢNG
var poinT = danhSach.every(function(danhsach, index){
    console.log(index);
    return danhsach.point > 0;
     
});
console.log(poinT); // DUYỆT QUA TOÀN BỘ MẢNG toàn bộ phải đúng


var poinT = danhSach.some(function(danhsach, index){
    console.log(index);
    return danhsach.point > 0;
     
});
console.log(poinT); //Chỉ cần 1 cái đúng là đúng

var poinT = danhSach.find(function(danhsach, index){
    return danhsach.nameV = "Thuy";
     
}); //TÌM KIẾM VÀ TRẢ VỀ 1 ĐỐI TƯỢNG
console.log(poinT);



var poinT = danhSach.filter(function(danhsach, index){
    // console.log(index);
    return danhsach.nameV === "Thoại";
     
});
console.log(poinT);// LỌC CÁC PHẦN TỬ CÓ GIÁ TRỊ THỎA MÃN

function duyet(danhsach){
    return{
        id: danhsach.id ,
        name: `Tên người dùng là : ${danhsach.nameV}` +
        `  có point: ${danhsach.point}`,

    }
}
var ketquaDuyet = danhSach.map(duyet);
console.log(ketquaDuyet); // DUYỆT QUA KẾT QUẢ TRẢ VỀ



//REDUCE
var t = 0;
function totalPoint(bienTichtru, currentValue, currentIndex, originArray){
t++;
total = bienTichtru + currentValue.point,
console.table({
    'lần duyệt thứ: ': t,
    "Biến lưu trữ": bienTichtru,
    "Điểm hiện tại": currentValue.point,
    "Tích trữ được":total
});
    return(total);
}

    var totalPoint = danhSach.reduce(totalPoint, 0);
    console.log(totalPoint);

    var totalPoint = danhSach.reduce((a, b) => a +b.point,0)
    console.log(totalPoint);

    var group = [
        {
            team: "team1",
            list:[
                {
                    id:1,
                    nameV:'Thoại',
                    point:900
            
                },
                {
                    id:2,
                    nameV:'Thuy',
                    point:80
            
                },
                {
                    id:3,
                    nameV:'The',
                    point:100
            
                },
                {
                    id:4,
                    nameV:'THương',
                    point:0
            
                }
            ]
            
        },
        {
            team: "team2",
            list:[
                {
                    id:1,
                    nameV:'ẢNh',
                    point:900
            
                },
                {
                    id:2,
                    nameV:'lập',
                    point:80
            
                },
                {
                    id:3,
                    nameV:'Hiệp',
                    point:100
            
                },
                {
                    id:4,
                    nameV:'Thoại',
                    point:0
            
                }
            ]
            
        }
    ];


    //làm phẳng mảng
    var mangHonhop = [1,2, [3,4],5,6,[7,8,9]];

    var mangPhang = mangHonhop.reduce(function(mangPhangkq, noidungmangHonhop){
            
    return mangPhangkq.concat(noidungmangHonhop);
    }, []);

    console.log(mangPhang);
    var newGroup = group.reduce(function(nowTeam, list) {
        return nowTeam .concat(list.list);
    }, []); console.log(newGroup);
 