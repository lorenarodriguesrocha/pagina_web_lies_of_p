const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

// Selecione todas as plataformas
const plataformas = document.querySelectorAll(".btn-plataforma .plataformas li");

// Adicione um evento de clique para cada plataforma
plataformas.forEach(plataforma => {
    plataforma.addEventListener("click", () => {
        // Obtenha o link associado à plataforma clicada
        const link = plataforma.dataset.link;
        // Redirecione para a página associada à plataforma
        window.location.href = link;
    });
});
