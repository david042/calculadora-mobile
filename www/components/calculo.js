var textoDisplay = "";

var valor1 = 0;

var operador = "";

function CE(){
  $(".display").val("");
  textoDisplay = "";
}

$(document).on("click",".CE button",function(){
  CE();
})

$(document).on("click",".botao",function(){
  textoDisplay += $(this).val();
  $(".display").val(textoDisplay);
})

$(document).on("click",".ope",function(){
  operador = $(this).val();
  valor1 = textoDisplay;
  CE();
})

$(document).on("click","#resultado",function(){
  var valor2 = textoDisplay;
  CE();
  if (operador == "+"){
    textoDisplay = parseFloat(valor1) + parseFloat(valor2);
  }
  if (operador == "*"){
    textoDisplay = parseFloat(valor1) * parseFloat(valor2);
  }
  if (operador == "/"){
    textoDisplay = parseFloat(valor1) / parseFloat(valor2);
  }
  if (operador == "-"){
    textoDisplay = parseFloat(valor1) - parseFloat(valor2);
  }
  $(".display").val(textoDisplay);
})