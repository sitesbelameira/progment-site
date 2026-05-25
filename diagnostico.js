const questionData = {
    ensinoMedio: {
        title: "Ensino Médio",
        subjects: {
            'Linguagens e Códigos': [
                {
                    id: 1, topic: "Gramática", question: "Na frase 'Os alunos estudaram bastante', o termo 'bastante' exerce a função de:",
                    options: ["Adjetivo", "Advérbio", "Substantivo", "Preposição"], correct: 1,
                    explanation: { right: "Correto! Indica intensidade do verbo estudar.", wrong: "Neste contexto, ele modifica o verbo, sendo um advérbio de intensidade." }
                },
                {
                    id: 2, topic: "Literatura", question: "O movimento literário que buscava retratar a realidade de forma objetiva e crua é o:",
                    options: ["Romantismo", "Realismo", "Barroco", "Arcadismo"], correct: 1,
                    explanation: { right: "Exato! O Realismo foca na análise psicológica e social objetiva.", wrong: "O Realismo surgiu em oposição ao sentimentalismo do Romantismo." }
                },
                {
                    id: 3, topic: "Gramática", question: "Qual das palavras abaixo está escrita corretamente de acordo com a norma culta?",
                    options: ["Excessão", "Exceção", "Esceção", "Excensão"], correct: 1,
                    explanation: { right: "Isso! Escreve-se 'exceção' com 'x' e 'ç'.", wrong: "A grafia correta é 'exceção'." }
                },
                {
                    id: 4, topic: "Literatura", question: "Quem é o autor de 'Dom Casmurro'?",
                    options: ["Machado de Assis", "José de Alencar", "Álvares de Azevedo", "Castro Alves"], correct: 0,
                    explanation: { right: "Perfeito! Uma das maiores obras de Machado de Assis.", wrong: "Machado de Assis é o autor desse clássico do Realismo." }
                },
                {
                    id: 5, topic: "Interpretação", question: "A função de linguagem que foca no canal de comunicação para garantir que ele funcione é a:",
                    options: ["Referencial", "Fática", "Metalinguística", "Poética"], correct: 1,
                    explanation: { right: "Correto! A função fática testa o canal (ex: 'Alô?', 'Entende?').", wrong: "A função fática foca no contato ou canal." }
                }
            ],
            'Matemática e Ciências': [
                {
                    id: 1, topic: "Álgebra", question: "Qual o valor de x na equação 2x + 10 = 20?",
                    options: ["5", "10", "15", "2"], correct: 0,
                    explanation: { right: "Isso! 2x = 10, logo x = 5.", wrong: "Resolvendo: subtraia 10 de 20 e divida por 2." }
                },
                {
                    id: 2, topic: "Biologia", question: "A organela responsável pela respiração celular é a:",
                    options: ["Ribossomo", "Lisossomo", "Mitocôndria", "Complexo de Golgi"], correct: 2,
                    explanation: { right: "Perfeito! A mitocôndria produz energia para a célula.", wrong: "A mitocôndria é a 'usina' de energia da célula." }
                },
                {
                    id: 3, topic: "Física", question: "De acordo com a 1ª Lei de Newton (Inércia), um corpo em repouso tende a:",
                    options: ["Acelerar", "Permanecer em repouso", "Mudar de direção", "Diminuir de massa"], correct: 1,
                    explanation: { right: "Exato! Tendência de manter o estado de movimento ou repouso.", wrong: "A inércia é a resistência à mudança de estado." }
                },
                {
                    id: 4, topic: "Química", question: "Qual o símbolo químico do Ouro?",
                    options: ["Ag", "Au", "Fe", "Cu"], correct: 1,
                    explanation: { right: "Correto! Au vem do latim 'aurum'.", wrong: "O símbolo do ouro é Au." }
                },
                {
                    id: 5, topic: "Geometria", question: "A soma dos ângulos internos de um triângulo é sempre:",
                    options: ["90°", "180°", "360°", "270°"], correct: 1,
                    explanation: { right: "Isso! Em qualquer triângulo plano, a soma é 180°.", wrong: "A regra fundamental da geometria diz 180°." }
                }
            ]
        }
    },
    enem: {
        title: "Vestibular / ENEM",
        subjects: {
            'Ciências Humanas': [
                {
                    id: 1, topic: "História", question: "O rádio no Estado Novo foi usado para:",
                    options: ["Crítica ao governo", "Propaganda e culto ao líder", "Incentivo à revolução", "Aulas de inglês"], correct: 1,
                    explanation: { right: "Correto! Era a principal ferramenta de propaganda de Vargas.", wrong: "Vargas usava o rádio para consolidar sua imagem popular." }
                },
                {
                    id: 2, topic: "Filosofia", question: "O 'Só sei que nada sei' é atribuído a:",
                    options: ["Platão", "Sócrates", "Aristóteles", "Descartes"], correct: 1,
                    explanation: { right: "Exato!", wrong: "Sócrates baseava sua filosofia no reconhecimento da ignorância." }
                },
                {
                    id: 3, topic: "Sociologia", question: "O conceito de 'Modernidade Líquida' foi cunhado por:",
                    options: ["Zygmunt Bauman", "Karl Marx", "Max Weber", "Émile Durkheim"], correct: 0,
                    explanation: { right: "Correto! Bauman descreve a fragilidade das relações atuais.", wrong: "Zygmunt Bauman é o autor dessa teoria contemporânea." }
                },
                {
                    id: 4, topic: "Geografia", question: "Qual o principal bioma brasileiro em extensão territorial?",
                    options: ["Cerrado", "Mata Atlântica", "Amazônia", "Pantanal"], correct: 2,
                    explanation: { right: "Isso! A Amazônia ocupa a maior parte do território.", wrong: "A Amazônia é o maior bioma do Brasil." }
                },
                {
                    id: 5, topic: "História", question: "A Revolução Industrial teve início em qual país?",
                    options: ["França", "Estados Unidos", "Alemanha", "Inglaterra"], correct: 3,
                    explanation: { right: "Perfeito! O pioneirismo inglês ocorreu no século XVIII.", wrong: "A Inglaterra foi o berço da Revolução Industrial." }
                }
            ],
            'Exatas e Natureza': [
                {
                    id: 1, topic: "Matemática", question: "Qual é a área de um triângulo com base de 10cm e altura de 6cm?",
                    options: ["60 cm²", "30 cm²", "16 cm²", "20 cm²"], correct: 1,
                    explanation: { right: "Correto! (B*H)/2.", wrong: "Lembre-se da fórmula: base vezes altura dividido por dois." }
                },
                {
                    id: 2, topic: "Física", question: "Unidade de força no Sistema Internacional:",
                    options: ["Joule", "Pascal", "Newton", "Watt"], correct: 2,
                    explanation: { right: "Isso! Newton (N).", wrong: "Força é medida em Newtons." }
                },
                {
                    id: 3, topic: "Biologia", question: "Qual base nitrogenada é exclusiva do RNA?",
                    options: ["Adenina", "Timina", "Uracila", "Citosina"], correct: 2,
                    explanation: { right: "Exato! No RNA, a uracila substitui a timina.", wrong: "O RNA possui uracila no lugar da timina encontrada no DNA." }
                },
                {
                    id: 4, topic: "Química", question: "A tabela periódica atual é organizada em ordem crescente de:",
                    options: ["Massa atômica", "Número atômico", "Número de nêutrons", "Raio atômico"], correct: 1,
                    explanation: { right: "Correto! Pelo número de prótons (Z).", wrong: "Moseley organizou a tabela pelo número atômico." }
                },
                {
                    id: 5, topic: "Matemática", question: "Qual a probabilidade de tirar um '6' ao lançar um dado justo de 6 faces?",
                    options: ["1/2", "1/6", "1/3", "1/4"], correct: 1,
                    explanation: { right: "Isso! 1 caso favorável entre 6 totais.", wrong: "A chance é de 1 em 6." }
                }
            ]
        }
    },
    concurso: {
        title: "Concurso Público",
        subjects: {
            'Língua Portuguesa': [
                {
                    id: 1, topic: "Concordância", question: "Assinale a frase correta:",
                    options: ["Faziam dez anos que não o via.", "Faz dez anos que não o via.", "Houveram muitos problemas.", "Tratam-se de casos graves."], correct: 1,
                    explanation: { right: "Muito bem! O verbo fazer indicando tempo é impessoal.", wrong: "O verbo fazer (tempo) e haver (existir) não vão para o plural." }
                },
                {
                    id: 2, topic: "Regência", question: "Assinale a alternativa que respeita a regência verbal:",
                    options: ["Assisti o filme ontem.", "Assisti ao filme ontem.", "Prefiro viajar do que trabalhar.", "Ele namora com ela."], correct: 1,
                    explanation: { right: "Correto! Assistir no sentido de ver exige a preposição 'a'.", wrong: "O verbo assistir (ver) é VTI, pede 'ao'." }
                },
                {
                    id: 3, topic: "Crase", question: "O uso da crase é OBRIGATÓRIO em:",
                    options: ["Fui a Bahia.", "Fui a Brasília.", "Fui a pé.", "Entreguei a ela."], correct: 0,
                    explanation: { right: "Isso! Quem vai à Bahia, volta DA Bahia (tem artigo).", wrong: "A crase ocorre antes de substantivos femininos determinados." }
                },
                {
                    id: 4, topic: "Sintaxe", question: "Qual a função sintática de 'O livro' em 'O livro foi lido por ele'?",
                    options: ["Sujeito Paciente", "Sujeito Agente", "Objeto Direto", "Agente da Passiva"], correct: 0,
                    explanation: { right: "Exato! Na voz passiva, o sujeito sofre a ação.", wrong: "É um sujeito paciente pois sofre a ação de ser lido." }
                },
                {
                    id: 5, topic: "Ortografia", question: "Indique a forma correta do uso dos 'porquês':",
                    options: ["Não sei por que você se foi.", "Não sei porquê você se foi.", "Porque você se foi?", "Você se foi por que?"], correct: 0,
                    explanation: { right: "Correto! 'Por que' separado em perguntas indiretas.", wrong: "Usa-se 'por que' separado em perguntas (diretas ou indiretas)." }
                }
            ],
            'Raciocínio Lógico': [
                {
                    id: 1, topic: "Lógica", question: "Se todo homem é mortal e Sócrates é homem, então:",
                    options: ["Sócrates é grego", "Sócrates é mortal", "Nem todo homem é grego", "Sócrates é filósofo"], correct: 1,
                    explanation: { right: "Silogismo clássico!", wrong: "É uma dedução lógica direta das premissas." }
                },
                {
                    id: 2, topic: "Conjuntos", question: "Em um grupo de 10 pessoas, 7 gostam de café e 5 de chá. Quantas gostam dos dois?",
                    options: ["2", "3", "4", "5"], correct: 0,
                    explanation: { right: "Correto! (7+5) - 10 = 2.", wrong: "Use a fórmula: n(AUB) = n(A) + n(B) - n(A∩B)." }
                },
                {
                    id: 3, topic: "Proposições", question: "A negação da proposição 'Todo aluno é estudioso' é:",
                    options: ["Nenhum aluno é estudioso", "Algum aluno não é estudioso", "Todo aluno não é estudioso", "Nenhum aluno não é estudioso"], correct: 1,
                    explanation: { right: "Isso! A negação de 'todo' é 'pelo menos um não'.", wrong: "Para negar o 'todo', basta um contraexemplo." }
                },
                {
                    id: 4, topic: "Sequências", question: "Qual o próximo número na sequência: 2, 4, 8, 16, ...?",
                    options: ["24", "30", "32", "64"], correct: 2,
                    explanation: { right: "Correto! Progressão geométrica de razão 2.", wrong: "A sequência dobra a cada passo: 16 * 2 = 32." }
                },
                {
                    id: 5, topic: "Lógica", question: "Se P é verdadeiro e Q é falso, o valor de 'P e Q' é:",
                    options: ["Verdadeiro", "Falso", "Inconclusivo", "Depende do contexto"], correct: 1,
                    explanation: { right: "Exato! Para o 'E' ser verdade, ambos devem ser verdade.", wrong: "A conjunção (E) exige que ambas as partes sejam verdadeiras." }
                }
            ]
        }
    },
    universidade: {
        title: "Universidade",
        subjects: {
            'Metodologia e Lógica': [
                {
                    id: 1, topic: "ABNT", question: "Nas normas ABNT, a citação direta com mais de 3 linhas deve ter:",
                    options: ["Aspas duplas", "Recuo de 4cm", "Itálico", "Negrito"], correct: 1,
                    explanation: { right: "Correto! Recuo de 4cm e fonte menor.", wrong: "Citações longas exigem recuo especial sem aspas." }
                },
                {
                    id: 2, topic: "Ciência", question: "O que caracteriza o conhecimento científico frente ao senso comum?",
                    options: ["Doutrinação", "Metodologia e verificabilidade", "Fé absoluta", "Opinião popular"], correct: 1,
                    explanation: { right: "Exato! A ciência exige método e prova.", wrong: "A verificabilidade é pilar do método científico." }
                },
                {
                    id: 3, topic: "ABNT", question: "A lista de obras consultadas ao final de um trabalho acadêmico chama-se:",
                    options: ["Apêndice", "Anexo", "Referências", "Glossário"], correct: 2,
                    explanation: { right: "Isso! Referências Bibliográficas.", wrong: "O termo correto segundo a ABNT é Referências." }
                },
                {
                    id: 4, topic: "Lógica", question: "Uma 'falácia' em um argumento acadêmico é:",
                    options: ["Uma verdade absoluta", "Um erro de raciocínio que invalida o argumento", "Uma citação direta", "Uma nota de rodapé"], correct: 1,
                    explanation: { right: "Correto!", wrong: "Falácia é um argumento que parece válido mas é logicamente falho." }
                },
                {
                    id: 5, topic: "Metodologia", question: "Um resumo de trabalho acadêmico (Abstract) deve conter preferencialmente:",
                    options: ["Apenas agradecimentos", "Objetivos, métodos e resultados", "Lista de tabelas", "Currículo do autor"], correct: 1,
                    explanation: { right: "Isso! É a síntese completa do trabalho.", wrong: "O resumo deve apresentar a essência da pesquisa." }
                }
            ],
            'Cultura e Ciência': [
                {
                    id: 1, topic: "Conhecimento", question: "O método científico baseia-se primordialmente em:",
                    options: ["Opinião pessoal", "Evidência e experimentação", "Tradição", "Autoridade"], correct: 1,
                    explanation: { right: "Exato!", wrong: "A ciência exige provas verificáveis e testes." }
                },
                {
                    id: 2, topic: "Ética", question: "A ética profissional no meio acadêmico (Bioética/Integridade) condena o:",
                    options: ["Estudo em grupo", "Plágio", "Uso de bibliotecas", "Publicação de artigos"], correct: 1,
                    explanation: { right: "Correto! O plágio é uma grave falta ética.", wrong: "Apropriar-se de ideias alheias sem citar é plágio." }
                },
                {
                    id: 3, topic: "Epistemologia", question: "O Empirismo defende que o conhecimento provém da:",
                    options: ["Razão pura", "Experiência sensorial", "Intuição divina", "Hereditariedade"], correct: 1,
                    explanation: { right: "Isso! Foco nos sentidos e experiência.", wrong: "Para os empiristas, nascemos como uma folha em branco preenchida pela experiência." }
                },
                {
                    id: 4, topic: "História da Ciência", question: "Quem formulou a Teoria da Evolução por Seleção Natural?",
                    options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Gregor Mendel"], correct: 2,
                    explanation: { right: "Exato!", wrong: "Darwin publicou 'A Origem das Espécies' em 1859." }
                },
                {
                    id: 5, topic: "Tecnologia", question: "O termo 'Big Data' refere-se ao processamento de:",
                    options: ["Pequenos textos", "Grandes volumes de dados complexos", "Apenas imagens", "Senhas de usuários"], correct: 1,
                    explanation: { right: "Correto! Volumes massivos de informação.", wrong: "Big Data trata de volume, variedade e velocidade de dados." }
                }
            ]
        }
    }
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let selectedFocus = "";

// Inicialização baseada na URL
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const focus = urlParams.get('focus');
    
    if (focus && questionData[focus]) {
        selectedFocus = focus;
        initFocus(focus);
    } else {
        // Sem parâmetro: mostrar seleção de foco
        showFocusSelection();
    }
});

function showFocusSelection() {
    const selectionGrid = document.querySelector('.selection-grid');
    selectionGrid.innerHTML = "";

    const focusOptions = [
        { key: 'ensinoMedio', title: 'Ensino Médio', desc: 'Base forte para os desafios que vêm pela frente.', icon: 'ph-backpack', color: '#4361ee' },
        { key: 'enem', title: 'Vestibular / ENEM', desc: 'Foco total na aprovação na universidade dos sonhos.', icon: 'ph-exam', color: '#f77f00' },
        { key: 'concurso', title: 'Concurso Público', desc: 'Preparação estratégica para sua aprovação.', icon: 'ph-briefcase', color: '#2ec4b6' },
        { key: 'universidade', title: 'Universidade', desc: 'Organização para lidar com a carga acadêmica.', icon: 'ph-student', color: '#9b5de5' }
    ];

    focusOptions.forEach(opt => {
        const card = document.createElement('div');
        card.className = 'selection-card fade-in visible';
        card.onclick = () => {
            selectedFocus = opt.key;
            initFocus(opt.key);
        };
        card.innerHTML = `
            <div class="selection-icon" style="background: ${opt.color}15; color: ${opt.color};"><i class="ph-fill ${opt.icon}"></i></div>
            <h3>${opt.title}</h3>
            <p>${opt.desc}</p>
            <button class="btn btn-primary">Iniciar Diagnóstico</button>
        `;
        selectionGrid.appendChild(card);
    });
}

function initFocus(focusKey) {
    const data = questionData[focusKey];
    const selectionGrid = document.querySelector('.selection-grid');
    selectionGrid.innerHTML = "";
    
    document.querySelector('.section-header h2').innerText = `Diagnóstico: ${data.title}`;
    
    Object.keys(data.subjects).forEach(subject => {
        const iconClass = (focusKey === 'exatas' || focusKey === 'enem') ? 'exatas' : 'humanas';
        const card = document.createElement('div');
        card.className = 'selection-card fade-in';
        card.onclick = () => startQuiz(focusKey, subject);
        card.innerHTML = `
            <div class="selection-icon ${iconClass}"><i class="ph-fill ph-book-open"></i></div>
            <h3>${subject}</h3>
            <p>Teste seus conhecimentos em ${subject}.</p>
            <button class="btn btn-primary">Iniciar Teste</button>
        `;
        selectionGrid.appendChild(card);
    });
}

function startQuiz(focusKey, subject) {
    currentQuestions = [...questionData[focusKey].subjects[subject]];
    currentQuestionIndex = 0;
    userAnswers = [];
    
    document.getElementById('step-selection').classList.remove('active');
    document.getElementById('step-quiz').classList.add('active');
    
    // Update Nav
    document.getElementById('nav-step-1').classList.remove('active');
    document.getElementById('nav-step-2').classList.add('active');
    
    document.getElementById('current-subject').innerText = subject;
    
    renderQuestion();
}

function renderQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question-counter').innerText = `Questão ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    document.getElementById('quiz-progress').style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    
    const card = document.getElementById('question-card');
    card.classList.remove('visible'); // Trigger fade-in
    
    setTimeout(() => {
        document.getElementById('question-text').innerText = question.question;
        const container = document.getElementById('options-container');
        container.innerHTML = "";
        
        question.options.forEach((opt, idx) => {
            const btn = document.createElement('div');
            btn.className = 'option-item';
            btn.innerHTML = `
                <input type="radio" name="quiz-option" id="opt-${idx}" value="${idx}">
                <label for="opt-${idx}">${opt}</label>
            `;
            btn.onclick = () => {
                document.getElementById('next-btn').disabled = false;
                const radios = document.getElementsByName('quiz-option');
                radios[idx].checked = true;
            };
            container.appendChild(btn);
        });
        
        card.classList.add('visible');
        document.getElementById('next-btn').disabled = true;
    }, 100);
}

function handleNext() {
    const selected = document.querySelector('input[name="quiz-option"]:checked');
    if (!selected) return;
    
    userAnswers.push(parseInt(selected.value));
    
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('step-quiz').classList.remove('active');
    document.getElementById('step-results').classList.add('active');
    
    // Update Nav
    document.getElementById('nav-step-2').classList.remove('active');
    document.getElementById('nav-step-3').classList.add('active');
    
    let correctCount = 0;
    const reviewContainer = document.getElementById('questions-review');
    reviewContainer.innerHTML = "";
    
    const performanceData = {
        correct: 0,
        wrong: 0,
        topics: {}
    };

    currentQuestions.forEach((q, i) => {
        const userChoice = userAnswers[i];
        const isCorrect = userChoice === q.correct;
        if (isCorrect) correctCount++;

        // Track topics for chart and recommendations
        if (!performanceData.topics[q.topic]) performanceData.topics[q.topic] = { total: 0, correct: 0 };
        performanceData.topics[q.topic].total++;
        if (isCorrect) performanceData.topics[q.topic].correct++;

        // Build Review Card
        const reviewCard = document.createElement('div');
        reviewCard.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
        reviewCard.innerHTML = `
            <div class="review-header" onclick="this.parentElement.classList.toggle('expanded')">
                <span class="status-icon"><i class="ph-fill ph-${isCorrect ? 'check-circle' : 'x-circle'}"></i></span>
                <p class="review-q-text">${q.question}</p>
                <i class="ph ph-caret-down toggle-icon"></i>
            </div>
            <div class="review-body">
                <p><strong>Sua resposta:</strong> ${q.options[userChoice]}</p>
                <p><strong>Resposta correta:</strong> ${q.options[q.correct]}</p>
                <div class="explanation">
                    <strong>Explicação:</strong> ${isCorrect ? q.explanation.right : q.explanation.wrong}
                </div>
            </div>
        `;
        reviewContainer.appendChild(reviewCard);
    });

    const scorePercent = Math.round((correctCount / currentQuestions.length) * 100);
    document.getElementById('final-score').innerText = `${scorePercent}%`;
    
    renderChart(performanceData);
    generateRecommendations(performanceData);
}

function renderChart(data) {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    const labels = Object.keys(data.topics);
    const scores = labels.map(label => (data.topics[label].correct / data.topics[label].total) * 100);
    
    // Dynamic colors based on score
    const backgroundColors = scores.map(score => {
        if (score >= 80) return 'rgba(74, 222, 128, 0.6)'; // Green
        if (score >= 50) return 'rgba(255, 140, 50, 0.6)'; // Orange
        return 'rgba(248, 113, 113, 0.6)'; // Red
    });

    const borderColors = scores.map(score => {
        if (score >= 80) return 'rgba(74, 222, 128, 1)';
        if (score >= 50) return 'rgba(255, 140, 50, 1)';
        return 'rgba(248, 113, 113, 1)';
    });

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Seu Nível por Tópico (%)',
                data: scores,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y', // Horizontal bars for better readability of topic names
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: { display: false },
                    ticks: { callback: value => value + '%' }
                },
                y: {
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (context) => ` Nível: ${context.raw}%`
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function generateRecommendations(data) {
    const list = document.getElementById('recommendations-list');
    list.innerHTML = "";
    
    const missedTopics = Object.keys(data.topics).filter(topic => data.topics[topic].correct < data.topics[topic].total);
    
    if (missedTopics.length === 0) {
        list.innerHTML = "<li>🎉 Parabéns! Você dominou todos os tópicos deste teste. Que tal tentar o outro módulo?</li>";
    } else {
        missedTopics.forEach(topic => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="ph-bold ph-arrow-circle-right"></i> Reforce seus estudos em <strong>${topic}</strong>`;
            list.appendChild(li);
        });
    }
}
