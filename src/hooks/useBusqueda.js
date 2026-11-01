import { useState, useEffect } from "react";
import { buscarContenido } from "../api-itunes";
import { presentarResultados } from "../logica/logica";

export function useBusqueda(consulta) {
    const [respuesta, setRespuesta] = useState({consulta: null, items: [], error: null});

    useEffect(() => {
        if (!consulta || consulta.termino === "") return;

        const controlador = new AbortController();

        buscarContenido(consulta.termino, consulta.tipo, controlador.signal)
            .then((datos) =>
                setRespuesta({
                    consulta,
                    items: presentarResultados(datos, consulta.tipo),
                    error: null,
                })
            )
            .catch((error) => {
                if (error.name === "AbortError") return;
                console.error(error);
                setRespuesta({consulta, items: [], error});
            });

            return () => controlador.abort();

    }, [consulta]);

    if (!consulta) return {fase: "inicial", items: []};
    if (consulta.termino === "") return {fase: "vacia", items: []};
    if (respuesta.consulta !== consulta) return {fase: "cargando", items: []};
    if (respuesta.error) return {fase: "error", items: []};
    return {fase: "ok", items: respuesta.items};
}
