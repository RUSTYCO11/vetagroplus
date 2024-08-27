const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".textoResultado");

const perguntas = [
    {
        enunciado: "informe o estado do seu animal a baixo!",
            alternativas: ["baixo,médio ou alterado."]
        },
    {
        enunciado: "quanto tempo o animal vem representando esses sintomas?",
        alternativas: ["", "Acessibilidade com tecnologias assistivas, comunidades online, facilitando o acesso ao conhecimento."]
    },
    {
        enunciado: "Nos dias atuais percebemos que diversas alterações climáticas estão causando desastres naturais com uma intensidade que era esperada para daqui a 20 anos. Cada vez mais estão se confirmando episódios de desastres naturais devido ao aquecimento global. Esse cenário demanda o surgimento de novas profissões que venham a mitigar esse quadro. Para o seu futuro, você escolherá qual tipo de profissão?",
        alternativas: ["Eu não acredito no aquecimento global é fake news! Eu me importo com uma profissão rentável!", "Eu acredito no aquecimento global e vou me focar em profissões tecnológicas que ajudem na mitigação!"]
    },
];