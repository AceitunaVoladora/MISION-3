import { useState } from "react";
import Busqueda from "./components/render/busqueda";
import Estadisticas from "./components/render/estadisticas";
import Resultados from "./components/render/resultados";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import { useBusqueda } from "./components/hooks/useBusqueda";

export default function App(){
    const [consulta, setConsulta] = useLocalStorage("sonora:consulta", null);
    const [sonandoId, setSonandoId] = useState(null);
    const {fase, items} = useBusqueda(consulta);

    return(
        <div id = "app">
            <h1>Sonora</h1>
            
            <section id = "seccionBusqueda">
                <Busqueda consultaIni = {consulta} onBuscar = {setConsulta}/>
            </section>

            <Estadisticas items={items}/>

            <Resultados 
                fase = {fase}
                items = {items}
                termino = {consulta?.termino}
                sonandoId = {sonandoId}
                onReproducir = {setSonandoId}
            />
        </div>
    );
}