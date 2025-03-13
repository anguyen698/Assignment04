// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
  return eval(`${x} ${operation} ${y}`);
}

const operationOptions = ["+", "-", "*", "/"];
let operation;

do {
  // COLLECT FIRST NUMBER FROM USER
  let x = parseFloat(prompt("Enter a number: "));

  // COLLECT SECOND NUMBER FROM USER
  let y = parseFloat(prompt("Enter another number: "));

  // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
  operation = prompt(
    "Enter an operation (add, subtract, multiply, divide): "
  ).toLowerCase();

  // Switch statement to determine which operation to perform
  switch (operation) {
    case "add":
      operation = "+";
      break;
    case "subtract":
      operation = "-";
      break;
    case "multiply":
      operation = "*";
      break;
    case "divide":
      operation = "/";
      if (y === 0) {
        alert("Error: Cannot divide by 0");
        continue;
      }
      break;
    default:
      alert("Error: Invalid operation");
      continue;
  }

  // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
  let result = calculate(x, y, operation);
  alert(`The result of the calculation is ${result}`);
} while (!operationOptions.includes(operation));
