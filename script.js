let input = "0";
let prevInput = "";
let op = null;

const display = document.getElementById("result");
const buttons = document.getElementsByClassName("bt");

function updateDisplay() {
    display.textContent = `Result: ${input}`;
}

for (let button of buttons) {
    button.addEventListener("click", handleClick);
}

function handleClick(evt) {
    const value = evt.target.textContent;

    if (value >= "0" && value <= "9") {
        if (input === "0") {
            input = value;
        } else {
            input += value;
        }
    } else if (value === "+" || value === "-" || value === "x" || value === "/" || value === "%") {
        prevInput = input;
        op = value;
        input = "0";
    } else if (value === "." && !input.includes(".")) {
        input += ".";
    } else if (value === "=" && op && prevInput) {
        let result;
        const prev = parseFloat(prevInput);
        const current = parseFloat(input);

        switch (op) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "x":
                result = prev * current;
                break;
            case "/":
                if (current === 0) {
                    alert("Não é possível dividir por 0");
                    return;
                } else {
                    result = prev / current;
                }
                break;
            case "%":
                result = (prev * current) / 100;
                break;
            default:
                alert("Operador inválido");
                return;
        }
        input = result.toString();
        op = "";
        prevInput = "";
    } else if (value === "Clear") {
        input = "0";
        prevInput = "";
        op = "";
    }

    updateDisplay();
}
