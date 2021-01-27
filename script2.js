//Variables y constantes

const botonNumero = document.getElementsByName("botones");
const dataOpera = document.getElementsByName("operador__hijo");
const igual = document.getElementById("operador__igual");
const clear = document.getElementById("clear");
var resultado = document.getElementById("resultado");

var operacion = 0;
var operandob = "";
var operandoa = "";


//Eventos

botonNumero.forEach((boton) => {
    boton.addEventListener('click', ()=>{
        resultado.innerText = resultado.innerText + boton.innerText;
    
    })    
}); 

dataOpera.forEach((boton)=>{
    boton.addEventListener('click', ()=>{

        operandoa = resultado.innerText; 
        operacion = boton.innerText;
        limpiarPantalla();

    })
    
});

igual.addEventListener('click', ()=>{

    operandob = resultado.innerText;
    limpiarPantalla();
    resolver();
  

});

clear.addEventListener('click', ()=>{

    limpiarPantalla()

});

//funciones

function limpiarPantalla(){
    resultado.innerText = "";
};

function resolver(){

switch (operacion) {
    case "+" :
        resultado.innerText = parseFloat(operandoa) + parseFloat(operandob);
        break;
    case "-" :
        resultado.innerText = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*" :
        resultado.innerText = parseFloat(operandoa) * parseFloat(operandob);
        break;
    case "/" :
        resultado.innerText = parseFloat(operandoa) / parseFloat(operandob);
        break;

    default: "Error"
        break;
}


};

