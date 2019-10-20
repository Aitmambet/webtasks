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
    if (h == "Kazakhstan") {
        for (let i = 1; i < 4; i++) { 
            document.getElementById("city").remove(i);
        }
        for (j in cities_by_country.Kazakhstan) {   
            let z = document.createElement("OPTION");
            let t = document.createTextNode(cities_by_country.Kazakhstan[j]);
            z.appendChild(t);
            document.getElementById("city").appendChild(z);
}}
    else if (h == "Russia") {
        document.getElementById("city").options[1].text = "Moscow";
        document.getElementById("city").options[2].text = "Saint-Petersburg";
        document.getElementById("city").options[3].text = "Kazan";
}
    else if (h == "England") {
        document.getElementById("city").options[1].text = "London";
        document.getElementById("city").options[2].text = "Manchester";
        document.getElementById("city").options[3].text = "Liverpool";
}
    else {
        document.getElementById("city").options[1].text = "Paris";
        document.getElementById("city").options[2].text = "Lyon";
        document.getElementById("city").options[3].text = "Marsielle";
}}