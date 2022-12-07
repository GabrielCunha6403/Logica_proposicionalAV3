var inputText = document.getElementById("proposition");
var btnA = document.getElementById("btnA");
var tableArea = document.getElementById("tableArea");
var expression = [];
var numberOfPropositions = 0;
var height;

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
        table[i][j] = 1;
      } else {
        table[i][j] = 0;
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
  height = tableJS[0].length;
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
  tratarParenteses(0, 1, 0);


}

function calcula(op1, operator, op2, tr){

    let td = document.createElement("td");
    let value;

    switch (operator) {
        case "v":
            value = or(op1, op2);
            
            break;
        case "^":
            value =  and(op1, op2);
        
            break;
        case "→":
            value =  ifThen(op1, op2);
            
            break;
        case "~":
            
            break;
        default:
            break;
    }

    let data = document.createTextNode(value);
    td.appendChild(data);
    tr.appendChild(td);

}

//=========================================================================================================
//=========================================================================================================
//=========================================================================================================

var tableArea = document.getElementById("tableArea");
var inputText = document.getElementById("proposition");
function validarCaracteres(expressao) {
  const caracteresValidos = ["a", "b", "c", "->", "<->", "~", "^", "v"];

  var flag = true;
  for (let i = 0; i < expressao.length; i++) {
    const checkChar = expressao[i];

    if (!caracteresValidos.includes(checkChar)) {
      flag = false;
    }
  }

  if (flag) {
    console.log("Tudo certo!");
  } else {
    console.log("Tem erro.");
  }
}

function validarSintaxe(expressao) {
  const letras = ["a", "b", "c"];
  const operadores = ["~", "^", "v", "->", "<->"];

  var expressaoAnalisar = expressao.split(" ");

  var flag = true;
  var contaParentesis = 0;


  for (let i = 0; i < expressaoAnalisar.length; i++) {
    const caracter = expressaoAnalisar[i];

    //TRATAMENTO PARA NEGAÇÃO
    if (caracter.length <= 2) {
      if (caracter.charAt(0) == "~") {
        var possivelLetra = caracter.charAt(1);

        //NEGAÇÃO SÓ PODE SER USADO ANTES DE LETRA
        if (!letras.includes(possivelLetra)) {
          flag = false;
        }

        
      }
    } else {
      flag = false;
    }

    //TRATAMENTO DE PARENTESES
    if (caracter == ")"){
      if (contaParentesis > 0){
        contaParentesis--;
      } else {
        flag = false;
      }
    } else if(caracter == "("){
      contaParentesis++;
    }
  }

  //CHECA SE A QUANTIDADE DE PARENTESIS QUE ABRE É IGUAL AO QUE FECHA
  if(contaParentesis != 0){
    flag = false;
  }

  if (flag){
    console.log("Tudo certo!");
  } else {
    console.log("Tem erro.");
  }
}

function calcular(a, operacao, b, tr){
  switch (operacao){
    case ("^"):
      if (a == 1 && a == b){
        value =  1;
      } else {
        return 0;
      }

    case ("v"):
      if (a == 1 || b == 1){
        return 1;
      } else {
        return 0;
      }

    case ("->"):
      if (b == 1){
        return 1;
      } else {
        if (a == 0){
          return 1;
        } else {
          return 0;
        }
      }

    case ("<->"):
      if (a == b){
        return 1;
      } else {
        return 0;
      }


      //ZERO EQUIVALE A F
      //UM EQUIVALE A V
      //USAR ESSA FUNÇÃO PRA TABELA VERDADE


  }

}

const operadores = ["^", "v", "->", "<->"];

//RESOLVER PRIMEIRO EXPRESSÕES DENTRO DE PARENTESES

function tratarParenteses(a, b, c){
    var expressao = inputText.value;
    validarCaracteres(expressao);
    validarSintaxe(expressao);
    var expressaoMostrar = expressao;
    expressao = expressao.replaceAll("A", a).replaceAll("B", b).replaceAll("C", c);

    var tratarParent = expressao.replaceAll("(", "&(").replaceAll(")", ")&");
    var parentArray = tratarParent.split("&");

    var tratarParentMostrar = expressaoMostrar.replaceAll("(", "&(").replaceAll(")", ")&");
    var parentArrayMostrar = tratarParentMostrar.split("&");


    for (let i = 0; i < parentArray.length; i++) {
    var element = parentArray[i];
    var elementMostrar = parentArrayMostrar[i];

    if (element.charAt(0) == "("){
        var novo = element.replaceAll("(","").replaceAll(")","");
        var novoMostrar = elementMostrar.replaceAll("(","").replaceAll(")","");

        var resolver = novo.split(" ");

        var resultado = calcular(resolver[0], resolver[1], resolver[2]);

        //SOBRECREVER ELEMENTO COM RESULTADO
        parentArray[i] = resultado;
            
        let data = document.createTextNode(novoMostrar);
        let th = document.createElement('th');
        th.appendChild(data);
        let tr = document.createElement('tr');
        tr.appendChild(th);

        for (let j = 0; j < height; j++) {
            //calcula()
        }

        let table = document.createElement('table');
        table.appendChild(tr);
        tableArea.appendChild(table);
        
    }
    
    }

    let data = document.createTextNode(expressaoMostrar);
    let th = document.createElement('th');
    th.appendChild(data);
    let tr = document.createElement('tr');
    tr.appendChild(th);
    let table = document.createElement('table');
    table.appendChild(tr);
    tableArea.appendChild(table);

    //CALCULAR EXPRESSÕES RESTANTES
    var prefinal = parentArray.join("");
    var final = parentArray.join("").split(" ");
    
    for (let i = 0; i < final.length; i++) {
      const element = final[i];
    
      if (operadores.includes(element)){
        var resultado = calcular(final[i-1], final[i], final[i+1] )  
        
        //depois de calcular
          final[i-1] = "";
          final[i] = resultado;
          final[i+1] = "";
      }
      
    }
    
    console.log(final)
}







