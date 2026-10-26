const botoes = document.querySelectorAll(".adicionar");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        botao.textContent = "Adicionado";
    });
});