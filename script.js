// 1. VARIÁVEL GLOBAL - Impede que as frases se misturem ao clicar rápido
let intervaloDigitacao = null;

const bios = {
    foco: [
        "Foco é dizer não ao que te distrai.",
        "Disciplina é fazer mesmo sem vontade.",
        "Quem tem foco chega mais longe.",
        "Sem disciplina não existe resultado.",
        "Foque no objetivo, ignore o resto.",
        "Faça o que precisa ser feito.",
        "Controle sua mente ou ela te controla.",
        "A disciplina cria o sucesso.",
        "Foco hoje, vitória amanhã.",
        "Menos distração, mais ação.",
        "Seja fiel ao seu plano.",
        "A constância vence tudo.",
        "Foco total, desculpa zero.",
        "A rotina constrói campeões.",
        "O segredo é não parar.",
        "Disciplina supera talento.",
        "Faça mesmo sem motivação.",
        "O foco elimina o medo.",
        "Continue mesmo cansado.",
        "A mente forte não desiste.",
        "Ignore o barulho externo.",
        "Treine sua disciplina todo dia.",
        "O foco define seu destino.",
        "Você controla suas escolhas.",
        "Faça mais do que o necessário.",
        "Disciplina é liberdade.",
        "A vitória exige foco.",
        "Seja consistente.",
        "Não negocie com a preguiça.",
        "Faça agora.",
        "A ação vence a dúvida.",
        "Foco no processo.",
        "A disciplina constrói hábitos.",
        "Não desvie do caminho.",
        "Seja determinado.",
        "Trabalhe duro em silêncio.",
        "A rotina cria resultados.",
        "Continue firme.",
        "Controle suas distrações.",
        "Foque no que importa.",
        "A disciplina te diferencia.",
        "Seja mais forte que sua vontade de parar.",
        "Persistência é disciplina diária.",
        "O foco traz clareza.",
        "Faça acontecer todo dia.",
        "Não espere, execute.",
        "Mente focada, vida organizada.",
        "Continue mesmo sem reconhecimento.",
        "Foco é poder.",
        "Disciplina é vitória diária."
    ],
    sucesso: [
        "O sucesso começa na decisão de não desistir.",
        "Progresso é melhor que perfeição.",
        "Cada dia é uma nova chance de evoluir.",
        "Pequenos passos levam a grandes conquistas.",
        "Disciplina vence talento.",
        "Continue mesmo quando for difícil.",
        "Você é mais forte do que pensa.",
        "O effort de hoje é o resultado de amanhã.",
        "Não espere motivação, crie hábito.",
        "Crescer dói, mas ficar parado dói mais.",
        "Quem insiste vence.",
        "O progresso não para por ninguém.",
        "Faça acontecer.",
        "Erros são lições disfarçadas.",
        "Foque no seu objetivo.",
        "Persistência constrói resultados.",
        "A vitória é de quem continua.",
        "Supere seus limites.",
        "Seu futuro depende do agora.",
        "Faça mais, reclame menos.",
        "A consistência gera sucesso.",
        "Não pare até se orgulhar.",
        "Você pode ir além.",
        "A disciplina é a chave.",
        "Cresça um pouco todo dia.",
        "O sucesso é construído, não sorteado.",
        "Comece antes de estar pronto.",
        "O progresso é contínuo.",
        "Seja melhor que ontem.",
        "Confie no processo.",
        "Continue avançando.",
        "Cada esforço conta.",
        "Evolua sempre.",
        "O caminho é difícil, mas vale a pena.",
        "Você está mais perto do que imagina.",
        "Faça acontecer, sem desculpas.",
        "Resultados vêm com constância.",
        "O impossível é só questão de tempo.",
        "Tenha foco e fé.",
        "Nunca pare de tentar.",
        "O sucesso exige sacrifício.",
        "A ação muda tudo.",
        "Faça o que precisa ser feito.",
        "Crescer é uma escolha.",
        "Você é capaz.",
        "Desafios fazem você mais forte.",
        "Continue mesmo cansado.",
        "O progresso é invisível no começo.",
        "Seja determinado.",
        "O sucesso é consequência do esforço."
    ],
    reflexao: [
        "A sabedoria começa no silêncio e termina na ação.",
        "Nem tudo que dói é ruim, às vezes é crescimento.",
        "O tempo não volta, mas sempre ensina.",
        "Quem aprende com os erros evolui mais rápido.",
        "Nem todo silêncio é vazio, às vezes é paz.",
        "Você não precisa provar nada pra ninguém.",
        "Crescer dói, mas ficar parado dói mais.",
        "A pressa faz você tropeçar no caminho.",
        "Valorize quem fica quando tudo complica.",
        "Nem todo mundo merece acesso à sua vida.",
        "Sua mente pode ser sua maior aliada ou inimiga.",
        "Pequenas atitudes mudam grandes histórias.",
        "Quem planta verdade colhe confiança.",
        "A comparação rouba sua felicidade.",
        "Nem sempre ganhar é vencer.",
        "Aprenda a dizer “não” sem culpa.",
        "Você ensina as pessoas como te tratar.",
        "A disciplina te leva onde a motivação não alcança.",
        "Nem tudo precisa de resposta imediata.",
        "A calma resolve o que a pressa estraga.",
        "Você é mais forte do que pensa.",
        "O medo também pode ser um professor.",
        "Quem insiste evolui, quem desiste estagna.",
        "A vida cobra, mas também recompensa.",
        "Nem todo conselho merece ser seguido.",
        "A sua paz vale mais que qualquer discussão.",
        "O esforço de hoje vira orgulho amanhã.",
        "Cada pessoa está lutando uma batalha invisível.",
        "Você não controla tudo, e tá tudo bem.",
        "A maturidade muda suas prioridades.",
        "Às vezes, perder é se libertar.",
        "Não confunda atenção com carinho.",
        "O tempo revela quem é de verdade.",
        "A verdade pode doer, mas liberta.",
        "Nem toda oportunidade deve ser aceita.",
        "Quem respeita limites vive melhor.",
        "Sua história não acabou ainda.",
        "Reclamar não resolve, agir sim.",
        "Pessoas mudam, e isso faz parte.",
        "Nem todo mundo quer o seu bem.",
        "Aprenda a ficar bem sozinho.",
        "O passado é lição, não moradia.",
        "O presente é o único tempo real.",
        "O futuro depende do que você faz hoje.",
        "Nem toda ausência é perda.",
        "O orgulho afasta mais do que protege.",
        "Quem fala menos observa mais.",
        "O simples muitas vezes é o suficiente.",
        "Não espere reconhecimento de todos.",
        "Você não precisa ser perfeito.",
        "A vida é feita de escolhas.",
        "Errar faz parte do processo.",
        "Você não é suas falhas.",
        "O respeito começa em você.",
        "Nem toda dor precisa ser compartilhada.",
        "A mudança começa dentro de você.",
        "Quem não evolui, repete.",
        "A felicidade está nas pequenas coisas.",
        "Nem todo esforço é visto, mas é válido.",
        "Seja paciente com seu processo.",
        "Tudo tem seu tempo certo."
    ]
};

// 2. LÓGICA DE GERAÇÃO COM CORRETOR ANTI-MISTURA
function gerarBio(categoria) {
    const lista = bios[categoria];
    const output = document.getElementById('bio-output');
    
    if (!lista || !output) return;

    // Para qualquer digitação anterior antes de começar a nova
    if (intervaloDigitacao) {
        clearInterval(intervaloDigitacao);
    }

    const frase = lista[Math.floor(Math.random() * lista.length)];
    output.value = ""; // Limpa o campo imediatamente
    let i = 0;

    // Inicia a digitação de forma limpa
    intervaloDigitacao = setInterval(() => {
        if (i < frase.length) {
            output.value += frase.charAt(i);
            i++;
        } else {
            clearInterval(intervaloDigitacao);
            intervaloDigitacao = null;
        }
    }, 30);
}

// 3. FUNÇÃO PARA COPIAR
function copiarBio() {
    const text = document.getElementById('bio-output');
    if (text.value !== "") {
        text.select();
        text.setSelectionRange(0, 99999); // Suporte para mobile
        document.execCommand('copy');
        alert("Copiado com sucesso!");
    }
}
