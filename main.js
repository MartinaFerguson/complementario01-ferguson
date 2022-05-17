for (let i = 1; i <= 5; i++){
    let ingresarNombre = prompt("Ingresar nombre:   ");
    while(ingresarNombre.trim() ==""){
        ingresarNombre = prompt ("Por favor ingresa un nombre válido:  ")        
    }
    alert (`Turno  N°${i}  Nombre: ${ingresarNombre}`);
    }
    alert ('Ya no hay turnos disponibles, vuelva mañana')