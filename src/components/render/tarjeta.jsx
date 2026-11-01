import { useRef, useEffect} from "react";

export default function Tarjeta({
    item,
    esFavorito,
    onAlterarFavorito,
    sonando,
    onReproducir,
}) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (!sonando) audioRef.current?.pause();
    }, [sonando]);

    return (
        <article className="tarjeta">
            {item.imagen ? (
                <img src = {item.imagen} alt = {`Portada de ${item.titulo}`}/>
            ) : (
                <div className="portadaVacia">
                    {item.titulo.charAt(0)}
                </div>
            )}
            <div className="tarjetaCuerpo">
                <h3>{item.titulo}</h3>
                <p>{item.subtitulo}</p>

                {item.preview && 
                    <audio 
                        ref = {audioRef} 
                        constrols 
                        src = {item.preview}
                        onPlay={() => onReproducir(item.clave)}
                    />
                }

                <div className="tarjetaAcciones">
                    <button
                        type="button"
                        className={esFavorito ? "favorito activo" : "favorito"}
                        onClick = {() => onAlterarFavorito(item)}
                    >
                        {esFavorito ? "★ Guardado" : "☆ Guardar"}
                    </button>
                    {item.url && (
                        <a href={item.url} target="_blanck" rel = "noreferrer">
                            Ver en iTunes
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}


