
const formCadastro = document.getElementById('form-cadastro');

function cadastraUsuario(event) {
    event.preventDefault();
    // Capturar valores dos campos
    let nomeUsuario = document.getElementById("nome-usuario");
    let emailUsuario = document.getElementById("email-usuario");
    let senhaUsuario = document.getElementById("senha-usuario");
    
  
    // Criar objeto para armazenar os dados
    //
    let dadosUsuario = JSON.parse(localStorage.getItem("information"));
  
    if(dadosUsuario == null) {
      localStorage.setItem("information", "[]");
      dadosUsuario = [];
    }
  
    if (nomeUsuario.value && emailUsuario.value && senhaUsuario.value) {

    const usuario = {
      nome: nomeUsuario.value,
      email: emailUsuario.value,
      senha: senhaUsuario.value
    }
  
    dadosUsuario.push(usuario);
  
    localStorage.setItem("information",JSON.stringify(dadosUsuario));

    alert("Usuário cadastrado com sucesso!");

    alert("Você será redirecionado para a página de login!!")

        nomeUsuario.value = '';
        emailUsuario.value = '';
        senhaUsuario.value = '';

        setTimeout(() => {
          window.location.href = "../index.html";
      }, 3000);

    } else {
        alert("Por favor, preencha todos os campos.");
    }

  }
  formCadastro.addEventListener("submit", cadastraUsuario);
  