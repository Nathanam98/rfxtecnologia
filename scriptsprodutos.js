// scriptsprodutos.js

// Seleção dos botões "Saiba Mais" e do modal
const buttons = document.querySelectorAll('.btn'); // Seleciona todos os botões "Saiba Mais"
const modal = document.getElementById('modal'); // Seleciona o modal
const closeModal = document.getElementById('closeModal'); // Seleciona o botão de fechar o modal
const modalTitle = document.getElementById('modalTitle'); // Seleciona o título no modal
const modalDescription = document.getElementById('modalDescription'); // Seleciona a descrição no modal

// Função para abrir o modal e mostrar o conteúdo
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o título do produto (h3 anterior ao botão) e o texto explicativo (data-text)
        const title = this.previousElementSibling.previousElementSibling.innerText;
        const description = this.getAttribute('data-text'); // Pega o texto explicativo do atributo data-text

        // Atualiza o conteúdo do modal
        modalTitle.textContent = title; // Define o título no modal
        modalDescription.textContent = description; // Define a descrição no modal

        // Exibe o modal
        modal.style.display = 'flex'; // Muda a exibição para visível
    });
});

// Função para fechar o modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Oculta o modal quando o botão de fechar for clicado
});

// Função para fechar o modal clicando fora da área do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Oculta o modal se o usuário clicar fora do conteúdo
    }
});
