////Characters

const charactersContainer = document.querySelector("#charactersContainer");

const charactersURL = "https://starwars-server.vercel.app/characters";
const moviesURL = "https://starwars-server.vercel.app/movies";


/*
window.onload = () => {
    initCharacters();
}*/

const initCharacters = async () => {
const characters = await getCharacters();
mapCharacters(characters);
};

const getCharacters = async () => {

    const rawData = await fetch(charactersURL);
    const jsonData = await rawData.json();
    console.log(jsonData);
    return jsonData;

};


const mapCharacters = (list) => {
    list.data.characters.map((item) => {
    return printCharacters({
        nombre: item.name,
        origen: item.origin,
        rol: item.role,
        imagen: item.image,
        descripcion: item.description,
    });
    });
};
const printCharacters = (item) => {
    const personajes =`
    <figure>
    <h3>${item.nombre}</h3>
    <h4>${item.origen}</h4>
    <img src="${item.imagen}" referrerpolicy="no-referrer" alt="${item.nombre}" />
    <h4>${item.rol}</h4>
    <p>${item.descripcion}</p>
    </figure>
    `
    print (personajes);

};

const print = (x) => {
charactersContainer.innerHTML += x;
}

initCharacters();


