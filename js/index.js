// BÀI TẬP 1 
// MÔ HÌNH 3 LỚP
// KHỐI 1: INPUT

/*
LƯƠNG 1 NGÀY = 100000
SỐ NGÀY LÀM 
LƯƠNG = LƯƠNG 1 NGÀY * SỐ NGÀY LÀM
*/

// KHỐI 2 : CÁC BƯỚC XỬ LÍ

/* 
BƯỚC 1: TẠO BIẾN DAY, SALARY1DAY, SALARY
BƯỚC 2: GÁN GIÁ TRỊ CHO BIẾN DAY, SALARY1DAY
BƯỚC 3: TÍNH SALARY
BƯỚC 4: IN KẾT QUẢ RA MÀN HÌNH
*/

// KHỐI 3: OUTPUT

/*
LƯƠNG 1 NGÀY
SỐ NGÀY LÀM
LƯƠNG
*/

document.getElementById('btnluong').onclick = function(){
    var luong1h = document.getElementById('tienluong1h').value;
    var songay = document.getElementById('songaylam').value;
    var luong = 0;
    luong = luong1h * songay;
    document.getElementById('luong').innerHTML = luong;
}

// BÀI TẬP 2
// MÔ HÌNH 3 LỚP
// KHỐI 1: INPUT

/*
NHẬP VÀO 5 SỐ THỰC
GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ THỰC
*/

// KHỐI 2 : CÁC BƯỚC XỬ LÍ

/* 
BƯỚC 1: TẠO BIẾN A,B,C,D,E,sumTB
BƯỚC 2: GÁN GIÁ TRỊ CHO BIẾN A,B,C,D,E
BƯỚC 3: TÍNH sumTB
BƯỚC 4: IN KẾT QUẢ sumTB RA MÀN HÌNH
*/

// KHỐI 3: OUTPUT

/*
GIÁ TRỊ TB CỦA 5 SỐ THỰC
*/

document.getElementById('btndtb').onclick = function(){
    var sot1 = Number(document.getElementById('so1').value);
    var sot2 = Number(document.getElementById('so2').value);
    var sot3 = Number(document.getElementById('so3').value);
    var sot4 = Number(document.getElementById('so4').value);
    var sot5 = Number(document.getElementById('so5').value);
    var sum = '';
    sum =(sot1 + sot2 + sot3 + sot4 + sot5) /5;
    document.getElementById('ketqua').innerHTML = sum;
}

// BÀI TẬP 3
// MÔ HÌNH 3 LỚP
// KHỐI 1: INPUT

/*
USD = 23500 VND
SỐ USD CHUYỂN SANG NVD
*/

// KHỐI 2 : CÁC BƯỚC XỬ LÍ

/* 
BƯỚC 1: TẠO BIẾN USD, VND, sotien
BƯỚC 2: GÁN GIÁ TRỊ CHO BIẾN USD, VND
BƯỚC 3: TÍNH sotien
BƯỚC 4: IN KẾT QUẢ sotien RA MÀN HÌNH
*/

// KHỐI 3: OUTPUT

/*
GIÁ TRỊ sotien SAU QUY ĐỔI
*/

document.getElementById('btnquydoi').onclick = function(){
    const tienusd = 23500;
    var sotien = Number(document.getElementById('usd').value);
    var tongtien = 0;
    tongtien = new Intl.NumberFormat('vn-VN').format(tienusd*sotien);
    document.getElementById('tong').innerHTML = tongtien;
}   

// BÀI TẬP 4
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    CHIỀU DÀI
    CHIỀU RỘNG 
*/

// Khối 2: CÁC BƯỚC XỬ LÍ
/*
    B1: TẠO BIẾN chieudai, chieurong, CV, S
    B2: GÁN GIÁ TRỊ CHO BIẾN chieudai, chieurong
    B3: TÍNH CV
    B4: TÍNH S
    B5: IN KẾT QUẢ CV, S RA MÀN HÌNH
*/

// Khối 3: OUTPUT
/*
    CHU VI
    DIỆN TÍCH
*/

document.getElementById('btntinh').onclick = function(){
    var cd = document.getElementById('chieudai').value;
    var cr = document.getElementById('chieurong').value;
    var cv = 0;
    var S = 0;
    cv = (cd + cr) *2;
    S = cd * cr;
    document.getElementById('dientich').innerHTML = 'Diện tích: ' + S;
    document.getElementById('chuvi').innerHTML = 'Chu vi: ' + cv;
}

// BÀI TẬP 5
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    1 SỐ CÓ 2 CHỮ SỐ
*/

// Khối 2: CÁC BƯỚC XỬ LÍ
/*
    B1: TẠO BIẾN SUM, SO
    B2: GÁN GIÁ TRỊ CHO BIẾN SO
    B3: TÍNH SUM
    B5: IN KẾT QUẢ SUM RA MÀN HÌNH
*/

// Khối 3: OUTPUT
/*
    SUM
*/

document.getElementById('btn2chuso').onclick = function(){
    var so = document.getElementById('so').value;
    var sum = 0;
    sum = so % 10 + Math.floor(so/10);
    document.getElementById('2chuso').innerHTML = sum;
}
