var valor1 = "", valor2 = "", operacao = "", resultado = "";


 document.onkeypress = function(evt) {
  evt = evt || window.event;
  var charCode =  evt.keyCode || evt.which;
 // var key = evt.key;
 var caractere = String.fromCharCode(charCode);
  calculadora(caractere);

}
function atualizarDisplay(){
  document.getElementById('valor1').innerHTML = valor1;
  document.getElementById('valor2').innerHTML = valor2;
  document.getElementById('operacao').innerHTML = operacao;
  document.getElementById('resultado').innerHTML = resultado;
}

function limparTela(){
  valor1 = "";
  valor2 = "";
  operacao = "";
  resultado = "";
  atualizarDisplay();
}

function calculadora(caractere) {
 // charCode = parseInt(charCode);
  if(isNaN(caractere)){
    switch (caractere) {
      case "+":
      case "-":
      case "/":
      case "*":
        operacao = caractere;
        break;
    }
  } else {
    if(operacao){
      valor2 = valor2.concat(caractere);
    } else {
      valor1 = valor1.concat(caractere);
    }
  }
  if(caractere.toLowerCase() === 'd'){
    if(operacao){
      if(!valor2){
        operacao = "";
      }
      valor2 = valor2.substring(0, valor2.length-1);
    } else {
      valor1 = valor1.substring(0, valor1.length-1);
    }
  }
  if(caractere === '='){
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    switch (operacao) {
      case "+":
        resultado = valor1 + valor2;
        break;
      case "-":
        resultado = valor1 - valor2;
        break;
      case "*":
        resultado = valor1 * valor2;
        break;
      case "/":
        resultado = valor1 / valor2;
        break;
    }
    resultado = "= "+resultado;
  }
  atualizarDisplay();
}

function alterarCor(cor){
  var calculadora = document.getElementById("calculadora");
  calculadora.style.backgroundColor = cor;
  
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
