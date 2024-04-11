const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
  if (b === 0) {
    return 'Erro: divisão por zero';
  }
  return a / b;
};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
};
