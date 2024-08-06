function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.value;

    // Replace power operator with appropriate JavaScript expression
    expression = expression.replace(/\^/g, '**');

    // Evaluate the expression
    try {
        // Handle special functions like sqrt
        expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
        // Replace scientific functions with their equivalents
        expression = expression.replace(/Math\.(\w+)\(([^)]+)\)/g, 'Math.$1($2)');
        // Evaluate
        let result = eval(expression);
        if (result === Infinity || isNaN(result)) {
            result = 'Error';
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
