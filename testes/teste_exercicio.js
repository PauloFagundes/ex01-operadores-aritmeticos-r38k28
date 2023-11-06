/***** Não altere os códigos abaixo *****/

function realizaOperacao() {
  try {
    if (primeiroNumero !== 178)
      throw new Error('primeiroNumero não está com o valor correto');

    if (segundoNumero !== 93)
      throw new Error('segundoNumero não está com o valor correto');

    if (resultadoDaSoma !== primeiroNumero + segundoNumero)
      throw new Error('resultadoDaSoma não é a soma dos dois valores');

    return [
      'correct',
      '<h4 class="correct-heading">Exercício correto!</h4><p>As variáveis estão com os valores corretos!</p>',
    ];
  } catch (e) {
    return [
      'incorrect',
      `<h4 class="incorrect-heading">Exercício incorreto!</h4><p>${e.message}</p>`,
    ];
  }
}

document.querySelector('.click-btn').addEventListener('click', () => {
  const [classResult, result] = realizaOperacao();
  const resultDisplay = document.querySelector('.result');

  resultDisplay.className = `result ${classResult}`;
  resultDisplay.innerHTML = result;
});
