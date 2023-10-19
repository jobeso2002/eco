    let tiempo = document.getElementById("tiempo");
    let interes = document.getElementById("interes");
    let valor = document.getElementById("valor");
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
        if(valor.value == ""){
            
            window.alert("Porfavor digite el valor presente...")
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
        "% | Valor presente(P): $" +
        valor.value +
        " | Gradiente(g): $" +
        gradiente.value +
        " | Creciente" +
        "<br><br>" +
        "La anualidad en base al valor presente de este problema es: $" +
        calcularAnualidadCreciente(
            valor.value,
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
        "% | Valor presente(P): $" +
        valor.value +
        " | Gradiente(g): $" +
        gradiente.value +
        " | Decreciente" +
        "<br><br>" +
        "La anualidad en base al valor presente de este problema es: $" +
        calcularAnualidadDecreciente(
            valor.value,
            interes.value,
            tiempo.value,
            gradiente.value
        );
    }

    document.getElementById("tiempo").value = null;
    document.getElementById("interes").value = null;
    document.getElementById("valor").value = null;
    document.getElementById("gradiente").value = null;
    }

    function calcularAnualidadCreciente(valor, interes, tiempo, gradiente) {
    interes = interes / 100
    console.log( interes,"interes");
    valor = parseFloat(valor)
    let potencia = Math.pow(1 + interes, -tiempo)
    let potencia2 = Math.pow(1 + interes, tiempo)
    console.log(potencia);
    console.log(potencia2);
    let primeraParte  = (1-potencia)/interes
    let segundaParte = primeraParte - (tiempo/potencia2)
    let terceraParte = primeraParte
    let cuartaParte = (gradiente/interes)*segundaParte
    let quintaParte = valor - cuartaParte
    let sestaParte = quintaParte / terceraParte

    console.log(potencia,"potencia");
    console.log(cuartaParte,"cuarta parte g/i  * resto");
    console.log(primeraParte,"primera ");
    console.log(segundaParte,"segunda ");
    anualidad = sestaParte
    

    return anualidad.toFixed(2);
    }

    function calcularAnualidadDecreciente(valor, interes, tiempo, gradiente) {
    interes = interes / 100
    console.log( interes,"interes");
    valor = parseFloat(valor)
    let potencia = Math.pow(1 + interes, -tiempo)
    let potencia2 = Math.pow(1 + interes, tiempo)
    console.log(potencia);
    console.log(potencia2);
    let primeraParte  = (1-potencia)/interes
    let segundaParte = primeraParte - (tiempo/potencia2)
    let terceraParte = primeraParte
    let cuartaParte = (gradiente/interes)*segundaParte
    let quintaParte = valor + cuartaParte
    let sestaParte = quintaParte / terceraParte

    console.log(potencia,"potencia");
    console.log(cuartaParte,"cuarta parte g/i  * resto");
    console.log(primeraParte,"primera ");
    console.log(segundaParte,"segunda ");
    anualidad = sestaParte
    

    return anualidad.toFixed(2);
    }
