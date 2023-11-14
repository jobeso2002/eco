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
        " | Gradiente(g): $" +
        gradiente.value +
        " | Creciente" +
        "<br><br>" +
        "El Valor futuro de este problema es: $" +
        calcularValorFuturoCreciente(
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
        " | Gradiente(g): $" +
        gradiente.value +
        " | Decreciente" +
        "<br><br>" +
        "El Valor futuro de este problema es: $" +
        calcularValorFuturoDecreciente(
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

    function calcularValorFuturoCreciente(inicial, interes, tiempo, gradiente) {
    let primeraParte =
        (Math.pow(1 + interes / 100, tiempo) - 1) / (interes / 100);
    let segundaParte = gradiente / (interes / 100);
    let terceraParte =
        (Math.pow(1 + interes / 100, tiempo) - 1) / (interes / 100) - tiempo;

    console.log(primeraParte);
    console.log(segundaParte);
    console.log(terceraParte);
    let valorFuturo = inicial * primeraParte + segundaParte * terceraParte;
    return valorFuturo.toFixed(2);
    }
    function calcularValorFuturoDecreciente(inicial, interes, tiempo, gradiente) {
    let primeraParte =
        (Math.pow(1 + interes / 100, tiempo) - 1) / (interes / 100);
    let segundaParte = gradiente / (interes / 100);
    let terceraParte =
        (Math.pow(1 + interes / 100, tiempo) - 1) / (interes / 100) - tiempo;

    console.log(primeraParte);
    console.log(segundaParte);
    console.log(terceraParte);
    let valorFuturo = (inicial * primeraParte) - (segundaParte * terceraParte);
    return valorFuturo.toFixed(2);
    }
