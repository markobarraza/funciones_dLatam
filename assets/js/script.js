let ele = document.getElementById("ele1")

// Funcion pintar fondo texto
function pintar(color = "green"){
    ele.style.backgroundColor = color
}

ele.style.backgroundColor = "green"
    
    
// al hacer click se activa la funcion
ele.addEventListener("click", function(){
    pintar("yellow")
});