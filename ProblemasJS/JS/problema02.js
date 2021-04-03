function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var cant=parseInt(document.getElementById("cantidad").value);
    var meses=parseInt(document.getElementById("times").value);
    if(isNaN(cant)&&isNaN(meses)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        var total = (cant*0.98)*meses;

        document.formulario.sueldoti.value="$"+total;
    }
}

function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.dinero.value = "";
    document.formulario.tiempo.value = "";
}