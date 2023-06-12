function calcular() {
    // pegando o id do formulario
    var formulario = document.getElementById("formulario");

    // kilos é minha variavel
    // formulario é o id do meu formulario
    // value é o valor do input
    // o + na frente transforma em number a string	

    var kilos = +formulario.kilos.value;
    var centimetros = +formulario.centimetros.value;

    // altura
    var altura = centimetros / 100.0;

    // imc
    var imc = kilos / (altura * altura);

    // o metodo toFixed fixa apenas duas casas decimais apos o ponto.
    formulario.imc.value = imc.toFixed(2);

    if (imc <= 18.5) {
        alert("Magreza! imc " + imc.toFixed(2));
    }
    else if (imc > 18.5 && imc <= 24.9) {
        alert("Normal! imc " + imc.toFixed(2));
    }
    else if (imc > 24.9 && imc <= 30) {
        alert("Sobrepeso! imc " + imc.toFixed(2));
    }
    else if (imc > 30 ) {
        alert("Obesidade! imc " + imc.toFixed(2));
    }
    
}
