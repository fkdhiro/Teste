function verificaFibonacci(numero) {
  if (numero === 0 || numero === 1) {
      console.log(`${numero} faz parte do Fibonacci`);
      return;
  }

  let anterior = 0, atual = 1;
  while (atual < numero) {
      let proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
  }

  if (atual === numero) {
      console.log(`${numero} faz parte do Fibonacci`);
  } else {
      console.log(`${numero} não está na sequência de Fibonacci`);
  }
}

const valor = 21; 
verificaFibonacci(valor);
