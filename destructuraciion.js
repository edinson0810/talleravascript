const numeros = [1, 2, 3, 4, 5];

let uno = numeros[0],
dos = numeros[1],
tres = numeros[2],
cuatro = numeros[3],
cinco = numeros[4];

console.log(uno, dos,tres, cuatro, cinco);


// destructuracion 
const [a, b, c, d, e] = numeros;
console.log(b);



const persona = {
nombre : 'edinson',
apellido : 'lache',
edad : '40'

};
 let { nombre, apellido, edad, ciudad= "Bucarmanga"} = persona;

 console.log(ciudad);
 


let color = "verde";
let marca = "mazda";

 const carro = {
color,
marca,
 }
 console.log(carro);
 






