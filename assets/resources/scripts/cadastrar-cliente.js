

const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^\d{5}-?\d*$/.test(numero);

const cepValido = (cep) => cep.length == 9 && eNumero(cep); 


const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
     
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);

function cadastraCliente(event) {
    event.preventDefault();

    const cepNumber = document.getElementById('cep');
    const nomeCliente = document.getElementById('nome');
    const emailCliente = document.getElementById('email');
    const enderecoCliente = document.getElementById('endereco');
    const bairroCliente = document.getElementById('bairro');
    const cidadeCliente = document.getElementById('cidade');
    const estadoCliente = document.getElementById('estado');

let dadosCliente = JSON.parse(localStorage.getItem('clienteDados'));

if(dadosCliente == null) {
    localStorage.setItem("clienteDados", "[]");
    dadosCliente = [];
  }

  let cliente = {
    cep: cepNumber.value,
    nome: nomeCliente.value,
    email: emailCliente.value,
    rua: enderecoCliente.value,
    bairro: bairroCliente.value,
    cidade: cidadeCliente.value,
    estado: estadoCliente.value
  }

  dadosCliente.push(cliente);

  localStorage.setItem('clienteDados', JSON.stringify(dadosCliente));

  alert("Cliente cadastrado com sucesso!");

    

        cepNumber.value = '';
        nomeCliente.value = '';
        emailCliente.value = '';
        enderecoCliente.value = '';
        bairroCliente.value = '';
        cidadeCliente.value = '';
        estadoCliente.value = '';

      

    

}

const formularioLogin = document.getElementById('form-cadastro-cliente');
formularioLogin.addEventListener('submit', cadastraCliente)


    $('#cep').mask('00000-000');

    let campoNome = document.getElementById('nome');

campoNome.addEventListener('input', function(event) {
  if (campoNome.validity.patternMismatch) {
    campoNome.setCustomValidity('Por favor, insira seu nome e sobrenome com a primeira letra maiúscula');
  } else {
    campoNome.setCustomValidity('');
  }
})

let campoEmail = document.getElementById('email');

campoEmail.addEventListener('input', function(event) {
  if (campoEmail.validity.typeMismatch) {
    campoEmail.setCustomValidity('Por favor, insira um email válido');
  } else {
    campoEmail.setCustomValidity('');
  }
})