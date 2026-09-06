// Array com os dados fornecidos dos cursos
const cursos = [
    {
        assunto: 'CSE',
        numero: 110,
        titulo: 'Introduction to Programming',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        tecnologia: [
            'Python'
        ],
        concluido: true // altere para true se já concluiu
    },
    {
        assunto: 'WDD',
        numero: 130,
        titulo: 'Web Fundamentals',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        tecnologia: [
            'HTML',
            'CSS'
        ],
        concluido: true // altere para true se já concluiu
    },
    {
        assunto: 'CSE',
        numero: 111,
        titulo: 'Programming with Functions',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        tecnologia: [
            'Python'
        ],
        concluido: true // altere para true se já concluiu
    },
    {
        assunto: 'CSE',
        numero: 210,
        titulo: 'Programming with Classes',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        tecnologia: [
            'C#'
        ],
        concluido: false
    },
    {
        assunto: 'WDD',
        numero: 131,
        titulo: 'Dynamic Web Fundamentals',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        tecnologia: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        concluido: true // altere para true se já concluiu
    },
    {
        assunto: 'WDD',
        numero: 231,
        titulo: 'Frontend Web Development I',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        tecnologia: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        concluido: false
    }
];

// Seleção dos elementos do DOM
const containerCursos = document.getElementById("container-cursos");
const totalCreditos = document.getElementById("total-creditos");
const botoesFiltro = document.querySelectorAll(".btn-filtro");

// Função para exibir os cartões dinamicamente
function renderizarCursos(listaParaExibir) {
    containerCursos.innerHTML = "";

    listaParaExibir.forEach(curso => {
        const cartao = document.createElement("div");
        cartao.className = `cartao-curso ${curso.concluido ? "concluido" : "pendente"}`;

        const statusTexto = curso.concluido ? "✓ Concluído" : "○ Em aberto";

        cartao.innerHTML = `
            <strong>${curso.assunto} ${curso.numero}</strong>
            <span>${curso.titulo}</span>
            <p><small>${curso.creditos} créditos | ${statusTexto}</small></p>
        `;
        containerCursos.appendChild(cartao);
    });

    // Calcula os créditos usando reduce apenas dos cursos exibidos
    const somaCreditos = listaParaExibir.reduce((acumulador, curso) => acumulador + curso.creditos, 0);
    totalCreditos.textContent = `O número total de créditos é: ${somaCreditos}`;
}

// Atualização visual do botão ativo
function definirBotaoAtivo(botaoClicado) {
    botoesFiltro.forEach(btn => btn.classList.remove("ativo"));
    botaoClicado.classList.add("ativo");
}

// Event Listeners para filtragem
document.getElementById("btn-todos").addEventListener("click", (e) => {
    definirBotaoAtivo(e.target);
    renderizarCursos(cursos);
});

document.getElementById("btn-wdd").addEventListener("click", (e) => {
    definirBotaoAtivo(e.target);
    const filtrados = cursos.filter(curso => curso.assunto === "WDD");
    renderizarCursos(filtrados);
});

document.getElementById("btn-cse").addEventListener("click", (e) => {
    definirBotaoAtivo(e.target);
    const filtrados = cursos.filter(curso => curso.assunto === "CSE");
    renderizarCursos(filtrados);
});

// Renderização inicial ao carregar a página
renderizarCursos(cursos);