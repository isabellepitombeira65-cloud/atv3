const form = document.getElementById('formVaga');
const tabela = document.getElementById('tabelaVagas');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Pega os valores dos campos
  const cargo = document.getElementById('cargo').value;
  const empresa = document.getElementById('empresa').value;
  const curso = document.getElementById('curso').value;
  const contato = document.getElementById('contato').value;

  // Cria uma nova linha para a tabela
  const novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `
    <td>${cargo}</td>
    <td>${empresa}</td>
    <td>${curso}</td>
    <td>${contato}</td>
  `;

  // Adiciona a linha na tabela
  tabela.appendChild(novaLinha);

  // Limpa o formulário
  form.reset();
});