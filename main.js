for (let i = 1; i <= 5; i++)
do{
    let ingresarNombre = prompt("Ingresar nombre");
    alert(`Turno  N°${i}  Nombre: ${ingresarNombre}`);
}while(! (i<=5)){
    alert ('Ya no hay turnos disponibles, vuelva mañana')
}

