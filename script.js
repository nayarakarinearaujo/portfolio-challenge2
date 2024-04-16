// script.js

// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Adicione seu código JavaScript aqui
    
    // Exemplo: Manipulação do DOM para adicionar um evento de clique a um botão
    const button = document.querySelector('.formcontato__botao');
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Obtenha os valores dos campos de entrada
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Faça algo com os valores (por exemplo, envie-os para um servidor)
        console.log(`Nome: ${nome}, Email: ${email}, Assunto: ${assunto}, Mensagem: ${mensagem}`);

        // Limpe os campos do formulário após o envio
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('assunto').value = '';
        document.getElementById('mensagem').value = '';

        // Exemplo de feedback para o usuário
        alert('Mensagem enviada com sucesso!');
    });
});
