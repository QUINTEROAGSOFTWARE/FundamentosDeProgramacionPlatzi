const sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
const setionReiniciar=document.getElementById('reiniciar')
const botonMascotaJugador=document.getElementById('boton-mascota')
const botonTierra=document.getElementById('boton-tierra')
setionReiniciar.style.display='none'
const botonFuego=document.getElementById('boton-fuego')
const botonAgua=document.getElementById('boton-agua')
const botonReniciar=document.getElementById('boton-reiniciar')

const setionseleccionarMascota=document.getElementById('seleccionar-mascota')
const spanMascotaJugador=document.getElementById('mascota-jugador')

const spanMascotaEnemigo=document.getElementById('mascota-enemigo')

const spanVidasJugador=document.getElementById('vidas-jugador')
const spanVidasEnemigo=document.getElementById('vidas-enemigo')

const sectionMensajes=document.getElementById('resultado')
const ataquesDelJugador=document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo=document.getElementById('ataques-del-enemigo')
const contenedorTarjetas=document.getElementById('contenedorTarjetas')

//las variables globales pueden ser  leidas desde la consola
//los arreglos sirven para meter multiples objetos
let mokepones=[]
let ataqueJugador
let ataqueEnemigo
let opcionesDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
    let vidasJugador=3
    let vidasEnemigo=3
//las clases son el plano de las casas
class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
    }
}
//los objetos son las casas con distintos aspectos pero la clases va a hacer el mismo plano
let hipodoge=new Mokepon('hipodoge', '/Programar/img/capipepo.png',5)
let capipepo=new Mokepon('capipepo', '/Programar/img/mokepon.png', 5)
let ratigueya=new Mokepon('ratigueya', '/Programar/img/ratigueya.png',5)
//empuja o inyecta el valor en  esta la variable que es un arreglo
//mokepones.push(hipodoge,capipepo,ratigueya)
//objetos literales
hipodoge.ataques.push(
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🌳',id: 'boton-tierra'},
    
)
capipepo.ataques.push(
    {nombre:'🌳',id:'boton-tierra'},
    {nombre:'🌳',id:'boton-tierra'},
    {nombre:'🌳',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
)
ratigueya.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌳',id:'boton-tirra'},
)
mokepones.push(hipodoge,capipepo,ratigueya)
function iniciarJuego(){
    sectionSeleccionarAtaque.style.display='none'
    //El metodo forEach por cada uno de los elementos de nuestro arreglo haz algo
    //extructura de templates literarios
    mokepones.forEach((mokepon)=>{
        opcionesDeMokepones=`
            <input type="radio" name="mascota" id=${mokepon.nombre}/>
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
            `   
    contenedorTarjetas.innerHTML+=opcionesDeMokepones

    inputHipodoge=document.getElementById('hipodoge')
    inputCapipepo=document.getElementById('capipepo')
    inputRatigueya=document.getElementById('ratigueya')
    
    })
    
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
    botonReniciar.addEventListener('click',reiniciarJuego)
}
function seleccionarMascotaJugador(){
    setionseleccionarMascota.style.display='none'
    sectionSeleccionarAtaque.style.display='flex'
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML='Hipodoge'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML='Capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML='Ratigueya'
    }else{
     alert('selecciona una mascota')
    } 
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)
    if (ataqueAleatorio==1){
        spanMascotaEnemigo.innerHTML='Hipodoge'
    }else if(ataqueAleatorio==2){
        spanMascotaEnemigo.innerHTML='Capipepo'
    }else{
        spanMascotaEnemigo.innerHTML='Ratigueya'
    }
}
function ataqueFuego(){
    ataqueJugador='FUEGO'
        ataqueAleatorioEnemigo()
    }
    ataqueJugador='AGUA'
function ataqueAgua(){
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador='TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)
    if(ataqueAleatorio==1){
        ataqueEnemigo='FUEGO'
    }else if(ataqueAleatorio==2){
        ataqueEnemigo='AGUA'
    }else{
        ataqueEnemigo='TIERRA'
    }
 combate()
}
function combate(){
    //COMBATE & contador de vidas
    //Tablas de verdad operadores &&=and  ||=or !=not 
    if(ataqueEnemigo==ataqueJugador){
    crearMensaje('Empate')
    }else if(ataqueJugador== 'FUEGO'&& ataqueEnemigo=='TIERRA'){
    crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }else if(ataqueJugador=='AGUA' && ataqueEnemigo=='FUEGO'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }else if(ataqueJugador=='TIERRA' &&   ataqueEnemigo=='AGUA'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo=  vidasEnemigo
    }else{
        crearMensaje('Perdiste')
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }
    //Revisar las vidas
    revisarVidas()
} 
    function revisarVidas(){
        if(vidasEnemigo==0){
            crearMensajeFinal('FELICITACIONES! GANASTE')
        }else if(vidasJugador==0){
            crearMensajeFinal('LO CIENTO, PERDISTE')
        }
    }
function crearMensaje(resultado) {
      let nuevoAtaqueDelJugador = document.createElement('p')
      let nuevoAtaqueDelEnemigo = document.createElement('p')
      sectionMensajes.innerHTML=resultado
      nuevoAtaqueDelJugador.innerHTML=ataqueJugador
      nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo
      ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
      ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML=resultadoFinal
    let parrafo=document.createElement('p')
    parrafo.innerHTML=resultadoFinal 
    botonFuego.disabled=true
    botonAgua.disabled=true
    botonTierra.disabled=true
    setionReiniciar.style.display='flex'
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener('load', iniciarJuego)