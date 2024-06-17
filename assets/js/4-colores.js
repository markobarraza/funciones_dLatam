
let caja_azul = document.getElementById("box-azul")
let caja_rojo = document.getElementById("box-rojo")
let caja_verde = document.getElementById("box-verde")
let caja_amarillo = document.getElementById("box-amarillo")

caja_azul.addEventListener("click", function(){
    caja_negra("azul")
})
caja_rojo.addEventListener("click", function(){
    caja_negra("rojo")
})
caja_verde.addEventListener("click", function(){
    caja_negra("verde")
})
caja_amarillo.addEventListener("click", function(){
    caja_negra("amarillo")
});

const caja_negra = (a) =>{
    let prueba = document.querySelector("#box-" + a)
    prueba.style.backgroundColor = "black"
}





