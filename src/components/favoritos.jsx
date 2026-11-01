import Mensaje from "./mensaje";
import Tarjeta from "./tarjeta";

export default function Favoritos({items, sonandoId, onReproducir, onFav}) {
   if (items.length === 0) return <Mensaje>No encontramos favoritos aun</Mensaje>

    return (
        <section id = "resultado">
            {items.map((item) => (
                <Tarjeta
                    key={item.id}
                    item = {item}
                    sonando={sonandoId === item.id}
                    esFav
                    onReproducir={onReproducir}
                    onFav = {onFav}
                />
            )) }
        </section>       
    ); 
}