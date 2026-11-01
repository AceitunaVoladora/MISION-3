import Mensaje from "./mensaje";
import Tarjeta from "./tarjeta";

export default function Rusultados({
    fase,
    items,
    error,
    mensajeVacio,
    favoritos,
    onAlternarFavorito,
    sonandoClave,
    onReproducir,
}) {
    if (fase === "inicial") return <Mensaje>Busca algo para empezar</Mensaje>;
    if (fase === "cargando") return <Mensaje>Cargando...</Mensaje>;
    if (fase === "error") return <Mensaje clase = "error">No se pudo buscar: {error}. Vuelvelo a intentar.</Mensaje>;
    if (items.length === 0) return <Mensaje>{mensajeVacio}</Mensaje>;

    return (
        <section className="resultado">
            {items.map((item) => (
                <Tarjeta
                    key={items.clave}
                    item = {item}
                    esFavorito = {favoritos.some((f) => f.clave === item.clave)}
                    onAlterarFavorito={onAlternarFavorito}
                    sonando={sonandoClave === item.clave}
                    onReproducir={onReproducir}
                />
            ))}         
        </section>
    );
}