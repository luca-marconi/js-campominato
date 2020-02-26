/*
1. generare 16 numeri diversi random tra  >= 1 e <=100
    1.1 creo un array vuoto
    1.2 inserisco i numeri delle bombe nell array
2. selezione utente
    2.1 creo un array vuoto per i tentativi
    2.2 chiediamo un numero tra 1 e 100
3.  LOGICA DEL GIOCO
    - ripetizione del numeroRandom
        -1. il numero inserito è incluso nell array numeri inseriti
    - prende una bomba
        -1. il numero inserito è incluso nell array bombe
    - inserire il numero nell array dei numeri inseriti
    - se lunghezza numeriInseriti è == numeri senza mine Allora ----> HAI VINTO

GESTIONE ERRORI
    1. numero >= 1 numero <= 100
    2. numero deve essere un numero

*/
// var mine = [];
// var numeriUtente = [];
// var numMine = 16;
//
// var difficolta = parseInt(prompt('digita 0 per livello facile, digita 1 per livello medio, digita 2 per livello difficile'));
// if (difficolta == 0) {
//     var numMax = 100;
// var tentativi = numMax - numMine;
// } else if (difficolta == 1) {
//     var numMax = 80;
//     var tentativi = numMax - numMine;
// } else if (difficolta == 2) {
//     var numMax = 50;
//     var tentativi = numMax - numMine;
// } else {
//     console.log('scegli un numero valido da 0 a 1');
// }
//
// while (mine.length != 16 ) {
//     var random = generaRandom(1, numMax);
//     if (!mine.includes(random)) {
//         mine.push(random)
//     }
// }
// console.log(mine);
// console.log(numMax);
// console.log('hai a disposizione :' + tentativi + ' tentativi');
//
// function generaRandom(min, max) {
//     numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
//     return numeroRandom;
// }
//
//
// for (var i = 0; i < tentativi; i++) {
//     var sceltaUtente = parseInt(prompt('scegli un numero da 1 a' + numMax));
//     while (isNaN(sceltaUtente)) {
//         var sceltaUtente = parseInt(prompt('non hai inserito un numero, riprova!'));
//     }
//         if ((mine.includes(sceltaUtente)) || (sceltaUtente > numMax) || (sceltaUtente < 1)){
//             alert('hai perso');
//             console.log('hai perso');
//             console.log('l utente ha scelto: ' + (numeriUtente.length + 1) + ' numeri');
//             break;
//         } else {
//             numeriUtente.push(sceltaUtente);
//             console.log(numeriUtente);
//
//         }
// }
// if (numeriUtente.length == tentativi) {
//     console.log('hai vinto');
//     console.log('l utente ha scelto: ' + numeriUtente.length + ' numeri');
// }

//-----------------soluzione in classe---------------

var bandierinePiazzate = [];

// var dimensioneCampo = 100; scelta statica
var dimensioneCampo = sceltaDifficolta();

 // scelta con funzione
console.log(dimensioneCampo);
var totaleMine = 16;
var bandierineMax = dimensioneCampo - totaleMine;
var posizioneMine = minaIlCampo(dimensioneCampo, totaleMine);
console.log(posizioneMine);

var boom = false;
    while ((bandierinePiazzate.length < bandierineMax) && (boom == false)) {
        var bandierinaDaPiazzare = parseInt(prompt('scrivi un numero da 1 a' + dimensioneCampo));
        while ((isNaN(bandierinaDaPiazzare)) || (bandierinaDaPiazzare > dimensioneCampo) || (bandierinaDaPiazzare < 1)) {
        var bandierinaDaPiazzare = parseInt(prompt('hai inserito una parola o un numero non valido! riprova con un numero da 1 a: ' + dimensioneCampo));
        }
        if (!bandierinePiazzate.includes(bandierinaDaPiazzare)) {
            if (!posizioneMine.includes(bandierinaDaPiazzare)) {
                bandierinePiazzate.push(bandierinaDaPiazzare);
                if (bandierinePiazzate.length == bandierineMax) {
                    alert('Hai vinto!!!');
                } else {
                    alert('hai piazzato una bandierina');
                }
            } else {
                alert('Boom! hai beccato una bomba! hai piazzato ' + bandierinePiazzate.length + 'è' + 'bandierine');
                boom = true;
            }
        } else {
            alert('hai già inserito questo numero');
        }
    }



function sceltaDifficolta() {
    var scelta = 0;
    while ((scelta != 1) && (scelta != 2) && (scelta != 3)){
    var scelta = parseInt(prompt('inserisci la difficolta tra 1, 2 o 3'));
    }
    switch (scelta) {
        case 1:
            var dimCampo = 100;
            break;
        case 2:
            var dimCampo = 80;
            break;
        case 3:
            var dimCampo = 50;
            break;
        default:
    }
    return dimCampo;
}

function minaIlCampo(dimCampo, totMine) {
    var posizMine = [];
    while (posizMine.length < totMine) {
        var minaDaPiazzare = generaRandom(1, dimCampo);
        if (!posizMine.includes(minaDaPiazzare)) {
            posizMine.push(minaDaPiazzare);
        }
    }
    return posizMine;
}

function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
