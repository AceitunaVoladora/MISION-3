export default function Pestanas({totalFav, onCambiar}) {
    return (
        <nav id="pestanas">
            <button
                type="button"
                className="pestana"
                onClick={() => onCambiar("busqueda")}
            >
               Busqueda 
            </button>
            <button
                type="button"
                className="pestana"
                onClick={() => onCambiar("favoritos")}
            >
                Favoritos ({totalFav})
            </button>
        </nav>
    );
}