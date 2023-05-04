

let valores = 0;
let operar = null;
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
    tirarDado() {
        contenedor.innerHTML = ``;
        div.crearDado();
        avanzar();
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


function tiraDado() {
    let tirar = prompt("¿Deseas Tirar el Dado? (Si o No)?");
    div.tirarDado();
}

function mapaEscuela() {
    const contenedor1 = document.getElementById("contenedor1");
    const div1 = document.createElement("div");
    div1.className = "caja1";
    div1.innerHTML = `<p class="textImagen"> Jugando, llegamos a la Escuela: </p>
            <img class="imgMapa" src="${mapa.url}"
            alt= "${mapa.url}">`;
    contenedor1.appendChild(div1);
}

class Operacion {
    constructor(valores) {
        this.valores = valores;
    }

    sumar() {
        while (valores <= 10 && valores >= 2 && operar != "NO" && operar != "no" && operar != null) {
            console.clear();
            let s = 0;
            listaNrosVacia.splice(0, listaNrosVacia.length);
            for (let i = 1; i <= valores; i++) {
                let rndInt = randomIntFromInterval(-6, 6);
                listaNrosVacia.push(rndInt);
                console.log(rndInt);
                alert("Sumar: " + rndInt);
                s = s + rndInt;
            }
            listaNrosVacia.sort((a, b) => b - a);
            let listaString = listaNrosVacia.join(")+(");
            alert("Los Numeros Son: (" + listaString + ")");
            let resultado = parseInt(prompt("Ingrese el resultado de la suma de los numeros mostrados:"));
            if (resultado == s) {
                alert("Correcto El Resultado es: " + s);
            } else {
                alert("Incorrecto El Resultado es: " + s);
            }

        }
    }

    multiplicar() {
        while (valores <= 10 && valores >= 2 && operar != "NO" && operar != "no" && operar != null) {
            console.clear();
            let s = 1;
            listaNrosVacia.splice(0, listaNrosVacia.length);
            for (let i = 1; i <= valores; i++) {
                rndInt = randomIntFromInterval(1, 6);
                listaNrosVacia.push(rndInt);
                alert("Los Numeros Son: " + rndInt);
                s = s * rndInt;
            }
            let listaString = listaNrosVacia.join("x");
            alert("Los Numeros Son: " + listaString);
            let resultado = parseInt(prompt("Ingrese el resultado de la multiplicación de los numeros mostrados:"));
            if (resultado == s) {
                alert("Correcto El Resultado es: " + s);
            } else {
                alert("Incorrecto El Resultado es: " + s);
            }

        }
    }
}
function activarBoton() {
    const btnUno = document.getElementById("btn1");
    btnUno.onclick = () => {
        div.tirarDado();
    }
}
function avanzar (){
    if (rndIntAcum == 1) {
        casilla1();
    }else if (rndIntAcum == 2) {
        casilla2();
    }else if (rndIntAcum == 3) {
        casilla3();
    }else if (rndIntAcum == 4) {
        casilla4();
    }else if (rndIntAcum == 5) {
        casilla5();
    }else if (rndIntAcum == 6) {
        casilla6();
    }else if (rndIntAcum == 7) {
        casilla7();
    }else if (rndIntAcum == 8) {
        casilla8();
    }else if (rndIntAcum == 9) {
        casilla9();
    }else if (rndIntAcum == 10) {
        casilla10();

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




tiraDado()
mapaEscuela()
activarBoton()
avanzar()


