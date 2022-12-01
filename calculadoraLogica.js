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
    let table = document.createElement("table");
    for (let i = 0; i < matriz[0].length; i++) {
        let tr = document.createElement("tr");
        for (let j = matriz.length - 1; j >= 0 ; j--) {
            let td = document.createElement("td");

            let data = document.createTextNode(matriz[j][i]);

            td.appendChild(data);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("tableArea").appendChild(table);
}

function startTableJS(numberOfPropositions){
    let matriz = new Array(numberOfPropositions);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(Math.pow(2, numberOfPropositions));
    }
    return matriz;
}

function createTruthTableJS(numberOfPropositions) {
    let table = startTableJS(numberOfPropositions);
    let height = Math.pow(2, numberOfPropositions);
    let toggle;
    let count;
    let diference;
    for (let i = 0; i < numberOfPropositions; i++) {
        toggle = true;
        count = 0;
        diference = Math.pow(2, i);
        for (let j = 0; j < height; j++) {
            
            if(count >= diference){
                toggle = !toggle;
                diference += Math.pow(2, i);
            }

            if(toggle){
                table[i][j] = "V";
            } else {
                table[i][j] = "F";
            }
            count++;    
        }
    }
    return table;
}

createTruthTableHTML(createTruthTableJS(3));