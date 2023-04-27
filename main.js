

let valores = 0;
let operar = null;
let n = 0;
let listaNrosVacia = [];
let rndInt;
class dado {
    constructor(valor, url) {
        this.valor = valor;
        this.url = url;
    }

    avanzar() {
        const contenedor = document.getElementById("contenedor");
        if (rndInt == 1) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado1.valor} </p>
                        <img class="dados" src="${dado1.url}"
                         alt= "${dado1.valor}">`
            contenedor.appendChild(div);
        } else if (rndInt == 2) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado2.valor} </p>
                        <img class="dados" src="${dado2.url}"
                        alt= "${dado2.valor}">`
            contenedor.appendChild(div);
        } else if (rndInt == 3) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado3.valor} </p>
                        <img class="dados" src="${dado3.url}"
                        alt= "${dado3.valor}">`
            contenedor.appendChild(div);
        } else if (rndInt == 4) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado4.valor} </p>
                        <img class="dados" src="${dado4.url}"
                        alt= "${dado4.valor}">`
            contenedor.appendChild(div);
        } else if (rndInt == 5) {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado5.valor} </p>
                        <img class="dados" src="${dado5.url}"
                        alt= "${dado5.valor}">`
            contenedor.appendChild(div);
        } else {
            const div = document.createElement("div");
            div.className = "caja";
            div.innerHTML = `<p class="textDado"> AVANZA: ${dado6.valor} </p>
                        <img class="dados" src="${dado6.url}"
                        alt= "${dado6.valor}">`
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
const dados = new dado();

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
            operaciones();
        }
    }

    multiplicar() {
        while (valores <= 10 && valores >= 2 && operar != "NO" && operar != "no" && operar != null) {
            console.clear();
            let s = 1;
            listaNrosVacia.splice(0, listaNrosVacia.length);
            for (let i = 1; i <= valores; i++) {
                rndInt = randomIntFromInterval(1, 6);
                dados.avanzar()
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
            operaciones();
        }
    }
}
function operaciones() {
    operar = prompt("¿Desea realizar calculos de sumas y restas o multiplicaciones de Nros Naturales: (Si o No)?");
    if (operar != "NO" && operar != "no" && operar != null) {
        valores = parseInt(prompt("¿Cuántos valores Quieres Calcular?(Entre 2 y 10):"));
        n = prompt("Elige la operacion: \n (1)Sumas y Restas \n (2)Multiplicación. \n (3)Salir")
        if (n == 1) {
            const suma = new Operacion(valores);
            suma.sumar();
        } else if (n == 2) {
            const multiplicacion = new Operacion(valores);
            multiplicacion.multiplicar();
        } else if (n == 3) {
        }

    }
    return (operar, valores);
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
operaciones();