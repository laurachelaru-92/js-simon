$("document").ready(function() {

// Esporre 5 numeri casuali. Li faremo da 1 a 50.
var arrayNrCasuali = [];

while(arrayNrCasuali.length < 5) {
  var numeroCasuale = Math.floor(Math.random()*50) + 1;
  if(arrayNrCasuali.includes(numeroCasuale) == false) {
    arrayNrCasuali.push(numeroCasuale);
  }
}

// Stampiamo in HTML il testo per l'utente
$("#numeri-display p#numeri-output").text(
  arrayNrCasuali[0] + ", " +
  arrayNrCasuali[1] + ", " +
  arrayNrCasuali[2] + ", " +
  arrayNrCasuali[3] + ", " +
  arrayNrCasuali[4] + "."
);

// Parte un timer di 30 secondi
var secondi = 5;
var countdown30 = setInterval(function () {
  $("#countdown #secondi").text(secondi);
  if(secondi == 1) {
    $("#secondi-rimanenti").text(" secondo rimanente");
  } else if(secondi == 0) {
    clearInterval(countdown30);
    $("#numeri-display").hide();
    $("#numeri-input").removeClass("display-none");  // Appare il box perché l'utente inserisca i numeri
  }
  secondi--;
}, 1000);

// Dopo che l'utente avrà inserito i numeri e premuto "Controlla", controlliamo il risultato

var numeriUtente = [];

$("#controlla").click(
  function() {
    $("#numeri-input > .numero-inserito").each(
      function() {
        numeriUtente.push($(this).val());
      }
    );
    var arrayGiuste = [];
    var arraySbagliate = [];
    for(var i = 0; i < numeriUtente.length; i++) {
      if(arrayNrCasuali.includes(parseInt(numeriUtente[i]))) {
        arrayGiuste.push(numeriUtente[i]);
      } else {
        arraySbagliate.push(numeriUtente[i]);
      }
    }
    console.log("Numeri utente: " + numeriUtente);
    console.log("Array giuste: " + arrayGiuste);
    console.log("Array sbagliate: " + arraySbagliate);
  }
);

// function checkNumbers(arrayNrCasuali, numeriUtente) {
//
//   return arrayGiuste, arraySbagliate;
// }
// Diciamo all'utente quanti numeri ha indovinato

}
);
