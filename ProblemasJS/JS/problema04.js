function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var compra=parseInt(document.getElementById("cantcom").value);
    if(isNaN(compra)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        var descuento = compra*0.15;
        var totalpaga = compra-descuento;

        document.formulario.descuento.value="$"+Math.round(descuento);
        document.formulario.gastotal.value="$"+Math.round(totalpaga);
    }
}

function borrar() {
    document.formulario.cantidad.value = "";
    document.formulario.descuento.value = "";
    document.formulario.gastotal.value = "";
}