    let tiempo = document.getElementById("tiempo");
    let inicial = document.getElementById("inicial");
    let gradiente = document.getElementById("gradiente");
    let p = document.getElementById("p");
    let tipo = document.getElementById("tipoGradiente1").value;
    let tipo2 = document.getElementById("tipoGradiente2").value;

    function validar() {
    console.log(tiempo.value);
    if (tiempo.value == "") {
        window.alert("Porfavor digite el numero de cuotas...");
    } else {
        if (inicial.value == "") {
        window.alert("Porfavor digite el valor inicial...");
        } else {
        if (gradiente.value == "") {
            window.alert("Porfavor digite la gradiente...");
        } else {
            validacion();
        }
        }
    }
    }

    function validacion() {
    let opcion = $("input:radio[name=tipoGradiente]:checked").val();
    console.log(opcion);

    if (opcion == "creciente") {
        p.innerHTML =
        "Cuota(n): " +
        tiempo.value +
        " | Monto inicial(P): $" +
        inicial.value +
        " | Gradiente(g): $" +
        gradiente.value +
        " | Creciente" +
        "<br><br>" +
        "El Valor a pagar en la Cuota " +
        tiempo.value +
        " es: $" +
        calcularElementoNCreciente(inicial.value, tiempo.value, gradiente.value);
    } else {
        p.innerHTML =
        "Cuota(n): " +
        tiempo.value +
        " | Monto inicial(P): $" +
        inicial.value +
        " | Gradiente(g): $" +
        gradiente.value +
        " | Decreciente" +
        "<br><br>" +
        "El Valor a pagar en la Cuota " +
        tiempo.value +
        " es: $" +
        calcularElementoNDecreciente(
            inicial.value,
            tiempo.value,
            gradiente.value
        );
    }

    document.getElementById("tiempo").value = null;
    document.getElementById("inicial").value = null;
    document.getElementById("gradiente").value = null;
    }

    function calcularElementoNCreciente(inicial, tiempo, gradiente) {
    inicial = parseInt(inicial);
    valorElementoN = inicial + (tiempo - 1) * gradiente;

    return valorElementoN;
    }
    function calcularElementoNDecreciente(inicial, tiempo, gradiente) {
    inicial = parseInt(inicial);

    valorElementoN = inicial + (tiempo - 1) * -gradiente;

    return valorElementoN;
    }
