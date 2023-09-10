let p = document.getElementById("p");

function respuesta(){
    p.innerHTML = ""; // Limpia el contenido anterior

    let capital=parseFloat(document.getElementById("valorPresente").value.replace(',', '.'));
    let tasainte = parseFloat(document.getElementById("tasainte").value.replace(',', '.'))/100;
    let num_periodo = parseFloat(document.getElementById("numPeriodo").value.replace(',', '.'));
    let montoComp = parseFloat(document.getElementById("montocompuesto").value.replace(',', '.'));

    if (!isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && isNaN(montoComp)) {
        p.innerHTML += "Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Tiempo(T): " + num_periodo + "<br><br>" + "El Monto Compuesto es de: $" + MontoCompuesto(capital, tasainte, num_periodo);
        
    }else if(!isNaN(capital) && !isNaN(tasainte) && isNaN(num_periodo) && !isNaN(montoComp)){
        p.innerHTML += "Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Monto Compuesto(T): " + montoComp + "<br><br>" + "El tiempo obtenido es de: $" + TiempoOperacion(capital,tasainte,montoComp);
    }else if(!isNaN(capital) && isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(montoComp)){
        p.innerHTML += "Capital(C): " + capital + "  | Timepo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "La tasa de interes es de: $" + TasaInteres(capital, montoComp, num_periodo);
    }else if(isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(montoComp)){
        p.innerHTML += "Tasa Interes(TS): " + (tasainte * 100) + " % | Timepo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "El capital es de: $" + Capital(tasainte, montoComp, num_periodo);
    } else {
        p.innerHTML = "Por favor, complete al menos los campos requeridos para calcular la respuesta.";
    }

}

//calcular el monto compuesto (MC)
function MontoCompuesto(capital, tasainte, num_periodo){
    var MC = capital * Math.pow(1 + tasainte, num_periodo);
    return MC.toFixed(2);
}

//para sacar el tiempo de duracion
function TiempoOperacion(capital,tasainte,montoComp){
    var tiempOpera =  Math.log(montoComp / capital) / Math.log(1 + tasainte);
    return tiempOpera.toFixed(2);
}

//para sacar la tasa de interes
function TasaInteres(capital, montoComp, num_periodo){
    var tasainteres =  Math.pow(montoComp / capital, 1 / num_periodo) - 1;
    var respuesta = tasainteres * 100;
    return respuesta.toFixed(2);
}

//para sacar el capital
function Capital(tasainte, montoComp, num_periodo){
    var capital =  montoComp /  Math.pow(1 + tasainte, num_periodo);
    return capital.toFixed(2);
}

$(function() {
    // Inicializa los datepickers
    $(".datepicker").datepicker({ dateFormat: "dd/mm/yy" });
});
    
function showFields() {
    var timeSelect = document.getElementById("time");
    var periodFields = document.getElementById("periodFields");
    var dateFields = document.getElementById("dateFields");
    var dateRangeFields = document.getElementById("dateRangeFields");
    
    if (timeSelect.value === "dias" || timeSelect.value === "meses" || timeSelect.value === "anios") {
        periodFields.style.display = "block";
        dateFields.style.display = "none";
        dateRangeFields.style.display = "none";
    } else if (timeSelect.value === "fecha") {
        periodFields.style.display = "none";
        dateFields.style.display = "block";
        dateRangeFields.style.display = "none";
    } else if (timeSelect.value === "rangoFechas") {
        periodFields.style.display = "none";
        dateFields.style.display = "none";
        dateRangeFields.style.display = "block";
    }
}