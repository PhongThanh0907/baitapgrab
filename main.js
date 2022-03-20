//GrabX
const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

//GrabSUV
const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

//GrabBLACK
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tongTien = 0;
var tienCho = 0;

document.getElementById("btnTinhTien").onclick = function () {
  var soKm = document.getElementById("soKm").value;
  var tgCho = document.getElementById("tgCho").value;

  var loaiXe = layLoaiXe();

  switch (loaiXe) {
    case "grabX":
      //tinh tien grabX
      tinhTienChiTiet(soKm, tgCho, GRABX_WAIT, GRABX_1, GRABX_2, GRABX_3);
      break;

    case "grabSUV":
      //tinh tien grabSUV
      tinhTienChiTiet(
        soKm,
        tgCho,
        GRAB_SUV_WAIT,
        GRAB_SUV_1,
        GRAB_SUV_2,
        GRAB_SUV_3
      );
      break;

    case "grabBlack":
      //tinh tien grabBlack
      tinhTienChiTiet(
        soKm,
        tgCho,
        GRAB_BLACK_WAIT,
        GRAB_BLACK_1,
        GRAB_BLACK_2,
        GRAB_BLACK_3
      );
      break;

    default:
      alert("Vui long chon loai xe!");
      break;
  }

  //In kết quả
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien;
};

function layLoaiXe() {
  var grabX = document.getElementById("grabX");
  var grabSUV = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");
  var loaiXe = "";
  if (grabX.checked) {
    loaiXe = "grabX";
  } else if (grabSUV.checked) {
    loaiXe = "grabSUV";
  } else if (grabBlack.checked) {
    loaiXe = "grabBlack";
  }
  return loaiXe;
}

function tinhTienCho(tgCho, giaCho) {
  var kq = 0;
  if (tgCho >= 3) {
    kq = Math.floor(tgCho / 3) * giaCho;
  }
  return kq;
}

function tinhKm_1(soKm, giaKm) {
  var kq = soKm * giaKm;
  return kq;
}

function tinhKm_2(soKm, giaKm) {
  var kq = (soKm - 1) * giaKm;
  return kq;
}

function tinhKm_3(soKm, giaKm) {
  var kq = (soKm - 19) * giaKm;
  return kq;
}

function tinhTienChiTiet(soKm, tgCho, giaCho, giaKm_1, giaKm_2, giaKm_3) {
  tienCho = tinhTienCho(tgCho, giaCho);
  if (0 <= soKm && soKm <= 1) {
    tienKm_1 = tinhKm_1(soKm, giaKm_1);
    tongTien = tienKm_1 + tienCho;
  } else if (1 < soKm && soKm <= 19) {
    tienKm_1 = tinhKm_1(1, giaKm_1);
    tienKm_2 = tinhKm_2(soKm, giaKm_2);
    tongTien = tienKm_1 + tienKm_2 + tienCho;
  } else if (soKm > 19) {
    tienKm_1 = tinhKm_1(1, giaKm_1);
    tienKm_2 = tinhKm_2(19, giaKm_2);
    tienKm_3 = tinhKm_3(soKm, giaKm_3);
    tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
  }
}

//Hóa Đơn

document.getElementById("btnHoaDon").onclick = function () {
  var content = "";
  var soKm = document.getElementById("soKm").value;
  var tgCho = document.getElementById("tgCho").value;

  if(0 <= soKm && soKm <= 1){
    content += "<tr>";
    content +=      "<td>Km Đầu Tiên</td>";
    content +=      "<td>" + soKm + "</td>";
    content +=      "<td>" + GRABX_1 + "</td>";
    content +=      "<td>" + tienKm_1 + "</td>";
    content += "</tr>";

    content += "<tr>";
    content +=      "<td>Thời gian chờ</td>";
    content +=      "<td>" + tgCho + "</td>";
    content +=      "<td>" + GRABX_WAIT + "</td>";
    content +=      "<td>" + tienCho + "</td>";
    content += "</tr>";

    content += "<tr>";
    content +=      "<td>Tổng tiền</td>";
    content +=      "<td>" + tongTien + "</td>";
    content += "</tr>";
  }else if(1 < soKm && soKm <= 19){
    content += "<tr>";
    content +=      "<td>Km Đầu Tiên</td>";
    content +=      "<td>" + 1 + "</td>";
    content +=      "<td>" + GRABX_1 + "</td>";
    content +=      "<td>" + tienKm_1 + "</td>";
    content += "</tr>";

    content += "<tr>";
    content +=      "<td>Từ 1 đến 19</td>";
    content +=      "<td>" + (soKm - 1) + "</td>";
    content +=      "<td>" + GRABX_2 + "</td>";
    content +=      "<td>" + tienKm_2 + "</td>";
    content += "</tr>";

    content += "<tr>";
    content +=      "<td>Thoi gian cho</td>";
    content +=      "<td>" + tgCho + "</td>";
    content +=      "<td>" + GRABX_WAIT + "</td>";
    content +=      "<td>" + tienCho + "</td>";
    content += "</tr>";

    content += "<tr>";
    content +=      "<td>Tong tien</td>";
    content +=      "<td>" + tongTien + "</td>";
    content += "</tr>";
  }else if(soKm > 19){
    content += "<tr>";
    content +=      "<td>Km Đầu Tiên</td>";
    content +=      "<td>" + 1 + "</td>";
    content +=      "<td>" + GRABX_1 + "</td>";
    content +=      "<td>" + tienKm_1 + "</td>";
    content += "</tr>";

    content += "<tr>";
    content +=      "<td>Từ 1 đến 19</td>";
    content +=      "<td>" + 18 + "</td>";
    content +=      "<td>" + GRABX_2 + "</td>";
    content +=      "<td>" + tienKm_2 + "</td>";
    content += "</tr>";

    content += "<tr>";
    content +=      "<td>Trên 19Km</td>";
    content +=      "<td>" + (soKm - 19) + "</td>";
    content +=      "<td>" + GRABX_3 + "</td>";
    content +=      "<td>" + tienKm_3 + "</td>";
    content += "</tr>";

    content += "<tr>";
    content +=      "<td>Thời Gian Chờ</td>";
    content +=      "<td>" + tgCho + "</td>";
    content +=      "<td>" + GRABX_WAIT + "</td>";
    content +=      "<td>" + tienCho + "</td>";
    content += "</tr>";

    content += "<tr>";
    content +=      "<td>Tong tien</td>";
    content +=      "<td>" + tongTien + "</td>";
    content += "</tr>";
  }


  document.getElementById("tbody").innerHTML = content;
};
