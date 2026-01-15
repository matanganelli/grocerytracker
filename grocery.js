function groceryTracker() {

  // 1. Pegar os valores dos inputs
  // Let guarda valores dos inputs
  let value1 = Number(document.getElementById("grocery1").value);
  let value2 = Number(document.getElementById("grocery2").value);
  let value3 = Number(document.getElementById("grocery3").value);

  // 2. Chamar a função que soma
  // Ele guarda o valor do resultado da soma na função
  let total = Total(value1, value2, value3);

  // 3. Mostrar o resultado na tela
  // O que o usuário vê no front
  document.getElementById("total").innerText = "Total: " + total;
}

// Função que apenas soma e retorna
function Total(grocery1, grocery2, grocery3) {
  return grocery1 + grocery2 + grocery3;
}
