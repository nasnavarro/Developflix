import peliculas from './peliculas.js'

// Almacenamos los géneros para seleccionarlos de un modo más sencillo y reutilizable.
const id_genre_accion = 28;
const id_genre_thriller = 53;
const id_genre_aventura = 12;

const path_base_img = "https://image.tmdb.org/t/p/w200";

//Obtenemos las películas de cada género
const pelis_accion = peliculas.filter(pelicula => pelicula.genre_ids.includes(id_genre_accion));
const pelis_thriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(id_genre_thriller));
const pelis_aventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(id_genre_aventura));

//Generamos una función encargada de crear el HTML de una película para reutilizarlo.
const getMovieElement = (movie) => {
    return `
    <div class="movie">
        <div class="imgmovie">
            <img src="${path_base_img}${movie.poster_path}" alt="${movie.title}">
        </div>
        <div class="titlemovie">${movie.title}</div>
    </div>`;
}

//Añadimos las películas de cada género a su elemento correspondiente del DOM
document.getElementById("genero-28").innerHTML += pelis_accion.map(pelicula => getMovieElement(pelicula)).join("");
document.getElementById("genero-53").innerHTML += pelis_thriller.map(pelicula => getMovieElement(pelicula)).join("");
document.getElementById("genero-12").innerHTML += pelis_aventura.map(pelicula => getMovieElement(pelicula)).join("");