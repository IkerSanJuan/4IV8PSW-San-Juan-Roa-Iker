function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var tiempo=parseInt(document.getElementById("ano").value);
    var pago=parseInt(document.getElementById("salario").value);
    if(isNaN(tiempo)&&isNaN(pago)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        if(tiempo<1){
            var util = pago*0.05;
        }
        else if(tiempo>=1 && tiempo<2){
            var util = pago*0.07;
        }
        else if(tiempo>=2 && tiempo<5){
            var util = pago*0.10;
        }
        else if(tiempo>=5 && tiempo<10){
            var util = pago*0.15
        }
        else if(tiempo>=10){
            var util = pago*0.20;
        }
        var total = util+pago;
        document.formulario.sueldoti.value = "$"+Math.round(total);
        document.formulario.utilidad.value = "$"+Math.round(util);
    }
}

function borrar() {
    document.formulario.antra.value = "";
    document.formulario.salmes.value = "";
    document.formulario.utilidad.value = "";
    document.formulario.sueldoti.value = "";
}