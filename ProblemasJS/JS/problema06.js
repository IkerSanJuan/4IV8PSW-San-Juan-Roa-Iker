function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var totalum=parseInt(document.getElementById("total").value);
    var mujto=parseInt(document.getElementById("mujerestot").value);
    var hoto=parseInt(document.getElementById("hombrestot").value);
    if(isNaN(totalum)&&isNaN(mujto)&&isNaN(hoto)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        var porhombre = (hoto*100)/totalum;
        var pormujer = (mujto*100)/totalum;

        document.formulario.pormu.value = pormujer+"%";
        document.formulario.porho.value = porhombre+"%";
    }
}

function borrar() {
    document.formulario.canto.value = "";
    document.formulario.cantmu.value = "";
    document.formulario.cantho.value = "";
    document.formulario.porho.value = "";
    document.formulario.pormu.value = "";
}