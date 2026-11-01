const TAM_INI = "100x100";
const TAM_FIN = "300x300"

const NORMALIZADOR ={
    cancion: (r) => ({
        id: r.trackId,
        titulo: r.trackName,
        subtitulo: `${r.artistName} - ${r.collectionName ?? "Single"}`,
        imagen: r.artworkUrl100,
        preview: r.previewUrl,
        duracion: r.trackTimeMillis,
        genero: r.primaryGenreName ?? "Desconocido",
        url: r.trackViewUrl,
    }),
    artista: (r) => ({
        id: r.artistId,
        titulo: r.artistName,
        subtitulo: r.primaryGenreName ?? "Artista",
        imagen: null,
        preview: null,
        duracion: 0,
        genero: null,
        url: r.artistLinkUrl,
    }),
    album: (r) => ({
        id: r.collectionId,
        titulo: r.collectionName,
        subtitulo: `${r.artistName} - ${r.trackCount ?? "?"} canciones`,
        imagen: r.artworkUrl100,
        preview: null,
        duracion: 0,
        genero: r.primaryGenreName ?? "Desconocido",
        url: r.collectionViewUrl,
    }),
};

export function presentarResultados(resultados, tipo){
    const normalizar = NORMALIZADOR[tipo];

    return resultados
        .map(normalizar)
        .filter((item) => item.id && item.titulo)
        .map((item) => ({
            ...item, 
            imagen: item.imagen?.replace(TAM_INI, TAM_FIN)}));
}

export function calcularEstadisticas(items) {
    return items.reduce(
        (acc, item) => {
            acc.duracionTotal += item.duracion; //suma de duracion
            if (item.genero) {
                acc.generos[item.genero] = (acc.generos[item.genero] ?? 0) + 1; //si hay genero suma
            }
            return acc;
        },
        { duracionTotal: 0, generos: {} }
    );
}