const color = (color) =>{
    let elemento = document.getElementById("key")
    elemento.style.backgroundColor = color
}

const box = (color) =>{
    let nuevoElemento = document.createElement("div")
    nuevoElemento.style.width = "200px"
    nuevoElemento.style.height = "200px"
    nuevoElemento.style.border = "1px solid black"
    nuevoElemento.style.backgroundColor = color
    let contenedor = document.querySelector(".contenedor")
    contenedor.appendChild(nuevoElemento)
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        /* Cambiar a color 1 */
        color("pink");
    } else if (event.key === 's') {
        /* Cambiar a color 2 */
        color("orange");
    } else if (event.key === 'd'){
        /* Cambiar a color 3 */
        color("skyblue");      
    } else if (event.key === 'q') {
        /* nueva caja morada */
        box("purple");
    } else if (event.key === 'w'){
        /* nueva caja gris */
        box("grey");      
    } else if (event.key === 'e'){
        /* nueva caja cafe */
        box("brown");      
    }
})


