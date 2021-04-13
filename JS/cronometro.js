let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciar');
let resetear = document.getElementById('resetear');
let grabar = document.getElementById('grabar');
let almacenarTiempos = document.getElementById('almacenarTiempos');

let tiempo = 0;
let intevalo = 0;
let verificador = false;

init();

function init() {
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click', resetearContador);
    grabar.addEventListener('click', grabarContador);
}

function iniciarContador() {
    if (verificador == false){
        var intevalo = setInteval(function (){
            tiempo += 0.01;
            temporizador.innerHTML = tiempo.toFixed(2);
        }, 10)
        verificar = true;
    }else{
        verificar = false;
        clearInterval(intevalo);
    }
}

function resetearContador(){
    verificador = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo +'0.00';
    clearInterval(intevalo);
    while (almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    }
}

function grabarContador() {
    if (temporizador.textContent === '0.00'){
        console.log('click para iniciar el cronometro');
    }else{
        let p = document.createElement('ul');
        p.innerHTML = `
        
        <li> Tiempo : ${tiempo.toFixed(2)} </li>
        
        `;
        almacenarTiempos.appendChild(p);
    }
}