const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equalButton = document.getElementById('equal');
const clearButton = document.querySelector('.clear');

let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetScreen = false;

function clear() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.textContent = '0';
}

function appendNumber(number) {
    playSound(300);  // Sonido para números
    if (display.textContent === '0' || shouldResetScreen) {
        resetScreen();
    }
    currentInput += number;
    display.textContent = currentInput;
}

function chooseOperator(selectedOperator) {
    playSound(250);  // Sonido para operadores
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = selectedOperator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    playSound(350);  // Sonido para el botón de igual
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentInput = computation;
    operator = '';
    previousInput = '';
    display.textContent = computation;
    shouldResetScreen = true;
}

function resetScreen() {
    display.textContent = '';
    shouldResetScreen = false;
}

function playSound(frequency) {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'sine';  // Onda sinusoidal para un sonido más suave
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);

    gainNode.gain.setValueAtTime(0.2, context.currentTime);  // Volumen ajustado
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.1); // Duración corta
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('operator')) {
            chooseOperator(value);
        } else if (button.classList.contains('equal')) {
            calculate();
        } else if (button.classList.contains('clear')) {
            clear();
        } else {
            appendNumber(value);
        }
    });
});
