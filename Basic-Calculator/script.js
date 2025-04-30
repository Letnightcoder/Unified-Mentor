
  const display = document.getElementById("display");
  let memory = 0;

  function appendInput(value) {
    if (display.textContent === "0" || display.textContent === "Error") {
      display.textContent = value;
    } else {
      display.textContent += value;
    }
  }

  function clearDisplay() {
    display.textContent = "0";
  }

  function calculateResult() {
    try {
      let expression = display.textContent.replace(/÷/g, "/").replace(/×/g, "*");

      // Handle percentage (convert % to /100)
      expression = expression.replace(/(\d+)%/g, '($1/100)');

      let result = eval(expression);
      if (!isFinite(result)) {
        display.textContent = "Error";
      } else {
        display.textContent = result;
      }
    } catch (error) {
      display.textContent = "Error";
    }
  }

  function squareRoot() {
    try {
      let current = parseFloat(display.textContent);
      if (current < 0) {
        display.textContent = "Error";
      } else {
        display.textContent = Math.sqrt(current);
      }
    } catch (e) {
      display.textContent = "Error";
    }
  }

  function memoryAdd() {
    try {
      memory += parseFloat(display.textContent) || 0;
    } catch {}
  }

  function memorySubtract() {
    try {
      memory -= parseFloat(display.textContent) || 0;
    } catch {}
  }

  function memoryRecall() {
    display.textContent = memory.toString();
  }

  function memoryClear() {
    memory = 0;
  }

  // Keyboard Support
  document.addEventListener("keydown", (e) => {
    const key = e.key;
    if ("0123456789+-*/().".includes(key)) {
      appendInput(key);
    } else if (key === "Enter") {
      e.preventDefault();
      calculateResult();
    } else if (key === "Backspace") {
      display.textContent = display.textContent.slice(0, -1) || "0";
    } else if (key.toLowerCase() === "c") {
      clearDisplay();
    }
  });
