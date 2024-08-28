// Bài 1: Quản lý tuyển sinh
// Kiểm tra xem thí sinh có môn nào bị điểm 0 hay không
function kiemTraDiem0(mon1, mon2, mon3) {
    return mon1 === 0 || mon2 === 0 || mon3 === 0;
}

// Tính điểm ưu tiên theo khu vực
function tinhDiemKhuVuc(khuVuc) {
    switch (khuVuc) {
        case 'A': return 2;
        case 'B': return 1;
        case 'C': return 0.5;
        default: return 0;
    }
}

// Tính điểm ưu tiên theo đối tượng
function tinhDiemDoiTuong(doiTuong) {
    switch (doiTuong) {
        case '1': return 2.5;
        case '2': return 1.5;
        case '3': return 1;
        default: return 0;
    }
}

// Tính tổng điểm của thí sinh bao gồm điểm 3 môn thi và điểm ưu tiên
function tinhTongDiem(mon1, mon2, mon3, khuVuc, doiTuong) {
    const diemKhuVuc = tinhDiemKhuVuc(khuVuc);
    const diemDoiTuong = tinhDiemDoiTuong(doiTuong);
    return mon1 + mon2 + mon3 + diemKhuVuc + diemDoiTuong;
}

// Đánh giá kết quả tuyển sinh dựa trên tổng điểm và điểm chuẩn
function ketQuaTuyenSinh(tongDiem, diemChuan) {
    if (tongDiem >= diemChuan) {
        return `Đậu. Tổng điểm đạt được: ${tongDiem.toFixed(2)}`;
    } else {
        return `Rớt. Tổng điểm đạt được: ${tongDiem.toFixed(2)}`;
    }
}

// Hiển thị kết quả tuyển sinh lên giao diện người dùng
function hienThiKetQuaTuyenSinh(message) {
    document.querySelector('.kqTuyenSinh').textContent = message;
}

// Xử lý khi người dùng nhấn nút tính kết quả
function xuLyTuyenSinh() {
    const diemChuan = parseFloat(document.getElementById('diemChuan').value);
    const mon1 = parseFloat(document.getElementById('mon1').value);
    const mon2 = parseFloat(document.getElementById('mon2').value);
    const mon3 = parseFloat(document.getElementById('mon3').value);
    const khuVuc = document.getElementById('khuVuc').value;
    const doiTuong = document.getElementById('doiTuong').value;

    // Kiểm tra dữ liệu đầu vào
    if (isNaN(diemChuan) || isNaN(mon1) || isNaN(mon2) || isNaN(mon3) || !khuVuc || !doiTuong) {
        hienThiKetQuaTuyenSinh("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Kiểm tra xem thí sinh có bị điểm 0 ở bất kỳ môn nào không
    if (kiemTraDiem0(mon1, mon2, mon3)) {
        hienThiKetQuaTuyenSinh("Rớt. Có môn bị điểm 0.");
        return;
    }

    // Tính tổng điểm và kiểm tra kết quả tuyển sinh
    const tongDiem = tinhTongDiem(mon1, mon2, mon3, khuVuc, doiTuong);
    const message = ketQuaTuyenSinh(tongDiem, diemChuan);
    hienThiKetQuaTuyenSinh(message);
}

// Gắn sự kiện click cho nút "Kết quả" để xử lý khi người dùng nhấn vào
document.querySelector('.ketQua').addEventListener('click', xuLyTuyenSinh);

// Ngăn người dùng nhập giá trị âm hoặc ký tự không hợp lệ
function giaTriKhongHopLe(idInput) {
    const inputField = document.getElementById(idInput);

    // Ngăn người dùng nhập dấu trừ (-) hoặc ký tự 'e'
    inputField.addEventListener('keydown', function (e) {
        if (e.key === '-' || e.key === 'e') {
            e.preventDefault();
        }
    });

    // Đảm bảo giá trị chỉ nằm trong khoảng từ 0 đến 10 và cho phép số thập phân
    inputField.addEventListener('input', function (e) {
        let value = e.target.value;

        // Kiểm tra nếu giá trị không phải là số hợp lệ
        if (!/^\d*\.?\d*$/.test(value)) {
            e.target.value = value.replace(/[^0-9.]/g, '');
        }

        // Đảm bảo giá trị nằm trong khoảng 0 đến 10
        let numericValue = parseFloat(value);
        if (numericValue < 0 || numericValue > 10) {
            e.target.value = numericValue < 0 ? 0 : 10;
        }
    });
}

giaTriKhongHopLe('mon1');
giaTriKhongHopLe('mon2');
giaTriKhongHopLe('mon3');


// Bài 2: Tính tiền điện
function tinhTienDien(soKW) {
    let tienDien = 0;

    if (soKW > 350) {
        tienDien += (soKW - 350) * 1300;
        tienDien += 150 * 1100;
        tienDien += 100 * 850;
        tienDien += 50 * 650;
        tienDien += 50 * 500;
    } else if (soKW > 200) {
        tienDien += (soKW - 200) * 1100;
        tienDien += 100 * 850;
        tienDien += 50 * 650;
        tienDien += 50 * 500;
    } else if (soKW > 100) {
        tienDien += (soKW - 100) * 850;
        tienDien += 50 * 650;
        tienDien += 50 * 500;
    } else if (soKW > 50) {
        tienDien += (soKW - 50) * 650;
        tienDien += 50 * 500;
    } else {
        tienDien = soKW * 500;
    }

    return tienDien;
}

// Hàm xử lý hiển thị hóa đơn tiền điện khi người dùng nhập thông tin và nhấn nút
function hoaDonTienDien() {
    const hoTen = document.getElementById('hoTen').value;
    const soKW = parseFloat(document.getElementById('soKW').value);

    const tienDien = tinhTienDien(soKW);

    document.querySelector('.kqTienDien').textContent = `Khách hàng ${hoTen} phải trả ${tienDien.toLocaleString()} VND.`;
}

// Gán sự kiện khi người dùng nhấn nút tính tiền điện, sẽ gọi hàm hoaDonTienDien
document.querySelector('.soTienDien').addEventListener('click', hoaDonTienDien);


// Bài 3: Tính thuế thu nhập cá nhân
function tinhThuNhapChiuThue(thuNhapNam, soNguoiPhuThuoc) {
    const giamTruCoBan = 4e+6; // Giảm trừ cơ bản: 4 triệu VND
    const giamTruPhuThuoc = 1.6e+6; // Giảm trừ người phụ thuộc: 1.6 triệu VND/người
    return thuNhapNam - giamTruCoBan - soNguoiPhuThuoc * giamTruPhuThuoc;
}

// Hàm tính tiền thuế phải nộp dựa trên thu nhập chịu thuế và từng bậc thuế
function tinhTienThue(thuNhapChiuThue) {
    let thuePhaiNop = 0;

    if (thuNhapChiuThue > 960e+6) {
        thuePhaiNop += (thuNhapChiuThue - 960e+6) * 0.35;
        thuNhapChiuThue = 960e+6;
    }
    if (thuNhapChiuThue > 624e+6) {
        thuePhaiNop += (thuNhapChiuThue - 624e+6) * 0.30;
        thuNhapChiuThue = 624e+6;
    }
    if (thuNhapChiuThue > 384e+6) {
        thuePhaiNop += (thuNhapChiuThue - 384e+6) * 0.25;
        thuNhapChiuThue = 384e+6;
    }
    if (thuNhapChiuThue > 210e+6) {
        thuePhaiNop += (thuNhapChiuThue - 210e+6) * 0.20;
        thuNhapChiuThue = 210e+6;
    }
    if (thuNhapChiuThue > 120e+6) {
        thuePhaiNop += (thuNhapChiuThue - 120e+6) * 0.15;
        thuNhapChiuThue = 120e+6;
    }
    if (thuNhapChiuThue > 60e+6) {
        thuePhaiNop += (thuNhapChiuThue - 60e+6) * 0.10;
        thuNhapChiuThue = 60e+6;
    }
    if (thuNhapChiuThue > 0) {
        thuePhaiNop += thuNhapChiuThue * 0.05;
    }

    return thuePhaiNop;
}

// Hàm định dạng số tiền thành dạng tiền tệ VND
function dinhDangTien(tien) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return formatter.format(tien);
}

// Hàm chính để thực hiện tính toán và hiển thị kết quả
function tinhThueThuNhapCaNhan() {
    // Lấy thông tin từ người dùng
    const hoTen = document.getElementById('hoTenThue').value;
    const thuNhapNam = parseFloat(document.getElementById('thuNhapNam').value);
    const soNguoiPhuThuoc = parseInt(document.getElementById('nguoiPhuThuoc').value);

    // Tính thu nhập chịu thuế
    const thuNhapChiuThue = tinhThuNhapChiuThue(thuNhapNam, soNguoiPhuThuoc);

    // Tính tiền thuế
    const thuePhaiNop = tinhTienThue(thuNhapChiuThue);

    // Định dạng tiền thuế và hiển thị kết quả
    const thueThuan = dinhDangTien(thuePhaiNop);
    document.querySelector('.kqThue').innerText = `Họ tên: ${hoTen}, số thuế bạn phải nộp là: ${thueThuan}`;
}

// Gán sự kiện click cho nút "Tính tiền thuế"
document.querySelector('.tienThue').addEventListener('click', tinhThueThuNhapCaNhan);


// Bài 4: Tính tiền cáp
// Hàm xử lý thay đổi loại khách hàng, hiển thị hoặc ẩn ô nhập số kết nối
function thayDoiLoaiKhachHang() {
    const loaiKhachHang = document.getElementById('loaiKhachHang').value;
    const soKetNoiElement = document.getElementById('soKetNoi');
    const soKetNoiLabelElement = document.getElementById('soKetNoiLabel');

    if (loaiKhachHang === 'doanhNghiep') {
        soKetNoiLabelElement.style.display = 'block';
        soKetNoiElement.style.display = 'block';
    }
    else {
        soKetNoiLabelElement.style.display = 'none';
        soKetNoiElement.style.display = 'none';
    }
}

// Hàm tính tiền cáp cho nhà dân
function tinhTienCapNhaDan(soKenhCaoCap) {
    const phiXuLyHoaDon = 4.5;
    const phiDichVuCoBan = 20.5;
    const phiThueKenhCaoCap = soKenhCaoCap * 7.5;

    return phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
}

// Hàm tính tiền cáp cho doanh nghiệp
function tinhTienCapDoanhNghiep(soKenhCaoCap, soKetNoi) {
    const phiXuLyHoaDon = 15;
    let phiDichVuCoBan = 75;

    // Nếu số kết nối lớn hơn 10, tính thêm phí cho các kết nối bổ sung
    if (soKetNoi > 10) {
        phiDichVuCoBan += (soKetNoi - 10) * 5;
    }

    const phiThueKenhCaoCap = soKenhCaoCap * 50;
    return phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
}

// Hàm xử lý tính tiền cáp dựa trên loại khách hàng
function xuLyTinhTienCap() {
    const loaiKhachHang = document.getElementById('loaiKhachHang').value;
    const maKhachHang = document.getElementById('maKhachHang').value;
    const soKenhCaoCap = parseInt(document.getElementById('soKenhCaoCap').value);
    const soKetNoi = parseInt(document.getElementById('soKetNoi').value) || 0;

    let tongTien = 0;

    if (loaiKhachHang === 'nhaDan') {
        tongTien = tinhTienCapNhaDan(soKenhCaoCap);
    } else if (loaiKhachHang === 'doanhNghiep') {
        tongTien = tinhTienCapDoanhNghiep(soKenhCaoCap, soKetNoi);
    }

    hienThiKetQuaTienCap(maKhachHang, tongTien);
}

// Hàm hiển thị kết quả lên giao diện
function hienThiKetQuaTienCap(maKhachHang, tongTien) {
    const kqTienCapElement = document.querySelector('.kqTienCap');
    kqTienCapElement.textContent = `Mã khách hàng: ${maKhachHang} | Tổng tiền cáp phải trả: $${tongTien.toFixed(2)}`;
}

// Gán sự kiện khi người dùng thay đổi loại khách hàng
document.getElementById('loaiKhachHang').addEventListener('change', thayDoiLoaiKhachHang);

// Gán sự kiện khi người dùng nhấn nút tính tiền
document.querySelector('.tinhTienCap').addEventListener('click', xuLyTinhTienCap);