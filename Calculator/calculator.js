let string = '';
let outputDisplayed = false;
let buttons = document.querySelectorAll('.button');

function updateInput(value) {
  if (outputDisplayed) {
    string = '';
    outputDisplayed = false;
  }
  string += value;
  document.querySelector('input').value = string;
}

function clearInput() {
  string = '';
  document.querySelector('input').value = string;
}

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerHTML;

    switch (buttonValue) {
      case '=':
        string = eval(string);
        document.querySelector('input').value = string;
        outputDisplayed = true;
        break;

      case 'C':
        clearInput();
        break;

      case '+/-':
        string += '*-1';
        updateInput(buttonValue);
        break;

      case '%':
        string = eval(string) / 100;
        document.querySelector('input').value = string;
        break;

      case '⌫': // Backspace
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
        break;

      default:
        updateInput(buttonValue);
        break;
    }
  });
});

document.addEventListener('keydown', (e) => {
  const keyValue = e.key;

  if (keyValue === 'Enter') {
    string = eval(string);
    document.querySelector('input').value = string;
    outputDisplayed = true;
  } else if (keyValue === 'Escape') {
    clearInput();
  } else if (/^[0-9+\-*/]$/.test(keyValue)) {
    updateInput(keyValue);
  } else if (keyValue === 'Backspace') {
    string = string.slice(0, -1);
    document.querySelector('input').value = string;
  }
});
