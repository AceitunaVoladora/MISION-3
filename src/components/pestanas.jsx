export default function Pestanas({vista, totalFav, onCambiar}) {
    return (
        <nav id="pestanas">
            <button
                type="button"
                className={`pestana${vista === "busqueda" ? " activa": ""}`}
                onClick={() => onCambiar("busqueda")}
            >
               Busqueda 
            </button>
            <button
                type="button"
                className={`pestana${vista === "busqueda" ? " activa": ""}`}
                onClick={() => onCambiar("favoritos")}
            >
                Favoritos ({totalFav})
            </button>
        </nav>
    );
}