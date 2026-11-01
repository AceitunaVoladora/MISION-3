# MISIÓN 3

## Uso de IA - Claude

prompt:
"Tengo un proycto en react, el cual utiliza la api de itunes para mostrar canciones, albumes y artistas. quiero implementar una pestaña alterna con las canciones favoritas (las que guarda el usuario). ya tengo la parte de favoritos solo tengo que implementar las dos pestañas, como lo hago?"

Claude me generó una serie de opciones entre las que elegir, desde una opcion simple con estados locales, teniendo en cuanta si quiero conservar la busqueda aun cambiando de pestaña o hasta con react - router que como no me sonaba de nada ni me plantee.

Me dio alternarFav casi como esta en el proyecto, yo cambie par de cosas como nombres para que entrara en mi proyecto:

```jsx
const toggleFavorito = (cancion) => {
  setFavoritos((prev) =>
    prev.some((c) => c.trackId === cancion.trackId)
      ? prev.filter((c) => c.trackId !== cancion.trackId)
      : [...prev, cancion]
  );
};
```

Y con lo que me genero para la pestaña en si le seguí inquiriendo para que se adaptará más a lo que yo pedía:

prompt:
"La cosa es que tengo muchos atributos y me gustaria sacar toda la parte de las pestñas, como otro archivo"

Me generó esto:

```jsx
import "./Tabs.css";

function Tabs({ tabs, tabActiva, onChange }) {
  return (
    <nav className="tabs" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={tabActiva === tab.id}
          className={tabActiva === tab.id ? "tab activa" : "tab"}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default Tabs;
```

que yo procedí a cambiar y modificar a mi gusto pero se quedo muy similar.

## Autopsia

Como mencioné anteriormente en el uso de IA, al principio no plantee separar todo lo que había en "App.jsx" en distinos archivos. Por ejemplo, la barra de busqueda que en el proyecto anterior se encontraba en el html principal. Al final como se asemejaba a como usaba tarjeta, favoritos y demás (bloques reutilizables) acabe separandolo todo, como acabó el proyecto final. 

En "App.jsx" al alternar y guardar las canciones, artistas o albumes plantee guardar únicamente el id. Lo que pasaba era que tendría que preguntarle a iTunes por cada objeto cada vez que abriera la pestaña. Con la opción actual, donde leo la información ya guardada por "useLocalStorage.js" y reutilizo tarjeta y estadisticas además de ahorrarme la petición.