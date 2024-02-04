const meuForm = document.getElementById('meuForm');
const nome = document.getElementById('nome');
const senha = document.getElementById('senha');

meuForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const senhaN = Number(senha.value);
    let userNome = 'joao';
    let userSenha = 123;

    if(userNome == nome.value && userSenha == senhaN){
        alert('Acesso Liberato')
    } else {
        alert('Acesso Negado.')
    }
})