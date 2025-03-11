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