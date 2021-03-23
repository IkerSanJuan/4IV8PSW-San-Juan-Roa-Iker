function validar(formulario){
    /*Queremos validad
     que se escriban mas 
     de 5 caracteres en el nombre
    */

     if (formulario.nombre.value.length < 5){
        alert("Por favor escribe mas de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
     }
}