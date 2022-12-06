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

function calcular(a, operacao, b){

}

var expressao = prompt("Digite aqui: ");
validarSintaxe(expressao)


