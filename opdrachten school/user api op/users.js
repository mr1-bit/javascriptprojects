
var url  = "https://15euros.nl/api/bier_basic.php";



// 2)  AJAX call met FETCH API van Javascript zelf, heeft verder geen include libraries nodig
//     Heeft minder script nodig dan plain JS
function fLaadBier_fetch() {
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(json => {
            console.log("Bier, geladen met AJAX via FETCH API van JS:", json);
            fJson2Html(json, "FETCH API van JS"); // geef JSON en title door aan function
           
        });
    }

    function fJson2Html(json, title) {
        document.getElementById("title").innerHTML = title;
    
        var table = "<table>";
        table += "<tr>";
            table += "<th>";
                table += "nr";
            table += "</th>";
            table += "<th>";
                table += "naam";
            table += "</th>";
            table += "<th>";
                table += "brouwer";
            table += "</th>";
                table += "<th>";
                table += "inkoop prijs";
            table += "</th>";
        table += "</tr>";
        for(var i=0; i<json.length; i++) {
            table += "<tr>";
                table += "<td>" + (i+1) + "</td>";              // zet een volgorde nummer voor in de rij
                table += "<td>" + json[i].naam + "</td>";       // haal van de array nr i van de json, de object key "naam" op
                table += "<td>" + json[i].brouwer + "</td>";
                table += "<td>" + "€ "+  json[i].inkoop_prijs + "</td>";       // haal van de array nr i van de json, de object key "brouwer" op
            table += "</tr>";
        }
        table += "</table>";
    
        document.getElementById("title").innerHTML = title; // vul de title die meegegeven is aan de functie in "out_title" in
        document.getElementById("out_data" ).innerHTML = table; // vul "out_data" met de uit de json opgebouwe table
    }
    
console.log(fLaadBier_fetch())