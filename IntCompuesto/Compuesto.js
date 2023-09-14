

let p = document.getElementById("p");

function respuesta(){
    p.innerHTML = ""; // Limpia el contenido anterior

    let capital = parseFloat(document.getElementById("valorPresente").value.replace(',', '.'));
    let tasainte = parseFloat(document.getElementById("tasainte").value.replace(',', '.')) / 100;
    let num_periodo = parseFloat(document.getElementById("numPeriodo").value.replace(',', '.'));
    let montoComp = parseFloat(document.getElementById("montocompuesto").value.replace(',', '.'));
    
    let dias = parseFloat(document.getElementById("dias").value.replace(',', '.'));
    let mes = parseFloat(document.getElementById("meses").value.replace(',', '.'));
    let selectedFrequency = document.getElementById("frequency").value;
    let frequencies = ['Anual', 'Semestral', 'Trimestral', 'Mensual', 'Diaria'];

    let result = "<h2>Resultados:</h2>";

    for (let f = 0; f < frequencies.length; f++) {
        let balance = capital;

        if (frequencies[f] === selectedFrequency) {
            result += `<h3>Frecuencia1 ${frequencies[f]}:</h3>`;

            for (let i = 0; i < num_periodo; i++) {
                let frequency;

                switch (selectedFrequency) {
                    case 'Anual':
                        frequency = 1;
                        break;
                    case 'Semestral':
                        frequency = 2;
                        break;
                    case 'Trimestral':
                        frequency = 4;
                        break;
                    case 'Mensual':
                        frequency = 12;
                        break;
                    case 'Diaria':
                        frequency = 365; // Adjust this value if needed
                        break;
                    default:
                        "frecuencia invalidad"
                }

                for (let j = 0; j < frequency; j++) {
                    let interest = balance * (tasainte) / frequency;
                    balance += interest;
                }

                result += `<p>Año ${i + 1}: ${balance.toFixed(2)}</p>`;
            
            }

            document.getElementById("output").innerHTML = result;

        }
        
    }
    switch (selectedFrequency) {
        case 'Anual':
            if (!isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && isNaN(montoComp)) {
            p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Tiempo(T): " + num_periodo + "<br><br>" + "El Monto Compuesto es de: $" + MontoCompuesto(capital, tasainte, num_periodo, dias, mes) + "<br>";

            } else if (!isNaN(capital) && !isNaN(tasainte) && isNaN(num_periodo) && isNaN(dias) && isNaN(mes) && !isNaN(montoComp)) {
            p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Monto Compuesto(T): " + montoComp + "<br><br>" + "El tiempo obtenido es de: " + TiempoOperacion(capital, tasainte, montoComp )+ "<br>";
            

            } else if (!isNaN(capital) && isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
            p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "La tasa de interés es de: " + TasaInteres(capital, montoComp, num_periodo, dias, mes) + "%"+ "<br>";
            
            } else if (isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
            p.innerHTML += "Cálculo Anual: Tasa Interes(TS): " + (tasainte * 100) + " % | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "El capital es de: $" + Capital(tasainte, montoComp, num_periodo, dias, mes)+ "<br>";
                
            } else {
                p.innerHTML = "Por favor, complete al menos los campos requeridos para calcular la respuesta.";
            }
            break;
        case 'Semestral':
            if (!isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Tiempo(T): " + num_periodo + "<br><br>" + "El Monto Compuesto es de: $" + MontoCompuesto(capital, tasainte, num_periodo, dias, mes)+ "<br>";
                
            } else if (!isNaN(capital) && !isNaN(tasainte) && isNaN(num_periodo) && isNaN(dias) && isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Monto Compuesto(T): " + montoComp + "<br><br>" + "El tiempo obtenido es de: $" + TiempoOperacion(capital, tasainte, montoComp)+ "<br>";
                
            } else if (!isNaN(capital) && isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "La tasa de interés es de: $" + TasaInteres(capital, montoComp, num_periodo, dias, mes)+"%"+ "<br>";
                
            } else if (isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Tasa Interes(TS): " + (tasainte * 100) + " % | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "El capital es de: $" + Capital(tasainte, montoComp, num_periodo, dias, mes)+ "<br>";
                
            } else {
                p.innerHTML = "Por favor, complete al menos los campos requeridos para calcular la respuesta.";
            }
            break;
        case 'Trimestral':
            if (!isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Tiempo(T): " + num_periodo + "<br><br>" + "El Monto Compuesto es de: $" + MontoCompuesto(capital, tasainte, num_periodo, dias, mes)+ "<br>";
                
            } else if (!isNaN(capital) && !isNaN(tasainte) && isNaN(num_periodo) && isNaN(dias) && isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Monto Compuesto(T): " + montoComp + "<br><br>" + "El tiempo obtenido es de: $" + TiempoOperacion(capital, tasainte, montoComp)+ "<br>";
                
            } else if (!isNaN(capital) && isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "La tasa de interés es de: $" + TasaInteres(capital, montoComp, num_periodo, dias, mes) +"%" + "<br>";
                
            } else if (isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Tasa Interes(TS): " + (tasainte * 100) + " % | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "El capital es de: $" + Capital(tasainte, montoComp, num_periodo, dias, mes)+ "<br>";
                
            } else {
                p.innerHTML = "Por favor, complete al menos los campos requeridos para calcular la respuesta.";
            }
            break;
        case 'Mensual':
            if (!isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Tiempo(T): " + num_periodo + "<br><br>" + "El Monto Compuesto es de: $" + MontoCompuesto(capital, tasainte, num_periodo,dias, mes)+ "<br>";
                
            } else if (!isNaN(capital) && !isNaN(tasainte) && isNaN(num_periodo) && isNaN(dias) && isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Monto Compuesto(T): " + montoComp + "<br><br>" + "El tiempo obtenido es de: $" + TiempoOperacion(capital, tasainte, montoComp)+ "<br>";
                
            } else if (!isNaN(capital) && isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "La tasa de interés es de: $" + TasaInteres(capital, montoComp, num_periodo, dias, mes)+ "<br>";
                
            } else if (isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Tasa Interes(TS): " + (tasainte * 100) + " % | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "El capital es de: $" + Capital(tasainte, montoComp, num_periodo, dias, mes)+ "<br>";
                
            } else {
                p.innerHTML = "Por favor, complete al menos los campos requeridos para calcular la respuesta.";
            }
            break;
        case 'Diaria':
            if (!isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Tiempo(T): " + num_periodo + "<br><br>" + "El Monto Compuesto es de: $" + MontoCompuesto(capital, tasainte, num_periodo, dias, mes)+ "<br>";
                
            } else if (!isNaN(capital) && !isNaN(tasainte) && isNaN(num_periodo) && isNaN(dias) && isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tasa Interes(TS): " + (tasainte * 100) + "% | Monto Compuesto(T): " + montoComp + "<br><br>" + "El tiempo obtenido es de: $" + TiempoOperacion(capital, tasainte, montoComp)+ "<br>";
                
            } else if (!isNaN(capital) && isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Capital(C): " + capital + "  | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "La tasa de interés es de: $" + TasaInteres(capital, montoComp, num_periodo, dias, mes)+"%" + "<br>";
                
            } else if (isNaN(capital) && !isNaN(tasainte) && !isNaN(num_periodo) && !isNaN(dias) && !isNaN(mes) && !isNaN(montoComp)) {
                p.innerHTML += "Cálculo Anual: Tasa Interes(TS): " + (tasainte * 100) + " % | Tiempo(T): " + num_periodo + " | Monto Compuesto(T): " + montoComp + "<br><br>" + "El capital es de: $" + Capital(tasainte, montoComp, num_periodo, dias, mes)+ "<br>";
                
            } else {
                p.innerHTML = "Por favor, complete al menos los campos requeridos para calcular la respuesta.";
            }
            break;
        default:
            p.innerHTML = "frecuencia invalidad";
    }

}


//calcular el monto compuesto (MC)
function MontoCompuesto(capital, tasainte, num_periodo, dias, mes){
    var totalMonths = num_periodo * 12 + mes + (dias / 30);
    var n = 12; 
    var tf = totalMonths / 12;
    var MC = capital * Math.pow((1 + tasainte / n), n * tf);
    return MC.toFixed(2);
}

//para sacar el tiempo de duracion
function TiempoOperacion(capital,tasainte,montoComp){
    var n = 1;
    var tiempOpera =  (Math.log(montoComp / capital) / (n * Math.log(1 + tasainte / n)));
    
    return tiempOpera.toFixed(2);
}

//para sacar la tasa de interes
function TasaInteres(capital, montoComp, num_periodo, dias, mes){
    var totalMonths = num_periodo * 12 + mes + (dias / 30);
    let n = 12;
    var tf = totalMonths / 12;
    var tasainteres =  (Math.pow((montoComp / capital), (1 / (n * tf))) - 1) * n * 100;
    return tasainteres.toFixed(2);
}

//para sacar el capital
function Capital(tasainte, montoComp, num_periodo, dias, mes){
    var totalMonths = num_periodo * 12 + mes + (dias / 30);
    let n = 12;
    var tf = totalMonths / 12;
    var capital =  montoComp / Math.pow(1 + tasainte / n, n * tf);
    return capital.toFixed(2);
}
