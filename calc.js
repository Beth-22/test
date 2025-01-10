document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  let currentInput = "";
  let previousInput = "";
  let operator = null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (button.id === "clear") {
        // Clear display and reset all variables
        currentInput = "";
        previousInput = "";
        operator = null;
        display.value = "";
      } else if (button.id === "equals") {
        // Calculate the result if operator exists
        if (operator && currentInput) {
          previousInput = calculate(previousInput, currentInput, operator);
          display.value = previousInput;
          currentInput = "";
          operator = null;
        }
      } else if (button.classList.contains("operator")) {
        // Set the operator and display it with the current input
        if (currentInput !== "") {
          if (previousInput !== "") {
            previousInput = calculate(previousInput, currentInput, operator);
          } else {
            previousInput = currentInput;
          }
          operator = value;
          display.value = previousInput + " " + operator; // Show operator on display
          currentInput = ""; // Clear current input for the next number
        }
      } else {
        // Append number to the current input
        currentInput += value;

        // Display logic: only show operator if set
        if (operator) {
          display.value = previousInput + " " + operator + " " + currentInput;
        } else {
          display.value = currentInput;
        }
      }
    });
  });

  // Function to perform calculations
  function calculate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
      case "+":
        return (a + b).toString();
      case "-":
        return (a - b).toString();
      case "*":
        return (a * b).toString();
      case "/":
        if (b === 0) {
          return "Error"; // Prevent division by zero
        }
        return (a / b).toString();
      default:
        return "";
    }
  }
});
