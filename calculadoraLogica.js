var inputText = document.getElementById("proposition")
var btnA = document.getElementById("btnA");


function printValue(value) {
    inputText.value += value;
    console.log(btnA);
}

function clean() {
    inputText.value = "";
}

function createTruthTableHTML(matriz) {
    let contador = 1;
    let table = document.createElement("table");
    for (let i = 0; i < numberOfPropositions; i++) {
        
    }
}

function startTableJS(numberOfPropositions){
    let matriz = new Array(numberOfPropositions);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(Math.pow(2, numberOfPropositions - 1));
    }
    return matriz;
}

function createTruthTableJS(numberOfPropositions) {
    let matriz = startTableJS(numberOfPropositions);
    let toggle;
    let times = Math.pow(2, numberOfPropositions)
    for (let i = 0; i < numberOfPropositions; i++) {
        toggle = true;
        for (let j = 0; j < times; j++) {

            if(i >= Math.pow(2, j))
                toggle = !toggle
            

            if(toggle)
                matriz[i][j] = "V";
            else
                matriz[i][j] = "F";
        }
    }
}

createTruthTableJS(2);