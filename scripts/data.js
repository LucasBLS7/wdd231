// Ano dinâmico no rodapé
const elementoAno = document.getElementById("anoAtual");
if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}

// Data e hora da última modificação do documento
const elementoModificacao = document.getElementById("ultimaModificacao");
if (elementoModificacao) {
    elementoModificacao.textContent = `Última Modificação: ${document.lastModified}`;
}