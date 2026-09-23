//Contador

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {

    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
};


const contagemRegressiva = (tempo) => {

    const pararContagem = () => clearInterval(id);

    const contar = () => {

        if (tempo <= 0) {
            atualizar(0);
            pararContagem();
            return;
        }

        atualizar(tempo);
        tempo--;
    };

    const id = setInterval(contar, 1000);
};


const tempoRestante = () => {

    const dataEvento = new Date('2026-10-09 12:00:00');
    const hoje = Date.now();

    return Math.floor((dataEvento - hoje) / 1000);
};


// Só executa o contador se os elementos existirem
const elementoContador = document.getElementById('dias');

if (elementoContador) {
    contagemRegressiva(tempoRestante());
}

// Formulário da página de contato
const formulario = document.getElementById("formContato");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagemForm");

        mensagem.textContent = "Mensagem enviada com sucesso, " + nome + "!";
        mensagem.style.color = "#1769e0";

        formulario.reset();
    });
}
