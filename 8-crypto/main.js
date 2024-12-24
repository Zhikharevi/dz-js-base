const password = prompt('Введите пароль');

function crypto(password) {
    let firstPart = password.slice(0, Math.floor(password.length / 2)).split('').reverse().join(''); // Первая часть, перевёрнутая
    let secondPart = password.slice(Math.floor(password.length / 2)).split('').reverse().join(''); // Вторая часть, перевёрнутая
    let cryptoString = firstPart + secondPart;
    return cryptoString;
}

const encryptedPassword = crypto(password);
console.log("Зашифрованный пароль:", encryptedPassword);

const checkPassword = prompt('Введите пароль для проверки');

function isPasswordCorrect(encrypted, original) {
    return encrypted === crypto(original); 
}

console.log("Пароли совпадают:", isPasswordCorrect(encryptedPassword, checkPassword));