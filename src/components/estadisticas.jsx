import {calcularEstadisticas} from "../logica/logica";
import {calcularDuracion, generoComun} from "../logica/estadisticas";

export default function Estadisticas({items}){
    if(items.length === 0) return null;

    const {duracionTotal, generos} = calcularEstadisticas(items);
    const generoTop = generoComun(generos);

    return (
        <section id="estadisticas">
            <p className="estadistica">Resultados: {items.length}</p>
            {duracionTotal > 0 && (
                <p className="estadistica">Duración total: {calcularDuracion(duracionTotal)}</p>
            )}
            {generoTop && (
                <p className="estadistica">Género más común: {generoTop}</p>
            )}
        </section>
    );
}