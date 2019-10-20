function first() {
    document.getElementById("aa").style.display = "none";
}
function third() {
    document.getElementById("tools").style.display = "none";
    document.getElementById("properties").style.display = "inline";
    document.getElementById("tool2").style.borderBottom = "2px solid violet";
    document.getElementById("tool1").style.borderBottom = "0px solid violet";
}
function second() {
    document.getElementById("properties").style.display = "none";
    document.getElementById("tools").style.display = "inline";
    document.getElementById("tool1").style.borderBottom = "2px solid violet";
    document.getElementById("tool2").style.borderBottom = "0px solid violet";
}
function fourth() {
    let a = document.getElementById("px").value;
    let b = document.getElementById("py").value;
    let c = document.getElementById("pt").value;
    let d = document.getElementById("obj").value;
    let f = document.createElement("img");
    if (d == "Grass") {
        f.src = "11.png";
    }
    else if (d == "Tree") {
        f.src = "12.png";
    }
    else {
        f.src = "13.png";
    }
    let aa = a.toString();
    let bb = b.toString();
    let cc = c.toString();
    f.style.position = cc;
    f.style.top = bb+"px";
    f.style.left = aa+"px";
    f.style.width = "40px";
    f.style.height = "40px";
    document.getElementById("frame").appendChild(f);
}
function fifth() {
    let a = document.getElementById("back").value;
    let b = document.getElementById("br").value;
    let c = document.getElementById("ww").value;
    let d = document.getElementById("hh").value;
    let e = document.getElementById("frame");
    let cc = c.toString();
    let dd = d.toString();
    e.style.backgroundColor = a;
    e.style.borderRadius = b;
    e.style.width = c+"px";
    e.style.height = d+"px";
}