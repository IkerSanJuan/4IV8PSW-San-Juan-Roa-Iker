function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var prim=parseInt(document.getElementById("primero").value);
    var segu=parseInt(document.getElementById("segundo").value);
    if(isNaN(prim)&&isNaN(segu)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        if (prim==segu) {
            var numfi = prim*segu;
            document.formulario.num.value = numfi;
        }
        else{
            if (prim>segu){
                var numpr = prim-segu;
                var numse = segu-prim;
                document.formulario.num.value = numpr+" y "+numse;
            }
            else{
                var numfi = prim+segu;
                document.formulario.num.value = numfi;
            }
        }
    }
}

function borrar() {
    document.formulario.prinum.value = "";
    document.formulario.segnum.value = "";
    document.formulario.num.value = "";
}