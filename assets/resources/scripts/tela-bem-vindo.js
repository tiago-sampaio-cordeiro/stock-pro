let user = JSON.parse(localStorage.getItem('user'));

let username = document.getElementById('nomeCompleto');

username.innerHTML = `${user.nome}`;

console.log(user)

