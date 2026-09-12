const membersContainer = document.getElementById('members-container');
const btnGrid = document.getElementById('btn-grid');
const btnList = document.getElementById('btn-list');

const niveisRotulo = {
  1: { texto: 'Membro', classe: 'badge-membro' },
  2: { texto: 'Prata', classe: 'badge-prata' },
  3: { texto: 'Ouro', classe: 'badge-ouro' }
};

async function getMembers() {
  try {
    const response = await fetch('dados/membros.json');
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Falha ao carregar os dados dos membros:', error);
    membersContainer.innerHTML = '<p>Erro ao carregar os dados do diretório. Tente novamente mais tarde.</p>';
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = '';

  members.forEach((member) => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    const nivelInfo = niveisRotulo[member.nivelAssociacao] || { texto: 'Associado', classe: 'badge-membro' };

    card.innerHTML = `
      <img src="imagens/${member.imagem}" alt="Logo de ${member.nome}" loading="lazy" width="120" height="120">
      <div class="member-info">
        <h3>${member.nome}</h3>
        <span class="badge ${nivelInfo.classe}">${nivelInfo.texto}</span>
        <p class="ramo"><strong>Ramo:</strong> ${member.ramo}</p>
        <p class="endereco">${member.endereco}</p>
        <p class="telefone">${member.telefone}</p>
        <a href="${member.url}" target="_blank" rel="noopener noreferrer">Visitar Website</a>
      </div>
    `;

    membersContainer.appendChild(card);
  });
}

// Alternância de Visualização (Grid vs List)
btnGrid.addEventListener('click', () => {
  membersContainer.classList.add('grid-view');
  membersContainer.classList.remove('list-view');
  btnGrid.classList.add('active');
  btnList.classList.remove('active');
  btnGrid.setAttribute('aria-pressed', 'true');
  btnList.setAttribute('aria-pressed', 'false');
});

btnList.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
  membersContainer.classList.remove('grid-view');
  btnList.classList.add('active');
  btnGrid.classList.remove('active');
  btnList.setAttribute('aria-pressed', 'true');
  btnGrid.setAttribute('aria-pressed', 'false');
});

// Inicialização
getMembers();