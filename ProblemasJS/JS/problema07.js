function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var anacimiento=parseInt(document.getElementById("nacimiento").value);
    var anactual=parseInt(document.getElementById("actual").value);
    if(isNaN(anacimiento)&&isNaN(anactual)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        if (anactual<anacimiento) {
            alert("El año de nacimiento debe ser menor al actual")
        }
        else{
            var anto = anactual-anacimiento;
            if(anto>=100){
                alert("WOW Felicidades por tener tantos años, a no ser que andes en modo comedia");
                document.formulario.edto.value = anto+" años";
            }
            else{
                document.formulario.edto.value = anto+" años";
            }
        }
    }
}

function borrar() {
    document.formulario.ana.value = "";
    document.formulario.anact.value = "";
    document.formulario.edto.value = "";
}