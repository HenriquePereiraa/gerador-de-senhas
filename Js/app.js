const passWordEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@$%/&*()_+=';

function getUpperLetter(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getLowerLetter(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword(){

    var length = lengthEl.value;
    let password = "";


    if(upperEl.checked)
    {
        password += getUpperLetter();
    }

    if(lowerEl.checked)
    {
        password += getLowerLetter();
    }

    if(numberEl.checked)
    {
        password += getNumbers();
    }

    if(symbolEl.checked)
    {
        password += getSymbols();
    }

    for(let i = password.length; i < length; i++ )
    {
        let x = generateX();
        password += x;
    }

    passWordEl.innerHTML = password;    
}

function generateX(){
    let xs = [];

    if(upperEl.checked)
    {
        xs.push(getUpperLetter());
    }

    if(lowerEl.checked)
    {
        xs.push(getLowerLetter());
    }

    if(numberEl.checked)
    {
        xs.push(getNumbers());
    }

    if(symbolEl.checked)
    {
        xs.push(getSymbols());
    }

    if(xs.length === 0) return "";

    return xs[Math.floor(Math.random()*xs.length)];
}

generateEl.addEventListener('click',generatePassword);

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = passWordEl.innerHTML;

    if(!password)
    {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert('Senha copiada!');
});

