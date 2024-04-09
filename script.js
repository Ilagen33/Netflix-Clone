// Creo le animazioni per far apparire dal basso tre sezioni aggiuntive

// Utilizzo  3 id diversi per farli apparire a tre "altezze di scroll" diverse

// Creo un event listener per lo scroll
document.addEventListener('scroll', function() {

    // Preso l'elemento con id animato 
    var animato = document.getElementById('animato');

    // Se scrollo verticalemnte di 100px 
    if (window.scrollY >= 100) {

    // Aggiungo la classe visibile
      animato.classList.add('visibile');

    // Altrimenti
    } else {

        // Tolgo la classe (così torna non visibile)
      animato.classList.remove('visibile');
    }
});

// Per i seguenti event listener, vale lo stesso principio: modifico solo
// i pixel "scrollati" poiché si trovano ad altezze diverse, così da rendere
// visibili le altre sezioni solo una volta arrivati al punto in cui
// dovranno apparire.

document.addEventListener('scroll', function() {
    var animato = document.getElementById('animato2');
    if (window.scrollY >= 350) {
      animato.classList.add('visibile');
    } else {
      animato.classList.remove('visibile');
    }
});

document.addEventListener('scroll', function() {
    var animato = document.getElementById('animato3');
    if (window.scrollY >= 550) {
      animato.classList.add('visibile');
    } else {
      animato.classList.remove('visibile');
    }
});