class Calculadora {
    constructor(_operand1 = 0, _operand2 = 0, _operation = "") {
        this.operand1 = _operand1;
        this.operand2 = _operand2;
        this.operation = _operation;
    }

    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }
    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }
    setOperation(_operation) {
        this.operation = _operation;
    }
    getResult() {
        let resultado = 0;
        switch (this.operation) {
            case "soma":
                resultado = this.operand1 + this.operand2;
                break;
            case "subtracao":
                resultado = this.operand1 - this.operand2;
                break;
            case "divisao":
                if (this.operand2 === 0) {
                    resultado = "Divisao por zero!";
                    break;
                }
                resultado = this.operand1 / this.operand2;
                break;
            case "multiplicacao":
                resultado = this.operand1 * this.operand2;
                break;
            default:
                resultado = "Operacao invalida!";
                break;
        }
        return resultado;
    }
    clearCalculator() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operation = "";
    }
}

function insert(elemento) {
    let operand1;
    switch (elemento) {
        case "+":
            operand1 = document.getElementById("saida").innerHTML;
            calculadora.setOperand1(parseFloat(operand1));
            calculadora.setOperation("soma");

            document.getElementById("historico-valor").innerHTML =
                operand1 + elemento;
            document.getElementById("saida").innerHTML = "";
            break;
        case "-":
            operand1 = document.getElementById("saida").innerHTML;
            calculadora.setOperand1(parseFloat(operand1));
            calculadora.setOperation("subtracao");
            document.getElementById("historico-valor").innerHTML =
                operand1 + elemento;
            document.getElementById("saida").innerHTML = "";
            break;
        case "*":
            operand1 = document.getElementById("saida").innerHTML;
            calculadora.setOperand1(parseFloat(operand1));
            calculadora.setOperation("multiplicacao");
            document.getElementById("historico-valor").innerHTML =
                operand1 + elemento;
            document.getElementById("saida").innerHTML = "";
            break;
        case "/":
            operand1 = document.getElementById("saida").innerHTML;
            calculadora.setOperand1(parseFloat(operand1));
            calculadora.setOperation("divisao");
            document.getElementById("historico-valor").innerHTML =
                operand1 + elemento;
            document.getElementById("saida").innerHTML = "";
            break;
        default:
            let num = document.getElementById("saida").innerHTML;
            document.getElementById("saida").innerHTML = num + elemento;
            break;
    }
}

function clean() {
    document.getElementById("saida").innerHTML = 0;
    calculadora.clearCalculator();
}

function back() {
    let resultado = document.getElementById("saida").innerHTML;
    document.getElementById("saida").innerHTML = resultado.substring(
        0,
        resultado.length - 1
    );
}

function calculate() {
    let operand2 = document.getElementById("saida").innerHTML;
    calculadora.setOperand2(parseFloat(operand2));
    const resultado = calculadora.getResult();
    const historico = document.getElementById("historico-valor").innerHTML;
    document.getElementById("historico-valor").innerHTML = historico + operand2;
    document.getElementById("saida").innerHTML = resultado;
}

const calculadora = new Calculadora();
/*
console.log(calculo1.getResult()); //15

const calculo2 = new Calculadora();

calculo2.setOperand1(15);
calculo2.setOperand2(3);
calculo2.setOperation("divisao");

console.log(calculo2.getResult()); //5

calculo2.clearCalculator();
console.log(calculo2.getResult()); //Operacao invalida!

calculo2.clearCalculator();
calculo2.setOperand1(15);
calculo2.setOperation("divisao");
console.log(calculo2.getResult()); //Divisao por zero!
*/
