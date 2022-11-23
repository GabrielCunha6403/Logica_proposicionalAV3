function validarCaracteres() {
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

var expressao = prompt("Digite aqui: ");
validarCaracteres(expressao)
console.log("teste do git");
