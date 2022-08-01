

/*const moviesContainer = document.querySelector("#moviesContainer");

const moviesURL = "https://starwars-server.vercel.app/movies";



window.onload = () => {
    initMovies();
}
const initMovies = async () => {
    const movies = await getMovies();
    mapMovies (movies);
};

const getMovies = async () => {
    const rawDatas = await fetch (moviesURL);
    const jsonDatas = rawDatas.json();
    return jsonDatas;
};

const mapMovies = (lista) => {
    lista.data.movies.map((items) => {
        return printMovies({
            titulo: movie.name,
            fecha: movie.year,
            imagen: movie.poster,
        });
    }
    );
}; */



/*const printMovies = (items) => {
    const peliculas =`
    <figure>
    <h3>${items.titulo}</h3>
    <h4>${items.fecha}</h4>
    <img src="${items.imagen}" referrerpolicy="no-referrer" alt="${items.titulo}" />
    `
    print(peliculas);
};

const print = (v) => {
    moviesContainer.innerHTML += v;
}

/*

/*const printCharacters = (item) => {
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

initCharacters();*/


const mainURL = "https://starwars-server.vercel.app/movies";

window.onload = () => {
    init();
};

const init = async () => {
    const movies = await getMovies();
    mappedMovie(movies)
};

const getMovies = async () => {
    const movieAPI = await fetch(mainURL);
    const convertToJson = movieAPI.json();
    return convertToJson
};

const mappedMovie = (films) => {
    films.data.movies.map((movie) => {
        return printMovie({numero: movie.number,
                        nombre: movie.name,
                        año: movie.year,
                        imagen: movie.poster,
                        trama: movie.crawl,
                        filmMakers: getFilmMakers(movie.filmMakers)
        })
    })
};
const getFilmMakers = (filmMakers) => {
    const filmMakersList = []
    filmMakers.forEach(filmMaker => {
        filmMakersList.push(`${filmMaker.role}: ${filmMaker.name}`)        
    });
    return filmMakersList;
};

const printMovie = (movie) => {
    const movieContainer = document.querySelector('#films_container')
    movieContainer.innerHTML += `
    <figure class="figure_container">
        <div class="name_origin_container">
            <h4>${movie.año}</h4>
            <h3>${movie.nombre}</h3>
        </div>
        <div class class "image-container"">
        <img src=${movie.imagen} alt=${movie.nombre} referrerpolicy="no-referrer"/>
        </div>
        <h4>${movie.filmMakers.join('/')}</h4>
        <h4>Argument:</h5>
        <p>${movie.trama}</p>
        
    </figure>
    `
}; 