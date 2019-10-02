function myFunction() {
    "use strict";
    var a = document.getElementById("s11").value;
    var b = document.getElementById("s12").value;
    var c = document.getElementById("s13").value;
    var d = document.getElementById("s21").value;
    var e = document.getElementById("s22").value;
    var f = document.getElementById("s23").value;
    var g = document.getElementById("s31").value;
    var h = document.getElementById("s32").value;
    var i = document.getElementById("s33").value;
    var sum = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
    document.getElementById("result").innerHTML = sum; 
}