function calculadora(operacao) {
    const primeiroNumero = Number(document.getElementById("num1").value);
    const segundoNumero = Number(document.getElementById("num2").value);
    let resultado = 0;

    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        alert("Digite somente números");
        return;
    }

    switch (operacao) {
        case "+":
            resultado = primeiroNumero + segundoNumero;
            break;
        case "-":
            resultado = primeiroNumero - segundoNumero;
            break;
        case "*":
            resultado = primeiroNumero * segundoNumero;
            break;
        case "/":
            if (segundoNumero === 0) {
                alert("Não é possível dividir por zero");
                return;
            }
            resultado = primeiroNumero / segundoNumero;
            break;
        default:
            alert("Operação Inválida");
            document.getElementById("resultado").innerText = "0";
            return;
    }

    document.getElementById("resultado").innerText = resultado;
}