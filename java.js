/* function de header */
function atencion(){
    alert("Esta organizacion es sin fines de lucro, trabajamos bajo el mando de una ONG")
    console.log("el usuario a presionado el botton")
}

/* evento bien enlazado */
function textImp(){
    alert("tiene que ser mayor de 18 para asociarte a nuestra organizacion y una participacion semanal de 4 horas")
}

let textoPrincipal = document.getElementById("textoPrincipal")
console.log(textoPrincipal)
textoPrincipal.onclick = textImp  /* la funcion va sin parentesis */

let reafirmacion = document.getElementById("reafirmacion")
let contraseña = document.getElementById("pass")

reafirmacion.onclick = () => {alert("su contraseña es "+ pass.value)}

/* funcion */
function informacionMas(){
    alert("Suscribiendote en el plan mensual con cobro directo por tarjeta de debito obtendra un 15% de descuento")
}

/* forma mas recomendable AddEventListener */
let Spam = document.getElementById("spam")
Spam.addEventListener("click", informacionMas)
Spam.addEventListener("click", ()=>{console.log("el usuario esta a realiazado click")})

/* clase de datos */
class Datos{
    constructor(nombre, apellido, edad, metodo, asociacion){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.metodo = metodo,
        this.asociacion = asociacion
    }
}

const usuario1 = new Datos ("Bastian", "Gonzales Leter", 22, "Visa", "Anual")

const catalogo = [usuario1]
console.log(catalogo)

function usuario(){
    let nombreIngr = document.getElementById("nombre")
    let apellidoIngr = document.getElementById("apellido")
    let edadIngr = document.getElementById("edad")
    let metedoIngr = document.getElementById("metodo")
    let asociacionIngr = document.getElementById("asociacion")

    let usuarioCreado = new Datos(catalogo.length+1, nombreIngr.value, apellidoIngr.value, edadIngr.value, metedoIngr.value, asociacionIngr.value)
    console.log(usuarioCreado)
    catalogo.push(usuarioCreado)
}

const guardado = document.getElementById("guardado")
guardado.addEventListener("click", usuario)
