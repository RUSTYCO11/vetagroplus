const caixaPrincipal = document.que", "Acessibilidade com tecnologias assistivas, comunidades online, facilitando o acesso ao conhecimento.rySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".textoResultado");

const perguntas = [
    {
        enunciado: "informe o estado do seu animal a baixo!",
            alternativas: ["baixo, médio, grave ou alterado."]
        },
    {
        enunciado: "quanto tempo o animal vem representando esses sintomas?",
        alternativas: ["menos de uma semana, mais de duas semanas ou mais de um mês"]
    },
    {
        enunciado: "informe qual e seu animal?",
        alternativas: ["Bovino, Suino, Equino, Cabrino ou outros"]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta(); 
}
mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}