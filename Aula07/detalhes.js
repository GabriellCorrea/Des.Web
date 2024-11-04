const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json()
    return dados;
}

pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    ( obj ) => {
        const nome = document.createElement("h1");
        nome.innerHTML = obj.nome;

        document.body.appendChild(nome);

        const imagem = document.createElement("img")
        imagem.src = obj.imagem;
        imagem.alt = `foto de ${obj.nome}`

        document.body.appendChild(imagem);
    }
)
