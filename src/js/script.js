const campos = document.querySelectorAll(".campo-formulario");
const botaoEnvio = document.querySelector(".botao-de-envio");
const mensagensErro = document.querySelectorAll(".campo-obrigatorio");

botaoEnvio.addEventListener("click", (evento) => {
    evento.preventDefault();
    campos.forEach((campo, indice) => {
        const mensagemErro = mensagensErro[indice];

        if(campo.value === "") {
            campo.classList.remove("valido");
            campo.classList.add("invalido");
            mensagemErro.classList.add("ativo");

            
        } else {
            campo.classList.remove("invalido");
            campo.classList.add("valido");
            mensagemErro.classList.remove("ativo");

            
           
        }
    });
});


function tratarMudanca(evento) {
    const campo = evento.target;
    const indice = Array.from(campos).indexOf(campo);
    const mensagemErro = mensagensErro[indice];


    if(campo.value === "") {
        campo.classList.add("invalido");
        mensagemErro.classList.add("ativo");

    } else {
        campo.classList.remove("invalido");
        mensagemErro.classList.remove("ativo");

    }
}

campos.forEach((campo) => {
    campo.addEventListener("input", tratarMudanca);
});
