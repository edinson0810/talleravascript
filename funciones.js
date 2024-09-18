// funciones expresadas

let a = 10;
let b = 30;
let c = [];



const matematicas = function (a, b){
    let resultado = [];
    let suma = a + b;
    let resta = a - b;
    let multiplicar = a * b;
    let divicion = a / b;
    resultado.push(['la suma es', suma]);
    resultado.push(['la resta es ',resta]);
    resultado.push(['la multiplicacion es', multiplicar]);
    resultado.push(['la dividicion es ', divicion]);

    return resultado;
    
}

let resultado = matematicas(a,b);
console.log(resultado);
