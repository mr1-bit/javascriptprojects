function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "page.html", true);
    xhttp.send();
  }
  // images cant go in divs bruv dont forget 
  // document.getelementbyid('demo').src = 'image.jpg';
  // responeUtl = xhttp.getResponseHeader('url');