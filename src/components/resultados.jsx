import Mensaje from "./mensaje";
import Tarjeta from "./tarjeta";

export default function Resultados({fase, items, idsFav, sonandoId, onReproducir, onFav}) {
    if (fase === "inicial") return null;
    if (fase === "vacia") return <Mensaje>Busca algo para empezar</Mensaje>;
    if (fase === "cargando") return <Mensaje>Cargando...</Mensaje>;
    if (fase === "error") return <Mensaje clase = "error">No se pudo buscar, vuelvelo a intentar.</Mensaje>;
    if (items.length === 0) return <Mensaje>No encontramos resultados</Mensaje>

    return (
        <section id = "resultado">
            {items.map((item) => (
                <Tarjeta
                    key={item.id}
                    item = {item}
                    esFav = {idsFav.has(item.id)}
                    sonando={sonandoId === item.id}
                    onReproducir={onReproducir}
                    onFav = {onFav}
                />
            )) }
        </section>       
    ); 
}

    