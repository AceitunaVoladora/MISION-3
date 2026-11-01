import {calcularEstadisticas} from "../logica/logica";
import {calcularDuracion, generoComun} from "../logica/estadisticas";

export default function Estadisticas({items}){
    if(items.length === 0) return null;

    const {duracionTotal, generos} = calcularEstadisticas(items);
    const generoTop = generoComun(generos);

    return (
        <dl className="estadisticas">
            <div>
                <dt>Resultados</dt>
                <dd>{items.length}</dd>
            </div>
            {duracionTotal > 0 && (
                <div>
                    <dt>Duración total</dt>
                    <dd>{calcularDuracion(duracionTotal)}</dd>
                </div>
            )}
            {generoTop && (
                <div>
                    <dt>Género más común</dt>
                    <dd>{generoTop}</dd>
                </div>
            )}
        </dl>
    );
}