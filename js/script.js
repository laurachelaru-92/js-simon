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
$("#numeri-display p").text(
  arrayNrCasuali[0] + ", " +
  arrayNrCasuali[1] + ", " +
  arrayNrCasuali[2] + ", " +
  arrayNrCasuali[3] + ", " +
  arrayNrCasuali[4] + "."
);
// Parte un timer di 30 secondi

// Dopo 30 secondi, l'utente deve inserire i numeri

// Una volta inseriti, diciamo quanti sono stati indovinati

}
);
