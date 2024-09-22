try {
    // Agregamos el codigo que vamos a evaluar
    console.log("codigo a evaluar ");
    codigo;
    console.log("que pasara en este lugar");
    
    
} catch (error) {
    console.log("mensajes de errores");
    console.log(error);
    } finally{
        console.log("siempre se ejecuta");
        
    }

// personalizar el error para que el codigo no se dañe
    try {
        // let numero = "letras";
        let numero = 10;
        if (isNaN(numero))
        throw new Error("mensaje que le podemos o le mostraremos al usuario");
        console.log(numero * numero);
        } catch (error) {
        console.error(`se produjo el siguiente error: ${error}`);
        }