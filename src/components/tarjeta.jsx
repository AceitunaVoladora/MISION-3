import { useState, useRef, useEffect} from "react";

export default function Tarjeta({item, sonando, esFav, onReproducir, onFav}) {
    const [imagenRota, setImagenRota] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!sonando) audioRef.current?.pause();
    }, [sonando]);

    return (
        <article className="tarjeta">
            {item.imagen && !imagenRota && (
                <img src = {item.imagen} alt = {`Portada de ${item.titulo}`} onError={() => setImagenRota(true)}/>
            )}

            <div className="tarjetaCuerpo">
                <h3>{item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.titulo}</a>
                ) : (
                    item.titulo
                )}</h3>
                
                <p>{item.subtitulo}</p>

                {item.preview && 
                    <audio 
                        ref = {audioRef} 
                        controls 
                        src = {item.preview}
                        onPlay={() => onReproducir(item.id)}
                    />
                }

                <button
                    type="button"
                    className={`botonFav${esFav ? " activo" : ""}`}
                    onClick={() => onFav(item)}
                >
                    {esFav ? "★ Guardado" : "☆ Guardar"}
                </button>
            </div>
        </article>
    );
}


