import { useState } from "react";

export default function Busqueda({consultaIni, onBuscar}) {
    const [texto, setTexto] = useState(consultaIni?.termino ?? "");
    const [tipo, setTipo] = useState(consultaIni?.tipo ?? "cancion");

    function manejarEnvio(evento){
        evento.preventDefault();
        onBuscar({termino: texto.trim(), tipo});
    }

    return (
        <form id="barraBusqueda" onSubmit={manejarEnvio} role="search">
            <select id="tipoBusqueda" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="cancion">Canción</option>
                <option value="artista">Artista</option>
                <option value="album">Álbum</option>
            </select>

            <input 
                id="contenidoBusqueda"
                type="search" 
                placeholder="Buscar canción, artista o álbum"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <button id="botonBusqueda" type = "submit">Buscar</button>
        </form>
    );
}
