const campos = document.querySelectorAll(".campo-formulario");
const botaoEnviar = document.querySelector(".botao-de-envio");
const mensagensErro = document.querySelectorAll(".campo-obrigatorio");

botaoEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    campos.forEach((campo) => { 
        const mensagemErro = campo.nextElementSibling; 
        if (campo.value === "") {
            campo.classList.add("invalido");
            campo.classList.remove("valido");
            mensagemErro.classList.add("ativo");
        } else {
            campo.classList.remove("invalido");
            campo.classList.add("valido");
            mensagemErro.classList.remove("ativo");
        }
    });
});
