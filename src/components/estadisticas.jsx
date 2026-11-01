import { useMemo } from "react";
import {calcularEstadisticas, calcularDuracion, generoComun} from "../logica/estadisticas";

export default function Estadisticas({items, etiqueta = "Resultados"}){
    //prompt, me lo dijo el webi
    const {duracionTotal, generos} = useMemo(() => calcularEstadisticas(items), [items]);
    
    if(items.length === 0) return null;

    const generoTop = generoComun(generos);

    return (
        <section id="estadisticas">
            <p className="estadistica">{etiqueta}: {items.length}</p>
            {duracionTotal > 0 && (
                <p className="estadistica">Duración total: {calcularDuracion(duracionTotal)}</p>
            )}
            {generoTop && (
                <p className="estadistica">Género más común: {generoTop}</p>
            )}
        </section>
    );
}