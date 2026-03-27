import peliculas from './peliculas.js'

const path_base_img = "https://image.tmdb.org/t/p/w200";

//Definimos los géneros como un array de objetos.
const generos = [
    { nombre: "accion",   id_genero: 28 },
    { nombre: "thriller", id_genero: 53 },
    { nombre: "aventura", id_genero: 12 },
];

//Función que a partir de un elemento de película genera el html de la película.
const getMovieElementHTML = (pelicula = {}) => `
    <div id="movie-${pelicula.id}" class="movie">
        <div class="imgmovie">
            <img src="${path_base_img}${pelicula.poster_path}" alt="${pelicula.title}">
        </div>
        <div class="titlemovie">${pelicula.title}</div>
    </div>`;

//Recorremos los géneros y añadimos las películas a su contenedor
//correspondiente, teniendo en cuenta que en el HTML los contenedores
//tienen el id "genero-{id}".
generos.forEach(({ id_genero }) => {
    const contenedor = document.getElementById(`genero-${id_genero}`);
    if (!contenedor) return;
    // Filtramos las películas por el id del género, el resultado lo mapeamos
    // y lo añadimos al contenedor, haciendo un join para convertir el array en un string.
    contenedor.innerHTML = peliculas
        .filter(p => p.genre_ids.includes(id_genero))
        .map(getMovieElementHTML)
        .join("");
});