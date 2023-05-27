

let valores = 0;
let n = 0;
let listaNrosVacia = [];
let rndInt = 0;
let rndIntAcum = 0;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
class dado {
    constructor(valor, url) {
        this.valor = valor;
        this.url = url;
    }
    crearDado() {
        console.clear();
        const contenedor = document.getElementById("contenedor");
        let rndInt = randomIntFromInterval(1, 6);
        console.log(rndInt);
        rndIntAcum = rndIntAcum + rndInt;
        console.log(rndIntAcum);
        if (rndInt == 1) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado1.valor} </p>
                        <img class="dados" src="${dado1.url}"
                         alt= "${dado1.valor}">`;
            contenedor.appendChild(div);

        } else if (rndInt == 2) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado2.valor} </p>
                        <img class="dados" src="${dado2.url}"
                        alt= "${dado2.valor}">`;
            contenedor.appendChild(div);

        } else if (rndInt == 3) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado3.valor} </p>
                        <img class="dados" src="${dado3.url}"
                        alt= "${dado3.valor}">`;
            contenedor.appendChild(div);

        } else if (rndInt == 4) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado4.valor} </p>
                        <img class="dados" src="${dado4.url}"
                        alt= "${dado4.valor}">`;
            contenedor.appendChild(div);

        } else if (rndInt == 5) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado5.valor} </p>
                        <img class="dados" src="${dado5.url}"
                        alt= "${dado5.valor}">`;
            contenedor.appendChild(div);

        } else {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado6.valor} </p>
                        <img class="dados" src="${dado6.url}"
                        alt= "${dado6.valor}">`;
            contenedor.appendChild(div);
        }
    }
}
const dado1 = new dado(1, "img/dado-animado-1.gif");
const dado2 = new dado(2, "img/dado-animado-2.gif");
const dado3 = new dado(3, "img/dado-animado-3.gif");
const dado4 = new dado(4, "img/dado-animado-4.gif");
const dado5 = new dado(5, "img/dado-animado-5.gif");
const dado6 = new dado(6, "img/dado-animado-6.gif");
const div = new dado();
const mapa = new dado(0, "img/Mapa_Escuela.jpg");

function mapaEscuela() {
    const contenedor1 = document.getElementById("contenedor1");
    const div1 = document.createElement("div");
    div1.className = "caja1";
    div1.innerHTML = `<p class="textImagen"> Jugando, llegamos a la Escuela: </p>
            <img class="imgMapa" src="${mapa.url}"
            alt= "${mapa.url}">`;
    contenedor1.appendChild(div1);
}
let c = 0;
function sumar4() {
    let s = 0;
    listaNrosVacia.splice(0);
    for (let i = 1; i <= 4; i++) {
        rndInt = randomIntFromInterval(1, 6);
        listaNrosVacia.push(rndInt);
        s = s + rndInt;
    }
    let listaString = listaNrosVacia.join("+");
    Swal.fire({
        title: "La Operacion es:\n" + listaString,
        icon: "question",
        imageUrl: "img/EScuela-Roque.jpg",
        html: `<input type="number" id="resultado" class="swal2-input" placeholder="Resultado">`,
        confirmButtonText: "Enviar",
        heightAuto: true
    }).then(async (result) => {
        if (result.isConfirmed) {
            let resultado = document.getElementById("resultado").value;
            let total = parseInt(resultado);
            if (total == s) {
                Swal.fire({
                    title: "Resultado Correcto",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                })
            } else {
                c = c + 1;
                await Swal.fire({
                    timer: 3000,
                    title: "Resultado Incorrecto",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                })
                if (c == 1) {
                    sumar4();
                }
            }
        }

    })
}
let d = 0;
function sumar5() {
    let s = 0;
    listaNrosVacia.splice(0);
    for (let i = 1; i <= 5; i++) {
        rndInt = randomIntFromInterval(1, 6);
        listaNrosVacia.push(rndInt);
        s = s + rndInt;
    }
    let listaString = listaNrosVacia.join("+");
    Swal.fire({
        title: "La Operacion es:\n" + listaString,
        icon: "question",
        imageUrl: "img/plaza de las americas.jpg", 
        html: `<input type="number" id="resultado" class="swal2-input" placeholder="Resultado">`,
        confirmButtonText: "Enviar",
        heightAuto: true
    }).then(async (result) => {
        if (result.isConfirmed) {
            let resultado = document.getElementById("resultado").value;
            let total = parseInt(resultado);
            if (total == s) {
                Swal.fire({
                    title: "Resultado Correcto",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                })
            } else {
                d = d + 1;
                await Swal.fire({
                    timer: 3000,
                    title: "Resultado Incorrecto",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                })
                if (d == 1) {
                    sumar5();
                }
            }
        }

    })
}

let b = 0;
function multiplicar3() {
    let r = 1;
    listaNrosVacia.splice(0);
    for (let i = 1; i <= 3; i++) {
        rndInt = randomIntFromInterval(1, 6);
        listaNrosVacia.push(rndInt);
        r = r * rndInt;
    }
    let listaString = listaNrosVacia.join("x");
    Swal.fire({
        title: "La Operacion es:\n" + listaString,
        icon: "question",
        imageUrl: "img/viejacarcel.webp",
        html: `<input type="number" id="resultado" class="swal2-input" placeholder="Resultado">`,
        confirmButtonText: "Enviar",
        heightAuto: true
    }).then(async (result) => {
        if (result.isConfirmed) {
            let resultado = document.getElementById("resultado").value;
            let total = parseInt(resultado);
            if (total == r) {
                Swal.fire({
                    title: "Resultado Correcto",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                })
            } else {
                b = b + 1;
                await Swal.fire({
                    timer: 3000,
                    title: "Resultado Incorrecto",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                })
                if (b == 1) {
                    multiplicar3();
                }
            }
        }
    })
}

let e = 0;
function multiplicar4() {
    let r = 1;
    listaNrosVacia.splice(0);
    for (let i = 1; i <= 4; i++) {
        rndInt = randomIntFromInterval(1, 6);
        listaNrosVacia.push(rndInt);
        r = r * rndInt;
    }
    let listaString = listaNrosVacia.join("x");
    Swal.fire({
        title: "La Operacion es:\n" + listaString,
        icon: "question",
        imageUrl: "img/viejacarcel.webp",
        html: `<input type="number" id="resultado" class="swal2-input" placeholder="Resultado">`,
        confirmButtonText: "Enviar",
        heightAuto: true
    }).then(async (result) => {
        if (result.isConfirmed) {
            let resultado = document.getElementById("resultado").value;
            let total = parseInt(resultado);
            if (total == r) {
                Swal.fire({
                    title: "Resultado Correcto",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                })
            } else {
                e = e + 1;
                await Swal.fire({
                    timer: 3000,
                    title: "Resultado Incorrecto",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                })
                if (e == 1) {
                    multiplicar4();
                }
            }
        }
    })
}

let f = 0;
function multiplicar5() {
    let r = 1;
    listaNrosVacia.splice(0);
    for (let i = 1; i <= 5; i++) {
        rndInt = randomIntFromInterval(1, 6);
        listaNrosVacia.push(rndInt);
        r = r * rndInt;
    }
    let listaString = listaNrosVacia.join("x");
    Swal.fire({
        title: "La Operacion es:\n" + listaString,
        icon: "question",
        imageUrl: "img/escuelaespecial.jpg",
        html: `<input type="number" id="resultado" class="swal2-input" placeholder="Resultado">`,
        confirmButtonText: "Enviar",
        heightAuto: true
    }).then(async (result) => {
        if (result.isConfirmed) {
            let resultado = document.getElementById("resultado").value;
            let total = parseInt(resultado);
            if (total == r) {
                Swal.fire({
                    title: "Resultado Correcto",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                })
            } else {
                f = f + 1;
                await Swal.fire({
                    timer: 3000,
                    title: "Resultado Incorrecto",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                })
                if (f == 1) {
                    multiplicar5();
                }
            }
        }
    })
}

let g = 0;
function restar5() {
    let s = 0;
    listaNrosVacia.splice(0);
    for (let i = 1; i <= 5; i++) {
        rndInt = randomIntFromInterval(-6, 6);
        listaNrosVacia.push(rndInt);
        s = s + rndInt;
    }
    listaNrosVacia.sort((a, b) => b - a);
    listaString = listaNrosVacia.join(")+(");
    Swal.fire({
        title: "La Operacion es:\n" + "(" + listaString + ")",
        icon: "question",
        imageUrl: "img/paseodelasartes.jpg",
        html: `<input type="number" id="resultado" class="swal2-input" placeholder="Resultado">`,
        confirmButtonText: "Enviar",
        heightAuto: true
    }).then(async (result) => {
        if (result.isConfirmed) {
            let resultado = document.getElementById("resultado").value;
            let total = parseInt(resultado);
            if (total == s) {
                Swal.fire({
                    title: "Resultado Correcto",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                })
            } else {
                g = g + 1;
                await Swal.fire({
                    timer: 3000,
                    title: "Resultado Incorrecto",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                })
                if (g == 1) {
                    restar5();
                }
            }
        }

    })
}


let btnuno = 0;

function activarBoton() {
    btnUno = document.getElementById("btn1");
    btnUno.onclick = () => {
        contenedor.innerHTML = ``;
        div.crearDado();
        avanzar();
    }
}
function avanzar() {
    if (rndIntAcum == 1) {
        casilla1();
        sumar4();
    } else if (rndIntAcum == 2) {
        casilla2();
    } else if (rndIntAcum == 3) {
        casilla3();
    } else if (rndIntAcum == 4) {
        casilla4();
    } else if (rndIntAcum == 5) {
        casilla5();
        sumar5();
    } else if (rndIntAcum == 6) {
        casilla6();
    } else if (rndIntAcum == 7) {
        casilla7();
    } else if (rndIntAcum == 8) {
        casilla8();
        multiplicar3();
    } else if (rndIntAcum == 9) {
        casilla9();
        multiplicar4();
    } else if (rndIntAcum == 10) {
        casilla10();
    } else if (rndIntAcum == 11) {
        casilla11();
    } else if (rndIntAcum == 12) {
        casilla12();
        multiplicar5();
    } else if (rndIntAcum == 13) {
        casilla13();
    } else if (rndIntAcum == 14) {
        casilla14();
    } else if (rndIntAcum == 15) {
        casilla15();
    } else if (rndIntAcum == 16) {
        casilla16();
    } else if (rndIntAcum == 17) {
        casilla17();
    } else if (rndIntAcum == 18) {
        casilla18();
        restar5();
    } else if (rndIntAcum == 19) {
        casilla19();
    } else if (rndIntAcum == 20) {
        casilla20();
    } else if (rndIntAcum == 21) {
        casilla21();
    } else if (rndIntAcum == 22) {
        casilla22();
    } else if (rndIntAcum >= 23) {
        casilla23();
        parar();
        btnUno.disabled = true;
    }
}
function casilla1() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-35px, 60px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla2() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-65px, 120px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla3() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-85px, 150px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla4() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-105px, 200px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla5() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-125px, 230px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla6() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-155px, 220px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla7() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-205px, 210px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla8() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-190px, 170px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla9() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-175px, 140px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla10() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-145px, 110px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla11() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-125px, 90px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla12() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-105px, 50px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla13() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-170px, 40px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla14() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-160px, 20px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla15() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-150px, -5px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla16() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-145px, -25px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla17() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-125px, -50px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla18() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-105px, -90px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla19() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-135px, -95px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla20() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-160px, -105px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla21() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-215px, -125px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla22() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-255px, -75px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}
function casilla23() {
    personaje = document.getElementById("imgPer");
    personaje.style.transform = `translate(-195px, -55px)`
    document.getElementById("imgPer")
    personaje.style.transition = "2s"
}

mapaEscuela()

let centesimas = 0;
let segundos = 0;
let minutos = 0;
function inicio() {
    control = setInterval(cronometro, 10);
}
function parar() {
    clearInterval(control);
    Swal.fire({
        title: "LO HAS CONSEGUIDO¡¡",
        text: "Te felicitamos por llevar a nuestro heroe a la Escuela",
        icon: "success",
        imageUrl: "img/escuela-saldias.jpg",
        background: "bisque",
        backdrop: "#b7950b"
    })
    console.log(minutos);
    console.log(segundos);
    console.log(centesimas);
    tiempoLocal(centesimas, segundos, minutos);
}
function cronometro() {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0" + centesimas }
        Centesimas.innerHTML = ":" + centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos++;
        if (segundos < 10) { segundos = "0" + segundos }
        Segundos.innerHTML = ":" + segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ((centesimas == 0) && (segundos == 0)) {
        minutos++;
        if (minutos < 10) { minutos = "0" + minutos }
        Minutos.innerHTML = " " + minutos;
    }
}
const listaJugadores = [];
function agregarJugador() {
    const idFormulario = document.getElementById("formulario");
    idFormulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputAlias = document.getElementById("inputAlias").value;
        let inputEscuela = document.getElementById("inputEscuela").value;
        const jugador = {};
        jugador.Alias = inputAlias;
        jugador.Escuela = inputEscuela;
        jugador.tiempo = [0, 0, 0];
        jugador.total = 0;
        let listaJugadores = JSON.parse(localStorage.getItem(`listaJugadores`)) || [];
        listaJugadores.push(jugador);
        console.log(listaJugadores);
        localStorage.setItem(`listaJugadores`, JSON.stringify(listaJugadores));
        inicio();
        activarBoton();
        formulario.reset();
    })
}
let botonAgregar = document.getElementById("botonAgregar");

botonAgregar.onclick = () => {
    agregarJugador();
}
//let botonAgregar = document.getElementById("botonAgregar");
//botonAgregar.addEventListener("click", agregarJugador);
let botonMostrar = 0;

function tiempoLocal() {
    const jugadoresGuardados = localStorage.getItem(`listaJugadores`);
    const carritoJugadores = JSON.parse(jugadoresGuardados);
    const contenedor3 = document.getElementById("contenedorJugadores");
    if (centesimas < 10) {
        centesimas = parseInt(centesimas);
    }
    let indice = carritoJugadores.length - 1
    carritoJugadores[indice].tiempo[2] = centesimas;
    carritoJugadores[indice].tiempo[1] = segundos;
    carritoJugadores[indice].tiempo[0] = minutos;

    let tiempoTotal = (minutos * 6000) + (segundos * 100) + centesimas;
    tiempoLocal = parseInt(tiempoLocal);
    carritoJugadores[indice].total = tiempoTotal;
    console.log(indice);
    console.log(carritoJugadores[indice].tiempo[0]);
    console.log(carritoJugadores[indice].tiempo[1]);
    console.log(carritoJugadores[indice].tiempo[2]);
    console.log(carritoJugadores[indice].total);
    localStorage.setItem(`listaJugadores`, JSON.stringify(carritoJugadores));
    botonMostrar = document.getElementById("btnJugadores");
    botonMostrar.addEventListener("click", mostrarLocal);
}
let carritoJugadores2 = 0;
let carritoPrimeros = 0;
function mostrarLocal() {
    const jugadoresGuardados1 = localStorage.getItem(`listaJugadores`);
    const carritoJugadores1 = JSON.parse(jugadoresGuardados1);
    const contenedor4 = document.getElementById("contenedorJugadores");

    carritoJugadores1.forEach(jugador => {
        carritoJugadores1.sort((a, b) => a.total - b.total);
        carritoJugadores2 = carritoJugadores1.filter(jugador => jugador.total !== 0)

    })
    carritoJugadores2.forEach(jugador => {
        carritoJugadores2 = carritoJugadores2.filter(jugador => jugador.total !== undefined)
        carritoPrimeros = carritoJugadores2.slice(1, 16)

    })
    carritoPrimeros.forEach(jugador => {
        contenedor4.innerHTML += `<p> ${jugador.Alias} - ${jugador.Escuela} - ${jugador.tiempo} - ${jugador.total} </p>`
    })
    botonMostrar.disabled = true;
}
const listado = document.getElementById("listado");
const listadoJugadores = "json/jugadores.json";

fetch(listadoJugadores)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(jugadores => {
            listado.innerHTML +=
                `<p>${jugadores.id}\n
                                  ${jugadores.alias} 
                                  Escuela: ${jugadores.escuela} 
                                  Tiempo: ${jugadores.tiempo}</p>`

        })
    })
    .catch(error => console.log(error))
