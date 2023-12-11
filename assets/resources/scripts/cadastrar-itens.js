/*cadastrar itens*/
const form = document.getElementById("form");

function cadastraProduto(event) {
  event.preventDefault();
  // Capturar valores dos campos
  let nomeItem = document.getElementById("nome-item");
  let tamanhoItem = document.getElementById("tamanho-item");
  let corItem = document.getElementById("cor-item");
  let quantidadeItem = document.getElementById("quantidade-item");

  // Criar objeto para armazenar os dados
  let dados = JSON.parse(localStorage.getItem("dadosProduto"));

  if(dados == null) {
    localStorage.setItem("dadosProduto", "[]");
    dados = [];
  }

  if(nomeItem.value && tamanhoItem.value && corItem.value && quantidadeItem) {
    let auxRegistros = {
      nome: nomeItem.value,
      tamanho: tamanhoItem.value,
      cor: corItem.value,
      quantidade: quantidadeItem.value
    }
  
    dados.push(auxRegistros);
  
    localStorage.setItem("dadosProduto",JSON.stringify(dados));

    alert("Ítem cadastrado com sucesso!");

    nomeItem.value = '';
    tamanhoItem.value = '';
    corItem.value = '';
    quantidadeItem.value = '';

  }

}
form.addEventListener("submit", cadastraProduto);



