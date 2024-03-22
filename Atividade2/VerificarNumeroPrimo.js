function verificarNumeroPrimo(n) {
    let resultado = 0;
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            resultado++;
            break;
        }
    }
    if (resultado == 0) {
        return true;
    } else {
        return false;
    }
}
 
console.log(verificarNumeroPrimo(0)); // false
console.log(verificarNumeroPrimo(1)); // false
console.log(verificarNumeroPrimo(2)); // true
console.log(verificarNumeroPrimo(3)); // true
console.log(verificarNumeroPrimo(7)); // true
console.log(verificarNumeroPrimo(83)); // true
console.log(verificarNumeroPrimo(100)); // false
console.log(verificarNumeroPrimo(991)); // true
console.log(verificarNumeroPrimo(104729)); // true
console.log(verificarNumeroPrimo(14348907)); // false
 