export function calcularEstadisticas(items) {
    return items.reduce(
        (acc, item) => {
            acc.duracionTotal += item.duracion; //suma de duracion
            if (item.genero) {
                acc.generos[item.genero] = (acc.generos[item.genero] ?? 0) + 1; //si hay genero suma
            }
            return acc;
        },
        { duracionTotal: 0, generos: {} }
    );
}

export function generoComun(generos) {
    const [genero] = Object.entries(generos).toSorted((a, b) => b[1] - a[1])[0] ?? [];
    return genero;
}

export function calcularDuracion(ms){
    const segundos = Math.round(ms / 1000);
    const horas = Math.floor(segundos / 3600);
    const min = Math.floor((segundos % 3600) / 60);
    const sec = String(segundos % 60).padStart(2, "0"); //padStart hace que se rellene con 0 hasta que sean dos caracteres: 2 -> 02
    return horas > 0 ? `${horas}:${String(min).padStart(2, "0")}:${sec}` : `${min}:${sec}`;
}