var inputText = document.getElementById("proposition");
var btnA = document.getElementById("btnA");
var tableArea = document.getElementById("tableArea");
var expression = [];
var numberOfPropositions = 0;

function printValue(value) {
  inputText.value += value;
}

function clean() {
  inputText.value = "";
  expression = [];
}

function concat(value) {
  let has = false;
  expression.forEach((num) => {
    if (num === value) {
      has = true;
    }
  });
  if (!has) expression.push(value);
}

function createTruthTableHTML(matriz, title) {
  let tr = document.createElement("tr");
  let table = document.createElement("table");

  expression.forEach((letter) => {
    let titleJS = document.createTextNode(letter);
    let th = document.createElement("th");
    th.appendChild(titleJS);
    tr.appendChild(th);
  });

  table.appendChild(tr);

  for (let i = 0; i < matriz[0].length; i++) {
    let tr = document.createElement("tr");
    for (let j = matriz.length - 1; j >= 0; j--) {
      let td = document.createElement("td");

      let data = document.createTextNode(matriz[j][i]);

      td.appendChild(data);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  document.getElementById("tableArea").appendChild(table);
}

function startTableJS(numberOfPropositions) {
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
      if (count >= diference) {
        toggle = !toggle;
        diference += Math.pow(2, i);
      }

      if (toggle) {
        table[i][j] = "V";
      } else {
        table[i][j] = "F";
      }
      count++;
    }
  }
  return table;
}

function and(proposition1, proposition2) {
  let value1, value2;

  if (proposition1 === "V") value1 = 1;
  else value1 = 0;

  if (proposition2 === "V") value2 = 1;
  else value2 = 0;

  if (value1 + value2 == 2) return "V";
  else return "F";
}

function or(proposition1, proposition2) {
  let value1, value2;

  if (proposition1 === "V") value1 = 1;
  else value1 = 0;

  if (proposition2 === "V") value2 = 1;
  else value2 = 0;

  if (value1 + value2 == 0) return "F";
  else return "V";
}

function not(proposition) {
  if (proposition === "V") return "F";
  else return "V";
}

function ifThen(proposition1, proposition2) {
  if (proposition1 === "V" && proposition2 === "F") return "F";
  else return "V";
}

function run() {
  console.log(inputText.value);
  let tableJS = createTruthTableJS(expression.length);
  let height = tableJS[0].length;
  let index1;
  let prop1;
  let prop2;
  createTruthTableHTML(tableJS, expression);

  for (let i = 0; i < inputText.value.length; i += 2) {
    switch (inputText.value[i]) {
      case "~":

      case "A":
        index1 = expression.indexOf("A");

        break;
      case "B":
        index1 = expression.indexOf("B");

        break;
      case "C":
        index1 = expression.indexOf("C");

        break;

      default:
        break;
    }

    switch (inputText.value[i]) {
      case "A":
        index1 = expression.indexOf("A");

        break;
      case "B":
        index1 = expression.indexOf("B");

        break;
      case "C":
        index1 = expression.indexOf("C");

        break;

      default:
        break;
    }
  }
}
