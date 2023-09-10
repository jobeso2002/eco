//este codigo es mio solo que no lee el llamado de la funcion

let p = document.getElementById("p");

function respuesta() {
    p.innerHTML = ""; // Limpia el contenido anterior

    let capital = parseFloat(document.getElementById("capital").value.replace(',', '.'));
    let tasainteres = parseFloat(document.getElementById("tasa").value.replace(',', '.')) / 100;
    let interes = parseFloat(document.getElementById("interes").value.replace(',', '.'));
    let dias = parseFloat(document.getElementById("dias").value.replace(',', '.'));
    let mes = parseFloat(document.getElementById("meses").value.replace(',', '.'));
    let anio = parseFloat(document.getElementById("anios").value.replace(',', '.'));


    if (!isNaN(capital) && !isNaN(tasainteres) && !isNaN(dias) && !isNaN(mes) && !isNaN(anio) && isNaN(interes)) {
        p.innerHTML += "Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainteres * 100) + "% | Dia(D): " + dias + "  | Mes(M): " + mes + "  | Anio(Year): " + anio + "<br><br>" + "El Interes es de: $" + Interes(capital, tasainteres, dias, mes, anio);
        
    }else if (!isNaN(capital) && !isNaN(tasainteres) && !isNaN(dias) && !isNaN(mes) && !isNaN(anio)) {
        p.innerHTML += "Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainteres * 100) + "% | Dia(D): " + dias + "  | Mes(M): " + mes + "  | Anio(Year): " + anio + "<br><br>" + "El Monto Final es de: $" + MontoFinal(capital, tasainteres, interes, dias, mes, anio);
    } 
    else if (!isNaN(capital) && isNaN(tasainteres) && !isNaN(dias) && !isNaN(mes) && !isNaN(anio) && !isNaN(interes)) {
        p.innerHTML += "Capital(C): " + capital + "  | Interes(I): " + interes + "$ | Dia(D): " + dias + "  | Mes(M): " + mes + "  | Anio(Year): " + anio + "<br><br>" + "La Tasa de Interes es de: " + TsInter(capital, interes, dias, mes, anio) + "%";
    } else if (isNaN(capital) && !isNaN(tasainteres) && !isNaN(dias) && !isNaN(mes) && !isNaN(anio) && !isNaN(interes)) {
        p.innerHTML += "Tasa Interes(TS): " + (tasainteres * 100) + "  | Interes(I): " + interes + "$ | Dia(D): " + dias + "  | Mes(M): " + mes + "  | Anio(Year): " + anio + "<br><br>" + "El capital es de: " + ObteCapital(interes, tasainteres, dias, mes, anio) + "$";
    } else if (!isNaN(capital) && !isNaN(tasainteres) && isNaN(dias) && isNaN(mes) && isNaN(anio) && !isNaN(interes)) {
        p.innerHTML += "Tasa Interes(TS): " + (tasainteres * 100) + "  | Interes(I): " + interes + "$ | Capital(C): " + capital +
            "<br><br>" + "El tiempo obtenido es de: " + obtTiempo(capital, interes, tasainteres);
    } else {
        p.innerHTML = "Por favor, complete al menos los campos requeridos para calcular la respuesta.";
    }
}


function MontoFinal(capital,tasainteres, interes, dias, mes, anio){
    var tiempoTotal = anio + mes/ 12 + dias / 365;
    var interes = capital * tasainteres * tiempoTotal;
    var montoFinal = capital + interes;

    return montoFinal.toFixed(2);

}


function Interes(capital, tasainteres, dias, mes, anio){
    var tiempo = anio + mes/12 + dias/365;
    var resp = capital * tasainteres *tiempo;
    return resp.toFixed(2);
}
function TsInter(capital, interes, dias, mes, anio){
    var tiempo = anio *12 + mes + dias/31;
    var tiempofinal = tiempo /12 >0 ? tiempo / 12 : 1;

    var tsinter = (interes / (capital*tiempofinal))*100;
    return tsinter.toFixed(2);
}
function ObteCapital(interes, tasainteres, dias, mes, anio){
    var tiempo = anio + mes/12 + dias/365;
    var capital = interes / (tasainteres * tiempo);
    
    return capital.toFixed(2);
}

function obtTiempo(capital, interes, tasainteres){

    var tiempo = interes / (capital * (tasainteres));
    var años = Math.floor(tiempo);
    var meses = Math.floor((tiempo - años) * 12);
    var días = Math.floor(((tiempo - años) * 12 - meses) * 31);

    var respuestafinal = "El tiempo invertido es: " + años + " años, " + meses + " meses y " + días + " días";

    return respuestafinal;
}

