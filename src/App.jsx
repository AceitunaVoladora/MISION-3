import { useState } from "react";
import Busqueda from "./components/render/busqueda";
import Estadisticas from "./components/render/estadisticas";
import Resultados from "./components/render/resultados";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import { useBusqueda } from "./components/hooks/useBusqueda";
import Favoritos from "./components/favoritos";
import Pestanas from "./components/pestanas";

export default function App(){
    const [consulta, setConsulta] = useLocalStorage("sonora:consulta", null);
    const [favoritos, setFavoritos] = useLocalStorage("sonora:favoritos", []);
    const [sonandoId, setSonandoId] = useState(null);
    const [vista, setVista] = useState("busqueda");
    const {fase, items} = useBusqueda(consulta);

    const idsFav = new Set(favoritos.map((f) => f.id));

    function buscar(nuevaConsulta){
        setConsulta(nuevaConsulta);
        setVista("busqueda");
    }

    function cambiarVista(nuevaVista){
        setVista(nuevaVista);
        setSonandoId(null);
    }

    function alternarFav(item){
        setFavoritos((actuales) =>
            actuales.some((f) => f.id === item.id) ? actuales.filter((f)  => f.id !== item.id) : [...actuales, item]);
    }

    return(
        <div id = "app">
            <h1>Sonora</h1>
            
            <section id = "seccionBusqueda">
                <Busqueda consultaIni = {consulta} onBuscar = {buscar}/>
            </section>

            <Pestanas totalFav = {favoritos.length} onCambiar = {cambiarVista}/>

            {vista === "busqueda" ? (
                <>
                    <Estadisticas items = {items}/>
                    <Resultados 
                        fase = {fase}
                        items = {items}
                        idsFav = {idsFav}
                        sonandoId = {sonandoId}
                        onReproducir = {setSonandoId}
                        onFavorito = {alternarFav}
                    />
                </>
            ) : (
                <>
                    <Estadisticas items = {favoritos} etiqueta = "Favoritos"/>
                    <Favoritos 
                        fase = {favoritos}
                        sonandoId = {sonandoId}
                        onReproducir = {setSonandoId}
                        onFavorito = {alternarFav}
                    /> 
                </>
            )
        
            };

            
        </div>
    );
}