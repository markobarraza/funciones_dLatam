let ele = document.getElementById("ele1")
ele.style.backgroundColor = "green"  

// Funcion pintar fondo texto
function pintar(color = "green"){
    ele.style.backgroundColor = color
}  
    
// al hacer click se activa la funcion
ele.addEventListener("click", function(){
    pintar("yellow")
});
