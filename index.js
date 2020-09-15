const searchAPI = () => {
    const API_URL = "https://pokeapi.co/api/v2/pokemon/"
    let idPokemon = document.getElementById("idPokemon").value
    let require = new Request(`${API_URL}${idPokemon}`)

    fetch(require)
        .then(response => response.json())
        .then(data => {
            cardData(data)
            console.log(data)
        })

        .catch(err => console.log(err))
}

const cardData = (data) => {
    const hability = data.abilities
    //console.log(hability)
    let arrayHability = []

    for(let i in hability) {
        arrayHability.push(' ' + hability[i].ability.name)
        //console.log(arrayHability[i])
    }


    //Aqui estoy indicandole que me pegue en el HTMl los valores de id y el name del repo
    repos.innerHTML += `
    <img class="imgPokemon" src="${data.sprites.front_default}" alt="${data.name.toUpperCase()}">
    <div class="textPokemon">
        <p>Id: <span>${data.id}</span></p>
        <p>Nombre: <span>${data.name.toUpperCase()}</span></p>
        <p>Habilidad:<span>${arrayHability}</span></p>
        <p>Experiencia: <span>${data.base_experience}</span></p>
        <p>Peso: <span>${data.weight} kg</span></p>
    </div>
    `
}