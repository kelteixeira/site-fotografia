const form = document.getElementById("form");

form.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();
        let nome = document.getElementById("nome").value;
        let tel = document.getElementById("tel").value;
        let mensagem = document.getElementById("mensagem").value;
        if (nome.trim() === " ") {
            alert("Por favor, preencha seu nome!");
        }
        else if (tel.trim() === " ") {
            alert("Por favor, preencha seu telefone!");
        }
        else if (mensagem.trim() === " ") {
            alert("Por favor, preencha sua mensagem");
        }
        else {
            const mensagemEnvio = "Olá, gostaria de mais informações!"
                + "\n\n *Nome*: " + nome
                + "\n *Telefone*: " + tel
                + "\n *Qual sua dúvida?* " + mensagem

            let linkWhats = `https://wa.me/5543991928501?text=${encodeURIComponent(mensagemEnvio)}`;

                window.open(linkWhats, "_blank");
        }
    }
)