var redvalue = 0;
const maxred = 255;
function changeColorToRed() {
    var redIndex = redvalue;
    for (var i = 0; i < 5; i++) {
        var newDiv = document.createElement("div");

        var typeOfNewDiv = typeof (newDiv)
        newDiv.style.width = "300px";
        newDiv.style.height = "300px";
        newDiv.style.color = "white"
        newDiv.innerHTML = "Ist es schon rot?";
        newDiv.style.textAlign = "center";
        newDiv.style.border = "5px solid black"
        document.getElementById("newDiv").appendChild(newDiv);
        color(redIndex + i);
    }

    function color(red) {

        const colorRed = Math.round((255 / 50) * (red > 50 ? 50 : 100)).toString(16);
        var colorGruen = Math.round((255 / 50) * (red > 50 ? 50 : 100 - red)).toString(16);
        var colorBlau = Math.round((255 / 50) * (red > 50 ? 50 : 100 - red)).toString(16);
        const twoDigit = (d) => ("0" + d).slice(-2);
        var nextColor = '#' + twoDigit(colorRed) + twoDigit(colorGruen) + twoDigit(colorBlau);
        newDiv.style.background = nextColor;
        redvalue = red;

        //might need some work
        //redvalue += 10;
        //const otherVal = redvalue.toString(16);
        //const redVal = maxred.toString(16);
        //nextColor = '#' + redVal+ otherVal + otherVal;


    }
}

//zum Verständnis von 
function getTwoDigits(number) {
    var returnNumber = "0";
    returnNumber += number;
    return returnNumberumber.slice(-2);
}

function calculateOnClick() {
    var firstNummber = document.getElementById("Zahl1").value;
    var rechenOperator = document.getElementById("Rechenoperator").value;
    var secondnummber = document.getElementById("Zahl2").value;
    var ergebnis = document.getElementById("Ergebnis");
    debugger;
    if (firstNummber !== null && rechenOperator !== "" && secondnummber !== null) {
      var result = ergebnis.value = firstNummber + rechenOperator + secondnummber;
      ergebnis.value = eval(result);
    }

}
//%-Operator Modolo

function swapiOnChange(){
    var person = document.getElementById("swapi").value;
    var swapiOutput = document.getElementById("swapiOutput");
    var apiUrlPerson = "https://swapi.dev/api/people/"+person;
    var apiUrlFilm = "https://swapi.dev/api/films"
    fetch(apiUrlPerson)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    swapiOutput.textContent = data.name;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

