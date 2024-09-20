let display = document.querySelector(".display");
let userValue = "";
let memoryValue = 0;

// Function to add the clicked buttons value to the display
function buttonClick(val) {
  userValue += val;
  display.value = userValue;
}

// Function to clear the display
function clearDisplay() {
  userValue = "";
  display.value = "0";
}

// Function to calculate the result using the current input (userValue)
function resultDisplay() {
  try {
    let res = eval(userValue);
    if (res !== undefined) {
      display.value = res;
    } else {
      display.value = "0";
    }
  } catch {
    display.value = "ERROR";
  }
}

// Function to calculate the square root of the current input (userValue)
function squareRoot() {
  try {
    let res = Math.sqrt(eval(userValue));
    display.value = res;
  } catch {
    display.value = "ERROR";
    userValue = "";
  }
}

// Function to calculate the percentage of the current input (userValue)
function percentage() {
  try {
    let res = eval(userValue) / 100;
    display.value = res;
  } catch {
    display.value = "ERROR";
    userValue = "";
  }
}

// Function to add the current input to memoryValue (M+)
function memoryAdd() {
  memoryValue += eval(userValue);
  userValue = "";
  display.value = "0";
}

// Function to subtract the current input from memoryValue (M-)
function memorySubtract() {
  memoryValue -= eval(userValue);
  userValue = "";
  display.value = "0";
}

// Function to recall the memoryValue (MR)
function memoryRecall() {
  display.value = memoryValue;
  userValue = memoryValue;
}

// Function to clear the memoryValue (MC)
function memoryClear() {
  memoryValue = 0;
  display.value = "0";
  userValue = "";
}
