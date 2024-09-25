
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", realizarOperaciones);
});

function realizarOperaciones() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultados = "";

    // Verificar que los números sean válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese dos números válidos.");
        return;
    }

    // Ocultar los resultados previamente mostrados
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.classList.remove('fade-in', 'show');

    // Bucle de 5 iteraciones para realizar las operaciones
    for (var i = 1; i <= 5; i++) {
        switch (i) {
            case 1:
                // Primera iteración: Suma
                resultados += `Suma : ${num1} + ${num2} = ${num1 + num2}<br>`;
                break;
            case 2:
                // Segunda iteración: Resta
                resultados += `Resta : ${num1} - ${num2} = ${num1 - num2}<br>`;
                break;
            case 3:
                // Tercera iteración: Multiplicación
                resultados += `Multiplicación : ${num1} * ${num2} = ${num1 * num2}<br>`;
                break;
            case 4:
                // Cuarta iteración: División
                if (num2 !== 0) {
                    resultados += `División : ${num1} / ${num2} = ${num1 / num2}<br>`;
                } else {
                    resultados += `Dvisión : División por cero no permitida.<br>`;
                }
                break;
            case 5:
                // Quinta iteración: Módulo
                if (num2 !== 0) {
                    resultados += `Mod : ${num1} % ${num2} = ${num1 % num2}<br>`;
                } else {
                    resultados += `Mod : Módulo por cero no permitido.<br>`;
                }
                break;
        }
    }

    // Mostrar los resultados en el div
    resultadosDiv.innerHTML = resultados;
    resultadosDiv.classList.remove('hidden');

    // Agregar clase para el efecto de fade-in
    setTimeout(function () {
        resultadosDiv.classList.add('fade-in', 'show');
    }, 100);
}