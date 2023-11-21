document.addEventListener('DOMContentLoaded', function () {
    const amortizationForm = document.getElementById('amortization-form');
    const amortizationTable = document.getElementById('amortization-table');
    const interestTotalElement = document.getElementById('interest-total');
    const amortizationTotalElement = document.getElementById('amortization-total');

    // Encabezados específicos para cada sistema de amortización
    const tableHeaderAmericano = document.getElementById('table-header-americano');
    const tableHeaderLineal = document.getElementById('table-header-lineal');
    const tableHeaderFrances = document.getElementById('table-header-frances');
    const tableHeaderAleman = document.getElementById('table-header-aleman');

    amortizationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const loanAmount = parseFloat(document.getElementById('loan-amount').value);
        const annualInterestRate = parseFloat(document.getElementById('annual-interest-rate').value) / 100;
        const loanTerm = parseInt(document.getElementById('loan-term').value);
        const amortizationType = document.getElementById('amortization-type').value;
        const interestFrequency = document.getElementById('interest-frequency').value;

        if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTerm) || loanAmount <= 0 || annualInterestRate <= 0 || loanTerm <= 0) {
            alert('Por favor, ingrese valores válidos para el monto del préstamo, tasa de interés y plazo.');
            return;
        }

        // Calcular la tasa de interés mensual en función de la frecuencia
        let monthlyInterestRate;
        if (interestFrequency === 'anual') {
            monthlyInterestRate = annualInterestRate / 12;
        } else if (interestFrequency === 'semestral') {
            monthlyInterestRate = annualInterestRate / 2 / 12;
        } else if (interestFrequency === 'bimestral') {
            monthlyInterestRate = annualInterestRate / 6 / 12;
        } else if (interestFrequency === 'mensual') {
            monthlyInterestRate = annualInterestRate / 12 / 12;
        } else if (interestFrequency === 'diaria') {
            monthlyInterestRate = annualInterestRate / 365 / 30;
        } else if (interestFrequency === 'trimestral') {
            monthlyInterestRate = annualInterestRate / 4 / 12;
        } else if (interestFrequency === 'cuatrimestral') {
            monthlyInterestRate = annualInterestRate / 3 / 12;
        } else if (interestFrequency === 'semanal') {
            monthlyInterestRate = annualInterestRate / 52 / 12;
        }

        // Limpiar la tabla de amortización y las sumas
        amortizationTable.innerHTML = '';
        interestTotalElement.textContent = '0.00';
        amortizationTotalElement.textContent = '0.00';

        // Ocultar todos los encabezados de tabla específicos
        tableHeaderAmericano.style.display = 'none';
        tableHeaderLineal.style.display = 'none';
        tableHeaderFrances.style.display = 'none';
        tableHeaderAleman.style.display = 'none';

        // Determinar cuál sistema de amortización está seleccionado y mostrar el encabezado correspondiente
        if (amortizationType === 'americano') {
            tableHeaderAmericano.style.display = 'table-row';
        } else if (amortizationType === 'lineal') {
            tableHeaderLineal.style.display = 'table-row';
        } else if (amortizationType === 'frances') {
            tableHeaderFrances.style.display = 'table-row';
        } else if (amortizationType === 'aleman') {
            tableHeaderAleman.style.display = 'table-row';
        }

        let currentBalance = loanAmount;
        let month = 1;
        let totalInterest = 0;
        let totalAmortization = 0;

        while (month <= loanTerm) {
            let monthlyPayment = 0;
            let interestPayment = 0;
            let principalPayment = 0;

            if (amortizationType === 'americano') {
                // Sistema de Amortización Americano
                if (month === loanTerm) {
                    monthlyPayment = currentBalance + (currentBalance * monthlyInterestRate);
                } else {
                    monthlyPayment = currentBalance * monthlyInterestRate;
                }
                interestPayment = monthlyPayment;
                principalPayment = 0;
            } else if (amortizationType === 'lineal') {
                // Sistema de Amortización Lineal
                monthlyPayment = loanAmount / loanTerm + currentBalance * monthlyInterestRate;
                interestPayment = currentBalance * monthlyInterestRate;
                principalPayment = loanAmount / loanTerm;
            } else if (amortizationType === 'frances') {
                // Sistema de Amortización Francés
                monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm)));
                interestPayment = currentBalance * monthlyInterestRate;
                principalPayment = monthlyPayment - interestPayment;
            } else if (amortizationType === 'aleman') {
                // Sistema de Amortización Alemán
                interestPayment = currentBalance * monthlyInterestRate;
                principalPayment = monthlyPayment - interestPayment;
                monthlyPayment = principalPayment + interestPayment;
            }

            currentBalance -= principalPayment;
            totalInterest += interestPayment;
            totalAmortization += principalPayment;

            // Agregar una fila a la tabla de amortización
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${month}</td><td>${currentBalance.toFixed(2)}</td><td>${monthlyPayment.toFixed(2)}</td><td>${interestPayment.toFixed(2)}</td><td>${principalPayment.toFixed(2)}</td>`;
            amortizationTable.appendChild(newRow);

            month++;
        }

        // Mostrar las sumas finales
        interestTotalElement.textContent = totalInterest.toFixed(2);
        amortizationTotalElement.textContent = totalAmortization.toFixed(2);

        // Mostrar la tabla de amortización
        amortizationTable.style.display = 'table';
    });
});
