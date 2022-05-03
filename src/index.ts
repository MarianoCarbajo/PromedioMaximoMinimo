let valor, suma, promedio, contador: number;
contador = 0;
suma = 0;
valor = Number(prompt("Ingrese un valor: "));
let maximo: number = valor;
let minimo: number = valor;
while (valor != 0) {
  suma = suma + valor;
  contador = contador + 1;
  if (valor > maximo) {
    maximo = valor;
  } else if (valor < minimo) {
    minimo = valor;
  }
  valor = Number(prompt("Ingrese otro valor: "));
}
promedio = suma / contador;
console.log(
  "El máximo es " +
    maximo +
    ", el mínimo es " +
    minimo +
    " y la media es " +
    promedio
);
