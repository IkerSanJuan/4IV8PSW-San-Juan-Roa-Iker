function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var pag=parseInt(document.getElementById("pago").value);
    var hrs=parseInt(document.getElementById("horas").value);
    if(isNaN(pag)&&isNaN(hrs)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        if(hrs>3000){
            alert("Introduce un número de horas validas, ¿no seras comediante?")
        }
        else{
            if (hrs > 40) {
                var sueldo = hrs * pag;
                var hrsex = (hrs - 40) * 2;
                var sueldoex = hrsex * pag;
                var sueldoto = sueldoex + sueldo;
                document.formulario.pagoextra.value = "$" + sueldoex;
                document.formulario.sueldoti.value = "$" + sueldoto;
            } else {
                if (hrs > 48) {
                    var sueldo = hrs * pag;
                    var hrsex = (hrs - 40) * 2;
                    var sueldoex = hrsex * pag;
                    var hrsex2 = (hrs - 48) * 3;
                    var sueldoex2 = hrsex2 * pag;
                    var sueldoextotal = sueldoex+sueldoex2;
                    var sueldoto = sueldoex2 + sueldoex + sueldo;
                    document.formulario.pagoextra.value = "$" + sueldoextotal;
                    document.formulario.sueldoti.value = "$" + sueldoto;
                } else {
                    var sueldo = hrs * pag;
                    document.formulario.sueldoti.value = "$" + sueldo;
                    document.formulario.pagoextra.value = "$0";

                }
            }
        }
    }
}

function borrar() {
    document.formulario.paghrs.value = "";
    document.formulario.canthrs.value = "";
    document.formulario.sueldoti.value = "";
    document.formulario.pagoextra.value = "";
}