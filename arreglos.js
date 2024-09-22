const dias = [];

console.log(typeof dias);
// agrega una posicion
dias.push('lunes');
dias.push('martes');
dias.push('miercoles');
dias.push('jueves');
dias.push(['edinson', 'lache']);
dias.push('viernes');
dias.push('sabado');

// elimina a partir de la posocion 2 y 2 elemento siguientes
dias.splice(2 , 2);

console.log('Antes de eliminar',dias);
// elimina la ultima posicion
// dias.pop();
console.log('Despues de eliminar',dias);

console.clear();


console.log(dias);



