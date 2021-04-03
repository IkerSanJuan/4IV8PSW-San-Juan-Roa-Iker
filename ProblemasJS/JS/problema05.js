function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var percal=parseInt(document.getElementById("primer").value);
    var sdocal=parseInt(document.getElementById("segundo").value);
    var tercal=parseInt(document.getElementById("tercer").value);
    var ex=parseInt(document.getElementById("examen").value);
    var tra=parseInt(document.getElementById("trabajo").value);
    if(isNaN(percal)&&isNaN(sdocal)&&isNaN(tercal)&&isNaN(ex)&&isNaN(tra)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        var proparcial = ((percal+sdocal+tercal)/3)*0.55;
        var toex = ex*0.30;
        var totra = tra*0.15;
        var calfinal = proparcial+toex+totra;

        document.formulario.sueldoti.value= calfinal;
    }
}

function borrar() {
    document.formulario.pripar.value = "";
    document.formulario.segpar.value = "";
    document.formulario.terpar.value = "";
    document.formulario.exfinal.value = "";
    document.formulario.trfinal.value = "";
    document.formulario.sueldoti.value = "";
}