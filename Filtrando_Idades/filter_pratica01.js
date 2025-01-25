const idades = []

// Função para adicionar idade à lista
function adicionarIdade() {
  const idadeInput = document.getElementById('idade')
  const idade = parseInt(idadeInput.value)
  
  // condição que verifica se a idade não for NaN vai adicionar a const idade na array idades, senão tiver nenhum valor digitado, ele vai mostrar um alerta
  if (!isNaN(idade)){
    idades.push(idade)
    exibirIdades()
  } else {
    alert("por favor, digite uma idade válida")
  }
  
  // Limpar o campo de entrada
  idadeInput.value = ''

}

// Função para exibir idades na lista
function exibirIdades() {
  const listaIdades = document.getElementById('listaIdades')
  listaIdades.innerHTML = ''

  idades.forEach(idade => {
    const itemLista = document.createElement('li')
    itemLista.textContent = idade
    listaIdades.appendChild(itemLista)
  });
}

// Função para filtrar idades maiores e menores que 18
function filtrarIdades() {
  if (idades.length > 0){
    const maior = idades.filter((valor) => valor > 18);
    const menor = idades.filter((valor) => valor < 18);
    
    let msg = document.createElement('p');
    msg.innerHTML = `Todas as idades: ${idades}, <br> Idades maiores de 18 anos: ${maior} <br> Idades menores que 18: ${menor}`;
    
    // Adicionando a mensagem dentro da div#box-form
    const boxForm = document.getElementById('box-form');
    boxForm.appendChild(msg);
  } else {
    alert('Por favor, adicione pelo menos uma idade antes de filtrar.');
  }
}
