let buttonIniciar = window.document.getElementById('iniciar');
let buttonFinalizar = window.document.getElementById('finalizar');
let buttonReiniciar = window.document.getElementById('reiniciar');
let buttonRetornar = window.document.getElementById('retornar');
let mododark = false;


buttonIniciar.addEventListener('click', iniciarContagem);
buttonFinalizar.addEventListener('click', finalizarContagem);
buttonReiniciar.addEventListener('click', reiniciarContagem);
buttonRetornar.addEventListener('click', retornarContagem);
tempo = undefined;





function iniciarContagem() {
    window.document.getElementById('iniciar').hidden = true;
    window.document.getElementById('reiniciar').hidden = false;

    contaMilesimos();

    tempo = setInterval(function () {

        var segundos = window.document.getElementById('segundos').innerHTML;
        var soma = parseInt(segundos) + 1;



        if (soma >= 60) {
            soma = 0;
            maisUmMinuto();
        }


        if (soma < 10) {
            seg = window.document.getElementById('segundos').innerHTML;
            seg = "0";
            seg += soma;
            window.document.getElementById('segundos').innerHTML = seg;

        } else {
            window.document.getElementById('segundos').innerHTML = soma;
        }

    }, 1000);

}

function contaMilesimos() {
    tempoMilesimos = setInterval(function() {
        var milesimos = window.document.getElementById('milesimos').innerHTML;

        var newMilesimos = milesimos.replace('.','');
        var somaMilesimos = parseInt(newMilesimos) + 1;

        if(somaMilesimos >= 999) {
            somaMilesimos = 0;
        }

        if(somaMilesimos < 10) {
            mil = window.document.getElementById('milesimos').innerHTML;
            mil = ".00";
            mil += somaMilesimos;
            window.document.getElementById('milesimos').innerHTML = mil;

        } else if (somaMilesimos >= 10 && somaMilesimos < 100){
            milmil = window.document.getElementById('milesimos').innerHTML;
            milmil = ".0";
            milmil += somaMilesimos;
            window.document.getElementById('milesimos').innerHTML = milmil;
            
            
        } else {
            window.document.getElementById('milesimos').innerHTML = "."
            window.document.getElementById('milesimos').innerHTML += somaMilesimos;
        }
    }, 1);
}

function maisUmMinuto() {

    var minutos = window.document.getElementById('minutos').innerHTML;
    var somaMinutos = parseInt(minutos) + 1;

    if (somaMinutos >= 60) {
        somaMinutos = 0;
        maisUmaHora();
    }


    if (somaMinutos < 10) {
        min = window.document.getElementById('minutos').innerHTML;
        min = "0";
        min += somaMinutos;
        window.document.getElementById('minutos').innerHTML = min;
    } else {
        window.document.getElementById('minutos').innerHTML = somaMinutos;
    }
}


function maisUmaHora() {
    var horas = window.document.getElementById('horas').innerHTML;
    var doisPontos = window.document.getElementById('spandoispontos');



    doisPontos.hidden = false;
    window.document.getElementById('horas').hidden = false;

    var somaHoras = parseInt(horas) + 1;

    if (somaHoras >= 24) {
        somaHoras = 0;
        maisUmDia();
    }

    if (somaHoras < 10) {
        hor = window.document.getElementById('horas').innerHTML;
        hor = "0";
        hor += somaHoras;
        window.document.getElementById('horas').innerHTML = hor;
        window.document.getElementById('horas').innerHTML += "h";
    } else {
        window.document.getElementById('horas').innerHTML = somaHoras;
        window.document.getElementById('horas').innerHTML += "h";
    }
}

function maisUmDia() {
    var dias = window.document.getElementById('dias').innerHTML;
    var doisPontosDias = window.document.getElementById('doispontosdias');

    doisPontosDias.hidden = false;
    window.document.getElementById('dias').hidden = false;

    var somaDias = parseInt(dias) + 1;

    if (somaDias >= 30) {
        somaDias = 0;
        maisUmMes();
    }

    if (somaDias < 10) {
        d = window.document.getElementById('dias').innerHTML;
        d = "0";
        d += somaDias;
        window.document.getElementById('dias').innerHTML = d;
        window.document.getElementById('dias').innerHTML += "d";
    } else {
        window.document.getElementById('dias').innerHTML = somaDias;
        window.document.getElementById('dias').innerHTML += "d";
    }
}


function maisUmMes() {
    var meses = window.document.getElementById('meses').innerHTML;
    var doisPontosMeses = window.document.getElementById('doispontosmeses');

    doisPontosMeses.hidden = false;
    window.document.getElementById('meses').hidden = false;

    var somaMeses = parseInt(meses) + 1;

    if (somaMeses >= 12) {
        somaMeses = 0;
        maisUmAno();
    }

    if (somaMeses < 10) {
        m = window.document.getElementById('meses').innerHTML;
        m = "0";
        m += somaMeses;
        window.document.getElementById('meses').innerHTML = m;
        window.document.getElementById('meses').innerHTML += "m";
    } else {
        window.document.getElementById('meses').innerHTML = somaMeses;
        window.document.getElementById('meses').innerHTML += "m";
    }
}


function maisUmAno() {
    var anos = window.document.getElementById('anos').innerHTML;
    var doisPontosAnos = window.document.getElementById('doispontosanos');


    doisPontosAnos.hidden = false;
    window.document.getElementById('anos').hidden = false;

    var somaAnos = parseInt(anos) + 1;

    if (somaAnos < 10) {
        a = window.document.getElementById('anos').innerHTML;
        a = "0";
        a += somaAnos;
        window.document.getElementById('anos').innerHTML = a;
        window.document.getElementById('anos').innerHTML += "A";
    } else {
        window.document.getElementById('anos').innerHTML = somaAnos;
        window.document.getElementById('anos').innerHTML += "A";
    }
}


function finalizarContagem() {
    if (typeof tempo === "undefined") {
        console.log('achou')
    } else {


        clearInterval(tempo);
        clearInterval(tempoMilesimos);

        window.document.getElementById('finalizar').hidden = true;
        window.document.getElementById('retornar').hidden = false;
    }


}


function retornarContagem() {

    window.document.getElementById('retornar').hidden = true;
    window.document.getElementById('finalizar').hidden = false;

    iniciarContagem();
}


function reiniciarContagem() {
    finalizarContagem();
    window.document.getElementById('anos').hidden = true;
    window.document.getElementById('doispontosanos').hidden = true;
    window.document.getElementById('meses').hidden = true;
    window.document.getElementById('doispontosmeses').hidden = true;
    window.document.getElementById('dias').hidden = true;
    window.document.getElementById('doispontosdias').hidden = true;
    window.document.getElementById('horas').hidden = true;
    window.document.getElementById('spandoispontos').hidden = true;

    zerarValoresTimer();
}

function zerarValoresTimer() {
    window.document.getElementById('anos').innerHTML = "00";
    window.document.getElementById('doispontosanos').innerHTML = "00";
    window.document.getElementById('meses').innerHTML = "00";
    window.document.getElementById('doispontosmeses').innerHTML = "00";
    window.document.getElementById('dias').innerHTML = "00";
    window.document.getElementById('doispontosdias').innerHTML = "00";
    window.document.getElementById('horas').innerHTML = "00";
    window.document.getElementById('spandoispontos').innerHTML = "00";
    window.document.getElementById('minutos').innerHTML = "00";
    window.document.getElementById('segundos').innerHTML = "00";
    window.document.getElementById('milesimos').innerHTML = ".000";

    window.document.getElementById('reiniciar').hidden = true;
    window.document.getElementById('retornar').hidden = true;
    window.document.getElementById('iniciar').hidden = false;
    window.document.getElementById('finalizar').hidden = false;
    tempo = undefined;
}


function mudatemaLayoult() {
    if(mododark == false) {
        window.document.body.style.backgroundColor = '#1d1d1d';
        window.document.body.style.color = 'white';
        mododark = true;
    } else {
        window.document.body.style.backgroundColor = 'white';
        window.document.body.style.color = 'black';
        mododark = false;
    }
}