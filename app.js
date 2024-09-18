
// variable let y var

let nombre = "";
var apellido = "barrios";

console.log(window);
console.log('inicial',nombre);
console.log('inicial',apellido)
{
   let nombre = "edinson";
    var apellido = "lache";
    console.log('bloque',nombre);
    console.log('bloque',apellido);
}

console.log('fuera del bloque',nombre);
console.log('fuera del bloque',apellido);
let cadena = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati soluta quaerat esse nobis cumque quis odio reprehenderit doloremque cum.";
// cuantas las letras
console.log(cadena.length);
// escribe el mensaje en mayuscula
console.log(cadena.toUpperCase());
// busca la palabra amet dentro de la cadena
console.log(cadena.includes('amet'));
// da un espacio a cada palabra en modo vertical

let arreglo = cadena.split(' ');
console.log(arreglo.length - 1);

// borrar las variables anteriores
console.clear();

let lunes, martes, miercoles;
lunes = "lunes";
martes = "martes";

// las backticks (`…`) 
let lista = `<ul> 
 <li> ${lunes} </li>
 <li> Martes </li>
 <li> Miercoles </li>
 <li> Jueves </li>
 <li> Viernes </li>
 <li> Sabado </li>
<li> Domingo </li>
</ul>`;
console.log(lista);

console.clear();

// es un tipo de dato que se utiliza para representar valores numéricos
let a = 2;
let b = new Number(25);
console.log(a);
console.log(b);

// saber que tipo son los atributos
console.log(typeof a);
console.log(typeof nombre);
console.log(typeof falso);

// funciones declarada
function suma (a, b = 25){
return a + b;
}
let resultado = suma(5,)
console.log(resultado);




// funciones expresadas
const resta = function(a, b){
return a -b;
}
let restamos = resta (9, 2);
console.log(restamos);












// // variable const
// const PI = 3.1416;
// console.log(PI)




