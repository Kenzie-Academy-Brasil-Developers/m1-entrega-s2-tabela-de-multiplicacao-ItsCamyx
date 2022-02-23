//propriedade
function multiplicationTable(tamanho) {
  const arr = [];
  // para i = 0 até i maior igual tamanho acrescentar +1
  for (let i = 0; i <= tamanho; i++) {
    const linha = [];
    // para j = 0 até j maior igual tamanho, acrescentar +1
    for (let j = 0; j <= tamanho; j++) {
      //Assim que termina o j o i acrescenta mais um e multiplica por outro numero do j
      linha.push(i * j);
    }
    //Valor de array tem i que recebe o valor de linha
    arr[i] = linha;
  }
  console.table(arr);
}

function calculaTabela() {
  const numero = document.getElementById("numero").value;
  multiplicationTable(numero);
}
