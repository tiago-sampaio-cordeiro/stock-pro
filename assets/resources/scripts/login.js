
function entrar(event) {
    event.preventDefault();
    let usuario = document.getElementById('email-usuario');
    let password = document.getElementById('senha-usuario');
    
    let listInformation = [];
    
    let userValid = {
        nome: '',
        email: '',
        senha: ''
    }
    
    listInformation = JSON.parse(localStorage.getItem('information'));
    
    listInformation.forEach((item) => {
        if(usuario.value == item.email && password.value == item.senha){

            userValid = {
                nome: item.nome,
                email: item.email,
                senha: item.senha
            }

        }
    })
   
    if(usuario.value == userValid.email && password.value == userValid.senha) {
        alert('Usuário autenticado no banco de dados!!')
        setTimeout(() => {
        }, 3000);
        window.location.href = 'app/tela-bem-vindo.html'
        localStorage.setItem('user', JSON.stringify(userValid))
    } else {
        alert('Email ou senha incorretos!!!')
    }
  
}

const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', entrar);


