const modal = document.getElementById("modal");
const abrirModal = document.getElementById("abrirModal");
const cancelar = document.getElementById("cancelar");
const formulario = document.getElementById("formulario");
const catalogo = document.getElementById("catalogo");
const mensagemVazia = document.getElementById("mensagemVazia");

abrirModal.addEventListener("click", () => {
    modal.showModal();
});

cancelar.addEventListener("click", () => {
    modal.close();
    formulario.reset();
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const plataforma = document.getElementById("plataforma").value;
    const desenvolvedora = document.getElementById("desenvolvedora").value;
    const imagem = document.getElementById("imagem").value;
    const preco = Number(document.getElementById("preco").value);

    const card = document.createElement("article");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = imagem;
    img.alt = "Capa do jogo " + titulo;

    img.onerror = () => {
        img.alt = "Imagem da capa indisponível";
        img.removeAttribute("src");
    };

    const conteudo = document.createElement("div");
    conteudo.classList.add("card-conteudo");

    const nome = document.createElement("h3");
    nome.textContent = titulo;

    const plataformaTexto = document.createElement("p");
    plataformaTexto.textContent = "Plataforma: " + plataforma;

    const desenvolvedoraTexto = document.createElement("p");
    desenvolvedoraTexto.textContent = "Desenvolvedora: " + desenvolvedora;

    const precoTexto = document.createElement("p");
    precoTexto.classList.add("preco");

    precoTexto.textContent = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    conteudo.append(
        nome,
        plataformaTexto,
        desenvolvedoraTexto,
        precoTexto
    );

    card.append(img, conteudo);
    catalogo.appendChild(card);

    mensagemVazia.style.display = "none";

    formulario.reset();
    modal.close();
});