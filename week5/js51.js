function first() {
    document.getElementById("p").style.display = "inline";
    document.getElementById("bodya").style.backgroundColor = "lightgrey";
}

function second() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("phone").value;
    let d = document.getElementById("mycheckbox").checked;
    
    
    var y = document.createElement("TR");
    document.getElementById("tablea").appendChild(y);
    
    if (d == true) {
        var z = document.createElement("TD");
        var t = document.createTextNode("Active");
        z.appendChild(t);
        y.appendChild(z);
    }
    else {
        var z = document.createElement("TD");
        var t = document.createTextNode("Inactive");
        z.appendChild(t);
        y.appendChild(z);
    }
    
    var z = document.createElement("TD");
    var t = document.createTextNode(a);
    z.appendChild(t);
    y.appendChild(z);
    
    var z = document.createElement("TD");
    var t = document.createTextNode(b);
    z.appendChild(t);
    y.appendChild(z);
    
    var h = document.getElementById("admin").value;
    var z = document.createElement("TD");
    var t = document.createTextNode(h);
    z.appendChild(t);
    y.appendChild(z);
    
    var z = document.createElement("TD");
    var t = document.createTextNode(c);
    z.appendChild(t);
    y.appendChild(z);
    
    var z = document.createElement("TD");
    var t = document.createTextNode("");
    z.appendChild(t);
    y.appendChild(z);
    
    var x = document.createElement("TD");
    var t = document.createElement("IMG");
    t.src = "9.png";
    t.style.width = "30px";
    t.style.verticalAlign = "middle";
    var g = document.createElement("IMG");
    g.src = "8.png";
    g.style.width = "30px";
    g.style.verticalAlign = "middle";
    var h = document.createElement("IMG");
    h.src = "10.png";
    h.style.width = "30px";
    h.style.verticalAlign = "middle";
    h.style.margin = "0 2px";
    
    t.addEventListener('click',function third() {
        var r = confirm("Are u sure, want to delete?");
        if (r == true) {
            event.target.parentNode.parentNode.style.display = "none";
        }
        else {
            h.style.margin = "0 2px"; 
        }
        
    });
    h.addEventListener("click", fourth);
    
    x.appendChild(g);
    x.appendChild(t);
    x.appendChild(h);
    y.appendChild(x);
    
    document.getElementById("p").style.display = "none";
    document.getElementById("bodya").style.backgroundColor = "white";

    function fourth() {
        document.getElementById("w").style.display = "inline";
        let y = event.target.parentNode.parentNode;
        
        document.getElementById("fff").addEventListener('click', function fifth() {
            
            y.cells[1].innerHTML = document.getElementById("namea").value;
            y.cells[2].innerHTML = document.getElementById("emaila").value;
            y.cells[4].innerHTML = document.getElementById("phonea").value;
            let e = document.getElementById("mycheckboxa").checked;
            if (e == true) {
                y.cells[0].innerHTML = "Active";
            }
            else {
                y.cells[0].innerHTML = "Inactive";
            }
            y.cells[3].innerHTML = document.getElementById("admina").value;
            
            document.getElementById("w").style.display = "none";
        });
    }


}
