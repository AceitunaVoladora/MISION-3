import Mensaje from "./mensaje";
import Tarjeta from "./tarjeta";

export default function Rusultados(input) {
    return <section className="resultado">{pintar(input)}</section>
}

function pintar(fase, items, termino, sonandoId, onReproducir){
    if (fase === "inicial") return null;
    if (fase === "vacia") return <Mensaje>Busca algo para empezar</Mensaje>;
    if (fase === "cargando") return <Mensaje>Cargando...</Mensaje>;
    if (fase === "error") return <Mensaje clase = "error">No se pudo buscar, vuelvelo a intentar.</Mensaje>;
    if(items.length === 0) return <Mensaje>{`Sin resultados para "${termino}"`}</Mensaje>;

    return (
        items.map((item) => (
            <Tarjeta
                key={items.clave}
                item = {item}
                sonando={sonandoId === item.id}
                onReproducir={onReproducir}
            />
        ))        
    ); 
}
    