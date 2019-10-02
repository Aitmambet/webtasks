"use script";
let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
/* Write your code here */
for (x in countries) {       
    var y = document.createElement("OPTION");
    var textnode = document.createTextNode(countries[x]);
    y.appendChild(textnode);
    document.getElementById("country").appendChild(y);}

function onClick() {
    var h = document.getElementById("country").value;
    var i = 0;
    if (h == "Kazakhstan") {
        for (i = 0; i < document.getElementById("city").length; i++) { 
            document.getElementById("city").remove(i);
        }
        i = 0;
        for (j in cities_by_country.Kazakhstan) {   
            var z = document.createElement("OPTION");
            var t = document.createTextNode(cities_by_country.Kazakhstan[j]);
            z.appendChild(t);
            document.getElementById("city").appendChild(z);
}}
    else if (h == "Russia") {
        for (i = 0; i < document.getElementById("city").length; i++) { 
            document.getElementById("city").remove(i);
        }
        i = 0;
        for (j in cities_by_country.Russia) {       
            var z1 = document.createElement("OPTION");
            var t1 = document.createTextNode(cities_by_country.Russia[j]);
            z1.appendChild(t1);
            document.getElementById("city").appendChild(z1);
}}
    else if (h == "England") {
        for (i = 0; i < document.getElementById("city").length; i++) { 
            document.getElementById("city").remove(i);
        }
        i = 0;
        for (j in cities_by_country.England) {       
            var z2 = document.createElement("OPTION");
            var t2 = document.createTextNode(cities_by_country.England[j]);
            z2.appendChild(t2);
            document.getElementById("city").appendChild(z2);
}}
    else {
        for (i = 0; i < document.getElementById("city").length; i++) {                            
            document.getElementById("city").remove(i);
        }
        i = 0;
        for (j in cities_by_country.France) {       
            var z3 = document.createElement("OPTION");
            var t3 = document.createTextNode(cities_by_country.France[j]);
            z3.appendChild(t3);
            document.getElementById("city").appendChild(z3);
        
}}
}