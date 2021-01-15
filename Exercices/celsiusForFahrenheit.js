/* ### Celsius em Fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça uma transformação de uma unidade para outra;

  C = (F - 32) * 5/9

  F = C * 9/5 + 32

*/
let convertMessage = document.querySelector("#convertSpan");
let getDegrees = document.querySelector("#degrees");
let ForC = document.querySelector("#ForC");
let convertBttn = document.querySelector("#convertBttn");

convertBttn.addEventListener("click", function (event) {
    event.preventDefault;
    let whatIs = ForC.value;
    let degrees;

    if (whatIs === "C" || whatIs === "c") {
        
        degrees = convertCforF(getDegrees.value);
        convertMessage.textContent = `A temperatura em graus Fahrenheit é ${degrees.toFixed(1)} F`

    } else if (whatIs === "F" || whatIs === "f"){
        
        degrees = convertFforC(getDegrees.value);
        convertMessage.textContent = `A temperatura em graus Celsius é ${degrees.toFixed(1)} C` 

    } else {
        convertMessage.textContent = "Grandeza inválida! Escolha entre F (Fahrenheit) ou C (Celsius)"
    }


    
    console.log(degrees);
});

function convertCforF(deg){
    let Far = (deg * 9/5) + 32;

    return Far;
}

function convertFforC(deg){
    let Cel = (deg - 32) * 5/9;

    return Cel;
}
