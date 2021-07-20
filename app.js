
var inputGiven = document.querySelector("#input")
var translator = document.querySelector("#translator");
var outputTaken = document.querySelector("#output")


var minionURL = "https://api.funtranslations.com/translate/minion.json"

function outputURL(text){
    return minionURL + "?" + "text=" + text

}

function buttonClicked (){

    var takingInput = inputGiven.value;

    fetch(outputURL (takingInput))
    .then(response => response.json())
    .then(json => {
     

        const translatedText = json.contents.translated;
        outputTaken.innerText = translatedText;
    })
}


translator.addEventListener("click" , buttonClicked)