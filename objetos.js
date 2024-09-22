const persona = {
    nombre: "edinson",
    apellido: "lache",
    edad: 38
}
console.log(persona);

// for in
for(const propiedad in persona){
    console.log(`llave ${propiedad}, valor: ${persona[propiedad]}`);
    
}

console.log(persona[edad]);


let palabra = "validando lo mas basico de js";
for (const caracter of palabra) {
    console.log(caracter);
}