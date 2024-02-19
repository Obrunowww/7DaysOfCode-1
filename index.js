const inputs = document.querySelectorAll("input");
const botão = document.querySelector("button");
const mostrarNome = document.querySelector("header p");
const Main = document.querySelector("main");
const sessão = document.querySelector("main .pergunta");
const caixaDeErro = document.querySelector(".erro");
const erromensagem = document.querySelector(".erro p");


let PerguntaFeita = false;

let nome = null;
let idade = null;
let linguagem = null;

const Sim = () =>{
    Main.innerHTML = "<section>Muito bom! Continue estudando e você terá muito sucesso.</section>"
}
const Não = () =>{
    Main.innerHTML ="<section>Ahh que pena... Já tentou aprender outras linguagens?</section>"
}


const mostarRespostas = () =>{
    
    Main.innerHTML = `
    <section>
    <p>Olá ${nome}, você tem  ${idade} anos e já está aprendendo ${linguagem}</p>
    </section>
    
    `


    setTimeout(() => {
        Main.innerHTML = `
        <section>
        <p>Você gosta de estudar ${linguagem}?</p>
        <div>
        <button onclick="Sim()">Sim</button>
        <button onclick="Não()">Não</button>
        </div>
        </section>
        
        `
    }, 5000);
}

const alertarErro = (erro) =>{
    erromensagem.innerHTML = `${erro}`
    caixaDeErro.style.display = "flex"
    caixaDeErro.style.animation = "desaparecer ease 4s"

    setTimeout(() => {
        erromensagem.innerHTML = ``
        caixaDeErro.style.display = "none"
        caixaDeErro.style.animationName = "aparecer ease 2s"
    }, 2000);
}

const verificarPergunta = () =>{
    nome = inputs[0].value;
    idade = inputs[1].value;
    linguagem = inputs[2].value;
    PerguntaFeita = true;

    if(nome && idade && linguagem){
        if(PerguntaFeita){
            mostrarNome.innerHTML = `${nome}`
            sessão.style.animation = "desaparecer ease 1s"
            setTimeout(() => {
                sessão.style.display = "none"
                mostarRespostas();
            }, 500);
        }
    }else{
        PerguntaFeita = false;
        alertarErro("Preencha todas as caixas");
    }
};


botão.addEventListener("click", verificarPergunta);

const verificarCorDoBotão = () =>{
    const todosPreenchidos = Array.from(inputs).every(input => input.value.trim() !== "");
    if (todosPreenchidos) {
        botão.style.backgroundColor = "rgba(0, 128, 0, 0.466)";
    } else {
        botão.style.backgroundColor = "rgba(255, 6, 6, 0.568)";
    }

}
inputs.forEach(input =>{
    input.addEventListener("change", verificarCorDoBotão)
})
