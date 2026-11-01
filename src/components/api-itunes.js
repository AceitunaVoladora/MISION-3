const URL_API = "https://itunes.apple.com/search";
const LIMITE = "20";
const PAIS = "ES";

const ENTIDADES = {
    cancion: "song",
    artista: "musicArtist",
    album: "album"
}

export async function buscarContenido(termino, tipo, signal){
    const entity = ENTIDADES[tipo];
    if (!entity) throw new Error(`Tipo de búsqueda no válido: ${tipo}`);
    
    const url = new URL(URL_API);

    url.search = new URLSearchParams({
        term: termino,
        media: "music",
        entity,
        limit: LIMITE,
        country: PAIS
    });

    const respuesta = await fetch(url, {signal});

    if(!respuesta.ok){
        throw new Error("No se pudo obtener las canciones");
    }

    const datos = await respuesta.json();

    if (!Array.isArray(datos.results)) {
        throw new Error("Respuesta de la API con formato inesperado");
    }

    return datos.results;
}