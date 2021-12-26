# Preguntas

1 ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
- Sprint Planning - Ceremonia que se lleva al inicio del sprint, en el cual se definen las HU que se desarrollaran en el sprint. 
- Daily Scrum - Consisten en reuniones diarias de 15 minutos como máximo, donde todo el equipo comenta lo que ha realizado, va realizar en el día y los impedimentos que hay.
- Sprint Review - Ceremonia que se lleva al final del sprint, donde el equipo presenta al PO lo desarrollado durante el Sprint.
- Sprint Retrospective - Ceremonia que se lleva al final del sprint, donde el equipo reúne experiencias aprendidas durante el Sprint, se suele anotar opciones de mejoras y lecciones aprendidas.
- Sprint Grooming - Son ceremonias que se llevan durante un Sprint con la finalidad de asegurar el cumplimiento de los objetivos del Sprint.

2 ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

- Son prototipos a bajo nivel que permiten maquetar una solución.
- Herramientas - MarvelApp - Figma - Miro - Mockflow - También se pueden desarrollar en hojas.

3 Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
- const - variable que no puede cambiar su valor de forma total y solo puede ser llamada dentro del bloque donde fue declarada
- let - variable que solo puede ser llamada dentro del bloque donde fue declarada
- var - variable de scope global y local
```js

function setName(){

	var users = 0;

  function greet(userName){
    let name = userName.toUpperCase();
    const message = "GRACIAS POR REGISTRARTE."
    users+=1;
    return `${name}, ${message}`
  }

}
```

4 ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
- git checkout -b rama-1
- git branch rama-1 -> git checkout rama-1

5 Explicar la diferencia entre git merge y git rebase

- git mere une dos ramas manteniendo la historia de la rama principal y no elimina la rama secundaria.
- gira rebase une dos ramas pero re-escribe la historia de la rama principal y elimina la semana secundaria.

6 ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
- Git pull trae todos los cambios desde un origen.
- Pull Request genera una solicitud para que se pueda unir una rama A con la rama B.

7 ¿Qué es el Virtual DOM?
- Es una representacion virtual del DOM, en el caso de REACT se utiliza para representar los elementos de REACT.

8 Dado el siguiente  [codePen](https://codepen.io/cristian-makeitreal/pen/NWadqqa?editors=1100) , el cual solo tiene un HTML, por medio de css llegar a esta respuesta.  [Imagen](https://github.com/makeitrealcamp/assesment-1-programa-top/blob/main/assets/services-section.gif) . (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).
-[Repo](https://codesandbox.io/s/quirky-sea-s6ijf?file=/styles.css:150-167)