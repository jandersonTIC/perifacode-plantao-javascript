// Monada Maybe
class Maybe {
  constructor(valor) {
    this.valor = valor; //IMUTAVEL
  }

  isValid() {
    return this.valor !== undefined && this.valor !== null ? true : false;
  }

  get() {
    return this.valor;
  }

  map(callback) {
    if (this.isValid()) {
      const clone = new Maybe(this.valor);
      return new Maybe(callback(clone));
    } else {
      return new Maybe(this.valor);
    }
  }
}

const lagarta = new Maybe('lagarta');

const metamorfose1 = function (valor) {
  const fase1 = `${valor.get()}quaseUmaBorboleta`;
  console.log(fase1);
  return fase1;
};

const metamorfose2 = () => {
  return 'Borboleta';
};

const borboleta = lagarta.map(metamorfose1).map(metamorfose2);

console.log(lagarta.get(), borboleta.get());

//------------ Papos sobre Syntactic Sugar em function e arrow functions
const somenteUmParametro = (a) => a ** 2;

const soma = (a, b) => (c) => a + b + c;

const soma = (a, b) => {
  return function (c) {
    return a + b + c;
  };
};

const fnRetornoDaSoma = soma(1, 2);
const resultado = fnRetornoDaSoma(3);
console.log(resultado);
