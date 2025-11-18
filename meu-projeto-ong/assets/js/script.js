// Menu hambúrguer
const menu = document.querySelector('.menu');
const hamburguer = document.querySelector('.menu-hamburguer');
hamburguer.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

// Máscaras
function aplicarMascaraCPF(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
}

function aplicarMascaraTelefone(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
}

function aplicarMascaraCEP(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
}

document.addEventListener("input", function(e) {
    if(e.target.id === "cpf") e.target.value = aplicarMascaraCPF(e.target.value);
    if(e.target.id === "telefone") e.target.value = aplicarMascaraTelefone(e.target.value);
    if(e.target.id === "cep") e.target.value = aplicarMascaraCEP(e.target.value);
});
