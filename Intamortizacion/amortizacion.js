document.addEventListener('DOMContentLoaded', function () {
    const amortizationForm = document.getElementById('amortization-form');
    const amortizationTable = document.getElementById('amortization-table');
    const interestTotalElement = document.getElementById('interest-total');
    const amortizationTotalElement = document.getElementById('amortization-total');

    // Encabezados específicos para cada sistema de amortización
    const titleTableHeaderAmericano = document.getElementById('table-title-americano');
    const titleTableHeaderLineal = document.getElementById('table-title-lineal');
    const titleTableHeaderFrances = document.getElementById('table-title-frances');
    const titleTableHeaderAleman = document.getElementById('table-title-aleman');
    const tableHeaderAmericano = document.getElementById('table-header-americano');
    const tableHeaderLineal = document.getElementById('table-header-lineal');
    const tableHeaderFrances = document.getElementById('table-header-frances');
    const tableHeaderAleman = document.getElementById('table-header-aleman');
    

    amortizationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Limpiar la tabla de amortización y las sumas
        while (amortizationTable.rows.length > 1) {
            amortizationTable.deleteRow(1);
        }
        
        interestTotalElement.textContent = '0.00';
        amortizationTotalElement.textContent = '0.00';

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
        titleTableHeaderAmericano.style.display = 'none';
        titleTableHeaderLineal.style.display = 'none';
        titleTableHeaderFrances.style.display = 'none';
        titleTableHeaderAleman.style.display = 'none';
        // Determinar cuál sistema de amortización está seleccionado y mostrar el encabezado correspondiente
        if (amortizationType === 'americano') {
            amortizationTable.style.display = 'table';
            tableHeaderAmericano.style.display = 'table-row';
            titleTableHeaderAmericano.style.display = 'block';
        } else if (amortizationType === 'lineal') {
            amortizationTable.style.display = 'table';
            tableHeaderLineal.style.display = 'table-row';
            titleTableHeaderLineal.style.display = 'block';
        } else if (amortizationType === 'frances') {
            amortizationTable.style.display = 'table';
            tableHeaderFrances.style.display = 'table-row';
            titleTableHeaderFrances.style.display = 'block';
        } else if (amortizationType === 'aleman') {
            amortizationTable.style.display = 'table';
            tableHeaderAleman.style.display = 'table-row';
            titleTableHeaderAleman.style.display = 'block';
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
            const newRow = amortizationTable.insertRow(-1);
            const cellNumber = newRow.insertCell(0);
            const cellInterest = newRow.insertCell(1);
            const cellAmortization = newRow.insertCell(2);
            const cellTotalPayment = newRow.insertCell(3);
            const cellBalance = newRow.insertCell(4);

            cellNumber.textContent = month;
            cellInterest.textContent = interestPayment.toFixed(2);
            cellAmortization.textContent = principalPayment.toFixed(2);
            cellTotalPayment.textContent = monthlyPayment.toFixed(2);
            cellBalance.textContent = currentBalance.toFixed(2);

            month++;
        }

        // Mostrar las sumas finales
        interestTotalElement.textContent = totalInterest.toFixed(2);
        amortizationTotalElement.textContent = totalAmortization.toFixed(2);

        // Mostrar la tabla de amortización
        amortizationTable.style.display = 'table';
    });
});
