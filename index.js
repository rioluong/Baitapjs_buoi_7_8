// Function get gía trị ID nhập vào
function layElementTheoId(id) {
  return document.getElementById(id);
}

function doiCho(n, r) {
  var e = arrSoN[n];
  (arrSoN[n] = arrSoN[r]), (arrSoN[r] = e);
}

function themSoVaoMang() {
  var n = Number(layElementTheoId("txt-soN").value);
  arrSoN.push(n), (layElementTheoId("arrValue").innerHTML = arrSoN);

  layElementTheoId("form-input1").reset();
}

function themSoThucVaoMang() {
  var n = Number(layElementTheoId("txt-addNumberFloat").value);
  arrayFloat.push(n), (layElementTheoId("arrayFloat").innerHTML = arrayFloat);

  layElementTheoId("form-input2").reset();
}

// Câu 1 : Tổng các số dương trong mảng
function tinhTongCacSoDuong() {
  for (var n = 0, r = 0; r < arrSoN.length; r++)
    arrSoN[r] > 0 && (n += arrSoN[r]);
  layElementTheoId("txtTong").innerHTML = "Tổng các số dương là: " + n;
}

// Câu 2: Đếm các số dương trong mảng
function diemSoDuong() {
  for (var n = 0, r = 0; r < arrSoN.length; r++) arrSoN[r] > 0 && n++;
  layElementTheoId("txtCout").innerHTML = "Số nguyên dương trong mảng là: " + n;
}

// Câu 3: Tìm số nhỏ nhất
function timSoNhoNhat() {
  for (var n = arrSoN[0], r = 1; r < arrSoN.length; r++)
    arrSoN[r] < n && (n = arrSoN[r]);
  layElementTheoId("txtNhoNhat").innerHTML = "Số nhỏ nhất là: " + n;
}

// Câu 4: Tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
  for (var n = [], r = 0; r < arrSoN.length; r++)
    arrSoN[r] > 0 && n.push(arrSoN[r]);
  if (n.length > 0) {
    for (var e = n[0], r = 1; r < n.length; r++) n[r] < e && (e = n[r]);
    layElementTheoId("txtSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất: " + e;
  } else
    layElementTheoId("txtSoDuongNhoNhat").innerHTML =
      "Không có số dương trong mảng";
}

// Câu 5: Tìm số chẵn cuối cùng
function timSoChan() {
  for (var n = 0, r = 0; r < arrSoN.length; r++)
    arrSoN[r] % 2 == 0 && (n = arrSoN[r]);
  layElementTheoId("txtSoChan").innerHTML = "Số chẵn cuối cùng: " + n;
}

// Câu 6: Đổi chổ 2 số liền kề
function doiChoHaiSo() {
  doiCho(
    layElementTheoId("txt-viTri1").value,
    layElementTheoId("txt-viTri2").value
  ),
    (layElementTheoId("txtDoiSoNguyen").innerHTML =
      "Mảng sau khi đổi: " + arrSoN);
}

// Câu 7: Sắp xếp số nguyên dương theo giá trị tăng dần
function sapXepTangDan() {
  for (var n = 0; n < arrSoN.length; n++)
    for (var r = 0; r < arrSoN.length - 1; r++)
      arrSoN[r] > arrSoN[r + 1] && doiCho(r, r + 1);
  layElementTheoId("txtTangDan").innerHTML = "Mảng sau khi sắp xếp: " + arrSoN;
}
// Câu 8: Tìm số nguyên tố đầu tiền
function kiemTraSoNguyenTo(n) {
  if (n < 2) return !1;
  for (var r = 2; r <= Math.sqrt(n); r++) if (n % r == 0) return !1;
  return !0;
}
function timSoNguyenTo() {
  for (var n = -1, r = 0; r < arrSoN.length; r++) {
    if (kiemTraSoNguyenTo(arrSoN[r])) {
      n = arrSoN[r];
      break;
    }
  }
  layElementTheoId("txtSoNguyenTo").innerHTML =
    -1 !== n ? n : "Không có số nguyên tố";
}

// Câu 9: Điếm giá trị các số nguyên
function demSoNguyen() {
  for (var n = 0, r = 0; r < arrayFloat.length; r++)
    Number.isInteger(arrayFloat[r]) && n++;
  layElementTheoId("txtSoNguyen").innerHTML = "Số nguyên: " + n;
}
// Câu 10: So sánh số lượng số âm và số dương
function soSanhSoAmVaDuong() {
  for (var n = 0, r = 0, e = 0; e < arrSoN.length; e++)
    arrSoN[e] > 0 ? n++ : arrSoN[e] < 0 && r++;
  layElementTheoId("txtSoSanh").innerHTML =
    n > r
      ? "Số dương > Số âm"
      : n < r
      ? "Số âm > Số dương"
      : "Số âm = Số dương";
}

var arrSoN = [];

var arrayFloat = [];
