    let tiempo = document.getElementById("tiempo");
    let interes = document.getElementById("interes");
    let inicial = document.getElementById("inicial");
    let final = document.getElementById("final");
    let gradiente = document.getElementById("gradiente");
    let p = document.getElementById("p");
    let tipo = document.getElementById("tipoGradiente1").value;
    let tipo2 = document.getElementById("tipoGradiente2").value;

    function validar(){
    console.log(tiempo.value);
    if(tiempo.value == ""){
        window.alert("Porfavor digite el tiempo...")
    }else{
        if(interes.value == ""){
        window.alert("Porfavor digite la tasa de interes...")
        
        }else{
        if(inicial.value == ""){
            
            window.alert("Porfavor digite el valor inicial...")
        }else{
            if(gradiente.value==""){
            window.alert("Porfavor digite la gradiente...")

            }else{
            validacion()

            }
        }
        }
    }
    }

    function validacion() {
    let opcion = $("input:radio[name=tipoGradiente]:checked").val();
    console.log(opcion);

    if (opcion == "creciente") {
        p.innerHTML =
        "Tiempo(n): " +
        tiempo.value +
        " cuotas | Intereses(i): " +
        interes.value +
        "% | Monto inicial(P): $" +
        inicial.value +
        " | Gradiente(g): " +
        gradiente.value +
        "% | Creciente" +
        "<br><br>" +
        "El Valor Presente de este problema es: $" +
        calcularValorPresenteCreciente(
            inicial.value,
            interes.value,
            tiempo.value,
            gradiente.value
        );
    } else {
        p.innerHTML =
        "Tiempo(n): " +
        tiempo.value +
        " cuotas | Intereses(i): " +
        interes.value +
        "% | Monto inicial(P): $" +
        inicial.value +
        " | Gradiente(g): " +
        gradiente.value +
        "% | Decreciente" +
        "<br><br>" +
        "El Valor Presente de este problema es: $" +
        calcularValorPresenteDecreciente(
            inicial.value,
            interes.value,
            tiempo.value,
            gradiente.value
        );
    }

    document.getElementById("tiempo").value = null;
    document.getElementById("interes").value = null;
    document.getElementById("inicial").value = null;
    document.getElementById("gradiente").value = null;
    }

    function calcularValorPresenteCreciente(inicial, interes, tiempo, gradiente) {
        interes = interes / 100;
        gradiente = gradiente / 100;

        if (gradiente !== interes) {
            let parteIzquierda = inicial / (interes - gradiente);
            let primeraParte = (1 + gradiente) / (1 + interes);
            let segundaParte = Math.pow(primeraParte, tiempo);
            let parteDerecha = 1 - segundaParte;
            valorPresente = parteIzquierda * parteDerecha;
        } else {
            let parteIzquierda = tiempo * inicial;
            let parteDerecha = 1 + interes;
            valorPresente = parteIzquierda / parteDerecha;
        }

        return valorPresente.toFixed(2);
    }

    function calcularValorPresenteDecreciente(inicial, interes, tiempo, gradiente) {
        interes = interes / 100;
        gradiente = gradiente / 100;

        if (interes !== gradiente) {
            let parteIzquierda = inicial / (interes + gradiente);
            let primeraParte = (1 - gradiente) / (1 + interes);
            let segundaParte = Math.pow(primeraParte, tiempo);
            let parteDerecha = 1 - segundaParte;
            valorPresente = parteIzquierda * parteDerecha;
        } else {
            let parteIzquierda = inicial / (interes + interes);
            let primeraParte = (1 - interes) / (1 + interes);
            let segundaParte = Math.pow(primeraParte, tiempo);
            let parteDerecha = 1 - segundaParte;
            valorPresente = parteIzquierda * parteDerecha;
        }

        return valorPresente.toFixed(2);
    }

    