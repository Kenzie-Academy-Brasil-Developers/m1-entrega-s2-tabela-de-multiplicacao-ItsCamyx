function multiplicationTable(tamanho) {
  const arr = [];
  for (let i = 0; i <= tamanho; i++) {
    const linha = [];
    for (let j = 0; j <= tamanho; j++) {
      linha.push(i * j);
    }

    arr[i] = linha;
  }
  console.table(arr);
}
