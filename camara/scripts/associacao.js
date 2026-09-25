// 1. Preenchimento do Timestamp Oculto
// Pega o momento exato em que a página foi carregada e atribui ao value do input
document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString(); 
    }
});

// 2. Lógica dos Modais de Benefícios
const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-modal');

// Adiciona o evento de clique para abrir o modal correspondente (usando o atributo data-modal)
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        // showModal() é um método nativo da tag <dialog> que o torna sobreposto à tela
        modal.showModal(); 
    });
});

// Adiciona o evento de clique para fechar os modais
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Encontra o modal pai mais próximo do botão e o fecha
        const modal = button.closest('dialog');
        modal.close();
    });
});