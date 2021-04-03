function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var prim=parseInt(document.getElementById("primer").value);
    var segu=parseInt(document.getElementById("segundo").value);
    var terc=parseInt(document.getElementById("tercero").value);
    if(isNaN(prim)&&isNaN(segu)&&isNaN(terc)){
        alert("Por favor no dejes campos vacios");
    }
    else{
        if (prim != segu && segu != terc && prim != terc) {
            if (prim>segu && prim>terc){
                document.formulario.manum.value = prim;
            }
            else{
                if (segu>prim && segu>terc){
                    document.formulario.manum.value = segu;
                }
                else{
                    document.formulario.manum.value = terc;
                }
            }
        }
        else{
            alert("Introduce números diferentes en todas las casillas");
        }
    }
}

function borrar() {
    document.formulario.prinum.value = "";
    document.formulario.segnum.value = "";
    document.formulario.ternum.value = "";
    document.formulario.manum.value = "";
}