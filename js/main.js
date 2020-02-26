/*
1. generare 16 numeri random tra  >= 1 e <=100
2. chiedere all utente di inserire un numero compreso tra 1 e 100
    2.1. se il numero utente è nella lista dei primi 16 numeri generati del pc, l utente ha perso
    2.2 se il numero utente non è nella lista, chiedi all' utente un nuovo numero

*/
var mine = [];
var numeriUtente = [];
var numMine = 16;

var difficolta = parseInt(prompt('digita 0 per livello facile, digita 1 per livello medio, digita 2 per livello difficile'));
if (difficolta == 0) {
    var numMax = 100;
var tentativi = numMax - numMine;
} else if (difficolta == 1) {
    var numMax = 80;
    var tentativi = numMax - numMine;
} else if (difficolta == 2) {
    var numMax = 50;
    var tentativi = numMax - numMine;
} else {
    console.log('scegli un numero valido da 0 a 1');
}

while (mine.length != 16 ) {
    var random = generaRandom(1, numMax);
    if (!mine.includes(random)) {
        mine.push(random)
    }
}
console.log(mine);
console.log(numMax);
console.log('hai a disposizione :' + tentativi + ' tentativi');

function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}


for (var i = 0; i < tentativi; i++) {
    var sceltaUtente = parseInt(prompt('scegli un numero da 1 a 100'));
    while (isNaN(sceltaUtente)) {
        var sceltaUtente = parseInt(prompt('non hai inserito un numero, riprova!'));
    }
        if ((mine.includes(sceltaUtente)) || (sceltaUtente > numMax) || (sceltaUtente < 1)){
            alert('hai perso');
            console.log('hai perso');
            console.log('l utente ha scelto: ' + (numeriUtente.length + 1) + ' numeri');
            break;
        } else {
            numeriUtente.push(sceltaUtente);
            console.log(numeriUtente);

        }
}
if (numeriUtente.length == tentativi) {
    console.log('hai vinto');
    console.log('l utente ha scelto: ' + numeriUtente.length + ' numeri');
}

// console.log('hai vinto');
// console.log('l utente ha scelto: ' + numeriUtente.length + ' numeri');
