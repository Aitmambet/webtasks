function namesur() {
    "use script";
    let a = document.getElementById("name").value;
    let b = document.getElementById("surname").value;
    let c = document.getElementById("faculty").value;
    if (a.length === 0) {
        document.getElementById("name").style.border = "2px solid red";
    }
    else if (b.length === 0) {
        document.getElementById("surname").style.border = "2px solid red";
    }
    else if (c === -1) {
        document.getElementById("faculty").style.border = "56px solid red";
    }
    else{
    document.getElementById("name").style.border = "1px solid lightgrey";
    document.getElementById("surname").style.border = "1px solid lightgrey";
    var y = document.createElement("TR");
    document.getElementById("students").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode(a);
    z.appendChild(t);
    y.appendChild(z);
    
    var v = document.createElement("TD");
    var z = document.createTextNode(b);
    v.appendChild(z);
    y.appendChild(v);
    
    var i = document.createElement("TD");
    var o = document.createTextNode(c);
    i.appendChild(o);
    y.appendChild(i);  }
}
