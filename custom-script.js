document.addEventListener("DOMContentLoaded", function () {
    let currentInput = "0";
    let operator = "";
    let prevInput = "0";
    let resultDisplayed = false;

    const display = document.getElementById("custom-display");

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.innerText;

            if (resultDisplayed) {
                currentInput = buttonText;
                resultDisplayed = false;
            } else {
                currentInput += buttonText;
            }

            if (buttonText === "C") {
                currentInput = "0";
                prevInput = "0";
                operator = "";
            } else if (buttonText === "=") {
                prevInput = parseFloat(prevInput);
                currentInput = parseFloat(currentInput);
                switch (operator) {
                    case "+":
                        currentInput = prevInput + currentInput;
                        break;
                    case "-":
                        currentInput = prevInput - currentInput;
                        break;
                    case "*":
                        currentInput = prevInput * currentInput;
                        break;
                    case "/":
                        currentInput = prevInput / currentInput;
                        break;
                }
                operator = "";
                resultDisplayed = true;
            } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
                if (operator !== "") {
                    prevInput = parseFloat(prevInput);
                    currentInput = parseFloat(currentInput);

                    switch (operator) {
                        case "+":
                            currentInput = prevInput + currentInput;
                            break;
                            case "-":
                                currentInput = prevInput - currentInput;
                                break;
                            case "*":
                                currentInput = prevInput * currentInput;
                                break;
                            case "/":
                                currentInput = prevInput / currentInput;
                                break;
                        }
                    }
                    prevInput = currentInput;
                    operator = buttonText;
                    currentInput = "";
                }
    
                display.innerText = currentInput;
            });
        });
    });