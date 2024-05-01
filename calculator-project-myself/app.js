const plus = document.getElementById('+');
const result = document.getElementById('result');
const ac = document.getElementById('ac');
const del = document.getElementById('del');
const divided = document.getElementById('/');
const minus = document.getElementById('-');
const times = document.getElementById('*');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const dot = document.getElementById('.');
const equal = document.getElementById('=');


eventListeners();


function eventListeners() {
    one.addEventListener('click', addNumber);
    two.addEventListener('click', addNumber);
    three.addEventListener('click', addNumber);
    four.addEventListener('click', addNumber);
    five.addEventListener('click', addNumber);
    six.addEventListener('click', addNumber);
    seven.addEventListener('click', addNumber);
    eight.addEventListener('click', addNumber);
    nine.addEventListener('click', addNumber);
    zero.addEventListener('click', addNumber);
    dot.addEventListener('click', addNumber);
    plus.addEventListener('click', addOperator);
    minus.addEventListener('click', addOperator);
    times.addEventListener('click', addOperator);
    divided.addEventListener('click', addOperator);
    equal.addEventListener('click', calculate);
    ac.addEventListener('click', clear);
    del.addEventListener('click', deleteNumber);
}

function addNumber(e) {
    if (result.innerText === 'Result' || result.innerText === 'Cleared') {
        result.innerText = '';
    }
    const number = e.target.textContent;
    result.innerText += number;
}

function addOperator(e) {
    if (result.innerText === 'Result' || result.innerText === 'Cleared') {
        result.innerText = '';
    }
    const operator = e.target.textContent;
    result.innerText += operator;
}
    

function calculate(e) {
    const calculation = eval(result.innerText);
    result.innerText = calculation;
}

function clear(e) {
    result.innerText = 'Cleared';
}

function deleteNumber(e) {
    result.innerText = result.innerText.slice(0, -1);
}