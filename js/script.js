// Contador regressivo para 09/10/2026 às 12h00
const dataEvento = new Date("2026-10-09T12:00:00-03:00").getTime();

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataEvento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor(
        (diferenca % (1000 * 60)) / 1000
    );

    const elementoDias = document.getElementById("dias");

    if (!elementoDias) {
        return;
    }

    if (diferenca <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);


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
