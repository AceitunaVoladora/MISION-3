import Mensaje from "./mensaje";
import Tarjeta from "./tarjeta";

export default function Rusultados({fase, items, sonandoId, onReproducir}) {
    return <section id="resultado">{pintar(fase, items, sonandoId, onReproducir)}</section>
}

function pintar(fase, items, sonandoId, onReproducir){
    if (fase === "inicial") return null;
    if (fase === "vacia") return <Mensaje>Busca algo para empezar</Mensaje>;
    if (fase === "cargando") return <Mensaje>Cargando...</Mensaje>;
    if (fase === "error") return <Mensaje clase = "error">No se pudo buscar, vuelvelo a intentar.</Mensaje>;

    return (
        items.map((item) => (
            <Tarjeta
                key={items.id}
                item = {item}
                sonando={sonandoId === item.id}
                onReproducir={onReproducir}
            />
        ))        
    ); 
}
    