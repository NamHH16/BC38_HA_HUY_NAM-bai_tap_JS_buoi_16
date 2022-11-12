// EX1
document.getElementById("btn-timSoNguyenDuong").onclick = function ex4() {
  var sum = 0;
  for (var i = 1; sum + i <= 10000; i++) {
    sum += i;
  }
  document.getElementById("ketQua1").innerHTML = i;
};
// EX 2 : tính tổng
document.getElementById("btn-tinhTong").onclick = function () {
  var numX = +document.getElementById("numX").value;
  var numY = +document.getElementById("numY").value;
  var sum = 0;
  for (var i = 1; i <= numY; i++) {
    sum += Math.pow(numX, i);
  }
  document.getElementById("ketQua2").innerHTML = sum;
};

//EX3 : tính giai thừa
document.getElementById("btn-tinhGiaiThua").onclick = function () {
  //input:number
  var nhapSo = +document.getElementById("nhapSo").value;

  //output: giaiThua = 1
  var giaiThua = 1;

  //b1: xác định giá trị thay đổi
  var count = 1;

  //b2: thiết lập điều kiện lặp
  while (count <= nhapSo) {
    //điều kiện lặp
    //b3: xử lý
    giaiThua *= count;

    //b4 bước lặp
    count++;
  }
  document.getElementById("ketQua3").innerHTML = giaiThua;
};

//EX4: in thẻ div

document.getElementById("btn-inTheDiv").onclick = function () {
  var input = 10;
  var output = "";
  var divChan =
    '<div class="alert alert-success mt-2 bg-primary text-white">DIV chẵn</div>';
  var divLe =
    '<div class="alert alert-success mt-2 bg-danger text-white">DIV lẻ</div>';

  for (var i = 1; i <= input; i++) {
    if (i % 2 === 0) {
      output += divChan;
    } else if (Math.floor(i % 2) === 1) {
      output += divLe;
    }
  }

  document.getElementById("ketQua4").innerHTML = output;
};

//EX5:in số nguyên tố
document.getElementById("btn-inSoNguyenTo").onclick = function () {
  var number = +document.getElementById("nhapSo5").value;
  var output = "";

  for (var i = 2; i <= number; i++) {
    var checkSoNT = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        checkSoNT = false;
        break;
      }
    }
    if (checkSoNT) {
      output += i + " ";
    }
  }

  document.getElementById("ketQua5").innerHTML = output;
};
