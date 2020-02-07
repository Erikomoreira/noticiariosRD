let noticias = document.querySelector("#bordeNoticia");
let btnCarregar = document.querySelector("#carregar");

const API_KEY = "5e5a08d6b65245f480971dad60b60c61";

let config = {
    method: "GET"
}

// Then - quando terminar o fetch SSSSSS

function mostrarNaTela(listaNoticias) {

    listaNoticias.forEach((textoNoticia) => {

        let noticiaNova = ` <div class="card col-md-4">
        <img src= ${textoNoticia.urlToImage}
            class="card-img-top" alt="Descrição da noticia">
        <div class="card-body text-justify">
            <h5 class="card-title">${textoNoticia.title}</h5>
            <p class="card-text">${textoNoticia.description}</p>
            <a href=${textoNoticia.url} class="btn btn-primary">Ver notícia completa</a>
        </div>
    </div> `

    
        noticias.insertAdjacentHTML('beforeend', noticiaNova)

    });

}


btnCarregar.onclick = () => {

    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta) => {
            return resposta.json()
        })
        .then((json) => {

            console.log(json.articles[0])

            mostrarNaTela(json.articles)
        })

}