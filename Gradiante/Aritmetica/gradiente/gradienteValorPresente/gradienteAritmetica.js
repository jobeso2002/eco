    let tiempo = document.getElementById("tiempo");
    let interes = document.getElementById("interes");
    let valor = document.getElementById("valor");
    let final = document.getElementById("final");
    let anualidad = document.getElementById("anualidad");
    let p = document.getElementById("p");
    let tipo = document.getElementById("tipoGradiente1").value;
    let tipo2 = document.getElementById("tipoGradiente2").value;
    function validar() {
    let opcion = $("input:radio[name=tipoGradiente]:checked").val();
    console.log(opcion);

    if (opcion == "creciente") {
        p.innerHTML =
        "Tiempo(n): " +
        tiempo.value +
        " cuotas | Intereses(i): " +
        interes.value +
        "% | Valor presente(P): $" +
        valor.value +
        " | Anualidad(g): $" +
        anualidad.value +
        " | Creciente" +
        "<br><br>" +
        "La gradiente en base al valor presente de este problema es: $" +
        calcularAnualidadCreciente(
            valor.value,
            interes.value,
            tiempo.value,
            anualidad.value
        );
    } else {
        p.innerHTML =
        "Tiempo(n): " +
        tiempo.value +
        " cuotas | Intereses(i): " +
        interes.value +
        "% | Valor presente(P): $" +
        valor.value +
        " | Anualidad(g): $" +
        anualidad.value +
        " | Decreciente" +
        "<br><br>" +
        "La gradiente en base al valor presente de este problema es: $" +
        calcularAnualidadDecreciente(
            valor.value,
            interes.value,
            tiempo.value,
            anualidad.value
        );
    }

    document.getElementById("tiempo").value = null;
    document.getElementById("interes").value = null;
    document.getElementById("valor").value = null;
    document.getElementById("anualidad").value = null;
    }

    function calcularAnualidadCreciente(valor, interes, tiempo, anualidad) {
    interes = interes / 100;
    console.log(interes, "interes");
    valor = parseInt(valor);
    anualidad = parseInt(anualidad);

    let potencia = Math.pow(1 + interes, -tiempo);
    let potencia2 = Math.pow(1 + interes, tiempo);

    let primeraParte = (1 - potencia) / interes;

    let segundaParte = anualidad * primeraParte;

    let parteSuperior = valor - segundaParte;

    let terceraParte = primeraParte - tiempo / potencia2;
    let cuartaParte = 1 / interes;
    let parteInferior = cuartaParte * terceraParte;

    console.log(parteSuperior);
    console.log(parteInferior);
    gradiente = parteSuperior / parteInferior;

    return gradiente.toFixed(2);
    }

    function calcularAnualidadDecreciente(valor, interes, tiempo, anualidad) {
    interes = interes / 100;
    console.log(interes, "interes");
    valor = parseInt(valor);
    anualidad = parseInt(anualidad);

    let potencia = Math.pow(1 + interes, -tiempo);
    let potencia2 = Math.pow(1 + interes, tiempo);

    let primeraParte = (1 - potencia) / interes;

    let segundaParte = anualidad * primeraParte;

    let parteSuperior = valor + segundaParte;

    let terceraParte = primeraParte - tiempo / potencia2;
    let cuartaParte = 1 / interes;
    let parteInferior = cuartaParte * terceraParte;

    console.log(parteSuperior);
    console.log(parteInferior);
    gradiente = parteSuperior / parteInferior;

    return gradiente.toFixed(2);
    }
