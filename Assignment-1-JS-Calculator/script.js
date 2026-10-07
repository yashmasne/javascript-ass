let selectedOperator = "+";

// Select operator buttons
const operators = document.querySelectorAll(".operator");

operators.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        operators.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class to selected button
        this.classList.add("active");

        // Store selected operator
        selectedOperator = this.getAttribute("data-op");

    });

});


// Calculate function
function calculate() {

    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");

    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    const resultElement = document.getElementById("result");
    const expressionElement = document.getElementById("expression");


    // Check empty input
    if (num1Input.value === "" || num2Input.value === "") {

        resultElement.innerText = "Enter numbers";

        expressionElement.innerText =
            "Please enter both numbers";

        return;
    }


    let result;


    // Perform calculation
    switch (selectedOperator) {

        case "+":

            result = num1 + num2;

            break;


        case "-":

            result = num1 - num2;

            break;


        case "*":

            result = num1 * num2;

            break;


        case "/":

            if (num2 === 0) {

                result = "Cannot divide by zero";

            } else {

                result = num1 / num2;

            }

            break;


        default:

            result = "Invalid operation";

    }


    // Display operator symbol
    let symbol;

    if (selectedOperator === "*") {

        symbol = "×";

    } else if (selectedOperator === "/") {

        symbol = "÷";

    } else {

        symbol = selectedOperator;

    }


    // Display expression
    expressionElement.innerText =
        num1 + " " + symbol + " " + num2;


    // Display result
    resultElement.innerText = result;


    // Add animation
    resultElement.classList.remove("result-animation");

    void resultElement.offsetWidth;

    resultElement.classList.add("result-animation");


    // Add to history
    if (
        result !== "Cannot divide by zero" &&
        result !== "Invalid operation"
    ) {

        addHistory(
            num1 + " " + symbol + " " + num2,
            result
        );

    }

}


// Add calculation to history
function addHistory(expression, result) {

    const history = document.getElementById("history");


    // Remove "No calculations yet"
    const empty = history.querySelector(".empty");

    if (empty) {

        empty.remove();

    }


    // Create history item
    const item = document.createElement("div");

    item.className = "history-item";


    // Create expression text
    const expressionText = document.createElement("span");

    expressionText.innerText = expression;


    // Create result text
    const resultText = document.createElement("strong");

    resultText.innerText = result;


    // Add content
    item.appendChild(expressionText);

    item.appendChild(resultText);


    // Add item to history
    history.prepend(item);


    // Keep only 5 records
    while (history.children.length > 5) {

        history.removeChild(history.lastChild);

    }

}


// Clear history
function clearHistory() {

    const history = document.getElementById("history");

    history.innerHTML =
        '<p class="empty">No calculations yet</p>';

}


// Press Enter to calculate
document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        calculate();

    }

});