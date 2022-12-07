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
  switch (operacao){
    case ("^"):
      if (a == 1 && a == b){
        return 1;
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




var expressao = prompt("Digite aqui: ");
validarCaracteres(expressao);
validarSintaxe(expressao)


//RESOLVER PRIMEIRO EXPRESSÕES DENTRO DE PARENTESES

var tratarParent = expressao.replaceAll("(", "&(").replaceAll(")", ")&");
var parentArray = tratarParent.split("&");


for (let i = 0; i < parentArray.length; i++) {
  var element = parentArray[i];

  if (element.charAt(0) == "("){
      var novo = element.replaceAll("(","").replaceAll(")","");

      var resolver = novo.split(" ");

      var resultado = calcular(resolver[0], resolver[1], resolver[2]);

      //SOBRECREVER ELEMENTO COM RESULTADO
      parentArray[i] = resultado;
      
      
  }
  
}


//CALCULAR EXPRESSÕES RESTANTES
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






