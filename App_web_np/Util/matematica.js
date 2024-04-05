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
 module.exports ={
    verificarNumeroPrimo
 }