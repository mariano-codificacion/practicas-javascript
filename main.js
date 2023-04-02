
let sum = 0;
let sumar = prompt("¿Desea practicar sumas de Nros Naturales:?");
if (sumar != "NO" && sumar != "no" && sumar != null){
sum = prompt("¿Cuántos Sumandos Quieres?(Entre 2 y 5):");
}
while (sum <= 5 && sum >= 2 && sumar != "NO" && sumar != "no" && sumar != null) {
    console.clear();
    let s = 0;
    for (let i = 1; i <= sum; i++) {
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        const rndInt = randomIntFromInterval(1, 6);
        console.log(rndInt);
        s = s + rndInt;
    }
    let resultado = parseInt(prompt("Ingrese el resultado de la suma de los numeros mostrados:"));
    if (resultado == s) {
        alert("Correcto El Resultado es: " + s);
    } else {
        alert("Incorrecto El Resultado es: " + s);
    }
    sumar = prompt("¿Desea practicar sumas de Nros Naturales:?");
    if (sumar != "NO" && sumar != "no" && sumar != null){
        sum = prompt("¿Cuántos Sumandos Quieres?(Entre 2 y 5):");
        }
}
