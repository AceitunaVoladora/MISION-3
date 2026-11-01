import { useState } from "react";

export default function Busqueda({consultaIni, onBuscar, ocupado}) {
    const [texto, setTexto] = useState(consultaIni?.termino ?? "");
    const [tipo, setTipo] = useState(consultaIni?.tipo ?? "cancion");

    function manejarEnvio(evento){
        evento.preventDefault();
        const termino = texto.trim();
        if(!termino) return;
        onBuscar({termino, tipo});
    }

    return (
        <form className="barraBusqueda" onSubmit={manejarEnvio} role="search">
            <label className="visualmenteOculto" htmlFor="tipoBusqueda">Tipo de busqueda</label>
            <select id="tipoBusqueda" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="cancion">Canción</option>
                <option value="artista">Artista</option>
                <option value="album">Álbum</option>
            </select>

            <label className="visualmenteOculto" htmlFor="contenidoBusqueda">Término de busqueda</label>

            <input 
                id="contenidoBusqueda"
                type="search" 
                placeholder="Buscar canción, artista o álbum"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <button type="submit" disabled={ocupado || !texto.trim()}>
                {ocupado ? "Buscando..." : "Buscar"}
            </button>
        </form>
    );
}
