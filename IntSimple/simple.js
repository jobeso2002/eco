//este codigo es mio solo que no lee el llamado de la funcion
const p = document.getElementById("p");

function clearContent() {
    p.innerHTML = "";
}

function validateInput(input) {
    return !isNaN(input) && input !== '' && input !== null;
}

function getNumericValue(id) {
    const value = parseFloat(document.getElementById(id).value.replace(',', '.'));
    return validateInput(value) ? value : NaN;
}

function respuesta() {
    clearContent();

    const capital = getNumericValue("capital");
    const tasaInteres = getNumericValue("tasa") / 100;
    const interes = getNumericValue("interes");
    const dias = getNumericValue("dias");
    const meses = getNumericValue("meses");
    const annos = getNumericValue("anios");

    if (validateInput(capital) && validateInput(tasaInteres) && validateInput(dias) && validateInput(meses) && validateInput(annos) && isNaN(interes)) {
        p.innerHTML += "Capital(C): " + capital + " | Tasa Interes(TS): " + (tasaInteres * 100) + "% | Dia(D): " + dias + " | Mes(M): " + meses + " | Anio(Year): " + annos + "<br><br>" + "El Interes es de: $" + calcularInteres(capital, tasaInteres, dias, meses, annos);
        
    } else if (validateInput(capital) && validateInput(tasaInteres) && validateInput(dias) && validateInput(meses) && validateInput(annos)) {
        p.innerHTML += "Capital(C): " + capital + " | Tasa Interes(TS): " + (tasaInteres * 100) + "% | Dia(D): " + dias + " | Mes(M): " + meses + " | Anio(Year): " + annos + "<br><br>" + "El Monto Final es de: $" + calcularMontoFinal(capital, tasaInteres, interes, dias, meses, annos);
    } else if (validateInput(capital) && isNaN(tasaInteres) && validateInput(dias) && validateInput(meses) && validateInput(annos) && validateInput(interes)) {
        p.innerHTML += "Capital(C): " + capital + " | Interes(I): " + interes + "$ | Dia(D): " + dias + " | Mes(M): " + meses + " | Anio(Year): " + annos + "<br><br>" + "La Tasa de Interes es de: " + calcularTasaInteres(capital, interes, dias, meses, annos) + "%";
    } else if (!isNaN(capital) && validateInput(tasaInteres) && isNaN(dias) && isNaN(meses) && isNaN(annos) && validateInput(interes)) {
        p.innerHTML += "Tasa Interes(TS): " + (tasaInteres * 100) + " | Interes(I): " + interes + "$ | Capital(C): " + capital +
            "<br><br>" + "El tiempo obtenido es de: " + obtenerTiempo(capital, interes, tasaInteres);
    } else if (validateInput(capital) && validateInput(tasaInteres) && isNaN(dias) && isNaN(meses) && isNaN(annos) && validateInput(interes)) {
        p.innerHTML += "Tasa Interes(TS): " + (tasaInteres * 100) + " | Interes(I): " + interes + "$ | Capital(C): " + capital +
            "<br><br>" + "El tiempo invertido es: " + obtenerTiempoInvertido(capital, interes, tasaInteres);
    } else {
        p.innerHTML = "Por favor, complete al menos los campos requeridos para calcular la respuesta.";
    }
}

function calcularMontoFinal(capital, tasaInteres, interes, dias, meses, annos) {
    const tiempoTotal = annos + meses / 12 + dias / 365;
    const interesCalculado = capital * tasaInteres * tiempoTotal;
    const montoFinal = capital + interesCalculado;

    return montoFinal.toFixed(2);
}

function calcularInteres(capital, tasaInteres, dias, meses, annos) {
    const tiempo = annos + meses / 12 + dias / 365;
    const interesCalculado = capital * tasaInteres * tiempo;
    return interesCalculado.toFixed(2);
}

function calcularTasaInteres(capital, interes, dias, meses, annos) {
    const tiempo = annos * 12 + meses + dias / 31;
    const tiempoFinal = tiempo / 12 > 0 ? tiempo / 12 : 1;

    const tasaInteres = (interes / (capital * tiempoFinal)) * 100;
    return tasaInteres.toFixed(2);
}

function obtenerCapital(interes, tasaInteres, dias, meses, annos) {
    const tiempo = annos + meses / 12 + dias / 365;
    const capital = interes / (tasaInteres * tiempo);
    
    return capital.toFixed(2);
}

function obtenerTiempo(capital, interes, tasaInteres) {
    const tiempo = interes / (capital * (tasaInteres));
    const annos = Math.floor(tiempo);
    const meses = Math.floor((tiempo - annos) * 12);
    const dias = Math.floor(((tiempo - annos) * 12 - meses) * 31);

    return "El tiempo invertido es: " + annos + " años, " + meses + " meses y " + dias + " días";
}

function obtenerTiempoInvertido(capital, interes, tasaInteres) {
    const tiempo = interes / (capital * (tasaInteres));
    const annos = Math.floor(tiempo);
    const meses = Math.floor((tiempo - annos) * 12);
    const dias = Math.floor(((tiempo - annos) * 12 - meses) * 31);

    return "El tiempo invertido es: " + annos + " años, " + meses + " meses y " + dias + " días";
}