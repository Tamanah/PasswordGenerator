const passwordBox = document.getElementById('password');
const passwordL = 10;

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+";

const allChar = upper + lower + number + symbol;

function createPassword() {
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (passwordL > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}

function copy() {
    passwordBox.select();
    document.execCommand("copy");
}