const form = document.getElementById("form");
const telefone = document.getElementById("tel");

telefone.addEventListener("input", function () {

    let valor = telefone.value.replace(/\D/g, "");
    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }
    if (valor.length > 2) {
        valor = "(" + valor.substring(0, 2) + ")" + valor.substring(2);
    }
    if (valor.length > 9) {
        valor = valor.substring(0, 9) + "-" + valor.substring(9);
    }
    telefone.value = valor;
});

function validarTelefone(telefone) {
    let numeros = telefone.replace(/\D/g, "");
    return numeros.length === 11;
}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let tel = document.getElementById("tel").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "") {
        alert("Por favor, preencha seu nome!");
    }
    else if (tel.trim() === "") {
        alert("Por favor, preencha seu telefone!");
    }
    else if (!validarTelefone(tel)) {
        alert("O telefone deve conter exatamente 11 números.");
    }
    else if (mensagem.trim() === "") {
        alert("Por favor, preencha sua mensagem!");
    }
    else {

        const mensagemEnvio =
            "Olá, gostaria de mais informações!"
            + "\n\n*Nome*: " + nome
            + "\n*Telefone*: " + tel
            + "\n*Qual sua dúvida?* " + mensagem;

        let linkWhats = `https://wa.me/5543991928501?text=${encodeURIComponent(mensagemEnvio)}`;

        window.open(linkWhats, "_blank");
    }

});