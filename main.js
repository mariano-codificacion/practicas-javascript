

let valores = 0;
let operar = null;
let n = 0;
class Operacion {
    constructor(valores) {
        this.valores = valores;
    }

    sumar() {
        while (valores <= 10 && valores >= 2 && operar != "NO" && operar != "no" && operar != null) {
            console.clear();
            let s = 0;
            for (let i = 1; i <= valores; i++) {
                const rndInt = randomIntFromInterval(1, 6);
                console.log(rndInt);
                alert("Los Numeros Son: " + rndInt);
                s = s + rndInt;
            }
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
            for (let i = 1; i <= valores; i++) {
                const rndInt = randomIntFromInterval(1, 6);
                console.log(rndInt);
                alert("Los Numeros Son: " + rndInt);
                s = s * rndInt;
            }
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
    operar = prompt("¿Desea realizar calculos de sumas o multiplicaciones de Nros Naturales: (Si o No)?");
    if (operar != "NO" && operar != "no" && operar != null) {
        valores = parseInt(prompt("¿Cuántos valores Quieres Calcular?(Entre 2 y 10):"));
        n = prompt("Elige la operacion: (1)Suma. (2)Multiplicación. (3)Salir.")
        if (n == 1) {
            const suma = new Operacion(valores);
            suma.sumar();
        } else if (n == 2) {
            const multiplicacion = new Operacion(valores);
            multiplicacion.multiplicar();
        } else if (n == 3){

        }
      
    }
    return (operar, valores);
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
operaciones();