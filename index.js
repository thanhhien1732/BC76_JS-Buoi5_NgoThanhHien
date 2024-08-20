// Bài 1: Tính tiền lương nhân viên
let tienLuong1Ngay = 100000
document.querySelector(".tienLuong").onclick = function () {
    let ngayLam = document.getElementById("soNgayLam").value * 1
    let tienLuong = 0
    // Công thức
    tienLuong = tienLuong1Ngay * ngayLam
    // Đổi dữ liệu sang tiền tệ 
    let tienTe = tienLuong.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    })
    // Đưa dữ liệu lên giao diện
    document.querySelector(".kqTienLuong").innerHTML = `Số tiền lương của bạn là: ${tienTe}`
}

// Ngăn người dùng nhập giá trị âm (-) trực tiếp vào ô input
document.getElementById('soNgayLam').addEventListener('keydown', function (e) {
    if (e.key === '-' || e.key === 'e') {
        e.preventDefault();
    }
})


// Bài 2: Tính giá trị trung bình
document.querySelector(".soTB").onclick = function () {
    let soThu1 = document.getElementById("soThu1").value * 1
    let soThu2 = document.getElementById("soThu2").value * 1
    let soThu3 = document.getElementById("soThu3").value * 1
    let soThu4 = document.getElementById("soThu4").value * 1
    let soThu5 = document.getElementById("soThu5").value * 1
    let soTB = 0
    // Công thức
    soTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5
    // Đưa dữ liệu lên giao diện
    document.querySelector(".kqTrungBinh").innerHTML = `Giá trị trung bình của ${soThu1}, ${soThu2}, ${soThu3}, ${soThu4} và ${soThu5} là: ${soTB}`
}


// Bài 3: Quy đổi tiền
let giaUSD = 23500
document.querySelector(".tienVND").onclick = function () {
    let tienUSD = document.getElementById("soTienUSD").value * 1
    let tienVND = 0
    // Công thức
    tienVND = tienUSD * giaUSD
    // Đổi dữ liệu sang tiền tệ 
    let tienTe = tienVND.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    })
    // Đưa dữ liệu lên giao diện
    document.querySelector(".kqTienVND").innerHTML = `${tienUSD} USD quy đổi được ${tienTe}`
}

// Ngăn người dùng nhập giá trị âm (-) trực tiếp vào ô input
document.getElementById('soTienUSD').addEventListener('keydown', function (e) {
    if (e.key === '-' || e.key === 'e') {
        e.preventDefault();
    }
})


// Bài 4: Tính diện tích, chu vi hình chữ nhật
document.querySelector(".tinh").onclick = function () {
    let chieuDai = document.getElementById("chieuDai").value * 1
    let chieuRong = document.getElementById("chieuRong").value * 1
    let dienTich = 0
    let chuVi = 0
    // Công thức
    dienTich = chieuDai * chieuRong
    chuVi = (chieuDai + chieuRong) * 2
    // Đưa dữ liệu lên giao diện
    document.querySelector(".kqHinhChuNhat").innerHTML = `Hình chữ nhật có chiều dài = ${chieuDai} cm và chiều rộng = ${chieuRong} cm <br> 
    Diện tích = ${dienTich} cm, Chu vi = ${chuVi} cm`
}

// Ngăn người dùng nhập giá trị âm (-) trực tiếp vào ô input
document.getElementById('chieuDai').addEventListener('keydown', function (e) {
    if (e.key === '-' || e.key === 'e') {
        e.preventDefault();
    }
})

document.getElementById('chieuRong').addEventListener('keydown', function (e) {
    if (e.key === '-' || e.key === 'e') {
        e.preventDefault();
    }
})


// Bài 5: Tính tổng 2 ký số
document.querySelector(".tong").onclick = function () {
    let so2ChuSo = document.getElementById("so2ChuSo").value * 1
    let soHangChuc = Math.floor(so2ChuSo / 10)
    let soHangDV = so2ChuSo % 10
    let tong = 0
    // Công thức
    tong = soHangChuc + soHangDV
    // Kiểm tra nếu giá trị không phải là số có đúng 2 chữ số
    if (!so2ChuSo || so2ChuSo < 10 || so2ChuSo > 99) {
        document.querySelector(".kqTong").innerHTML = "Vui lòng nhập một số có 2 chữ số!"
        return
    }
    // Đưa dữ liệu lên giao diện
    document.querySelector(".kqTong").innerHTML = `Tổng là: ${soHangChuc} + ${soHangDV} = ${tong}`
}

// Ngăn người dùng nhập giá trị âm (-) trực tiếp vào ô input
document.getElementById('so2ChuSo').addEventListener('keydown', function (e) {
    if (e.key === '-' || e.key === 'e') {
        e.preventDefault();
    }
})

// Ngăn người dùng nhập giá trị không hợp lệ
document.getElementById('so2ChuSo').addEventListener('input', function (e) {
    let value = e.target.value;
    // Loại bỏ số thập phân và giới hạn chỉ nhập 2 chữ số
    if (value.includes('.') || value.length > 2) {
        e.target.value = value.replace(/[^0-9]/g, '').slice(0, 2);
    }
});