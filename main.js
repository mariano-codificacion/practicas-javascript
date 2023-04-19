

let valores = 0;
let operar = null;
let n = 0;
let listaNrosVacia = [];
class Operacion {
    constructor(valores) {
        this.valores = valores;
    }

    sumar() {
        while (valores <= 10 && valores >= 2 && operar != "NO" && operar != "no" && operar != null) {
            console.clear();
            let s = 0;
            listaNrosVacia.splice (0,listaNrosVacia.length);
            for (let i = 1; i <= valores; i++) {
                let rndInt = randomIntFromInterval(-6, 6);
                listaNrosVacia.push (rndInt);
                console.log(rndInt);
                alert("Sumar: " + rndInt);
                s = s + rndInt;
            }
            listaNrosVacia.sort((a,b)=> b - a);
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
            listaNrosVacia.splice (0,listaNrosVacia.length);
            for (let i = 1; i <= valores; i++) {
                let rndInt = randomIntFromInterval(1, 6);
                listaNrosVacia.push (rndInt);
                console.log(rndInt);
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