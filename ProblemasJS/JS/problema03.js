function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var su=parseInt(document.getElementById("sueldo").value);
    var ven=parseInt(document.getElementById("ventas").value);
    if(isNaN(su)&&isNaN(ven)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        var totalcomision = su*(ven*0.10);
        var totalpaga = su+totalcomision;

        document.formulario.comision.value="$"+Math.round(totalcomision);
        document.formulario.sueldoti.value="$"+Math.round(totalpaga);
    }
}

function borrar() {
    document.formulario.suba.value = "";
    document.formulario.cantven.value = "";
    document.formulario.sueldoti.value = "";
    document.formulario.comision.value = "";
}