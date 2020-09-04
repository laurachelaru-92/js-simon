$("document").ready(function() {

// Generiamo 5 numeri casuali. Li faremo da 1 a 50, non ripetibili
var arrayNrCasuali = [];

while(arrayNrCasuali.length < 5) {
  var numeroCasuale = Math.floor(Math.random()*50) + 1;
  if(arrayNrCasuali.includes(numeroCasuale) == false) {
    arrayNrCasuali.push(numeroCasuale);
  }
}

// Stampiamo in HTML i numeri
$("#numeri-display p#numeri-output").text(
  arrayNrCasuali[0] + ", " +
  arrayNrCasuali[1] + ", " +
  arrayNrCasuali[2] + ", " +
  arrayNrCasuali[3] + ", " +
  arrayNrCasuali[4] + "."
);

// Timer di 30 secondi
var secondi = 30;

var countdown30 = setInterval(function () {
  $("#countdown #secondi").text(secondi);
  if(secondi == 1) {  // Aggiungiamo una chicca.. arrivati al secondo 1, l'html si modifica in "secondo rimanente"
    $("#secondi-rimanenti").text(" secondo rimanente");
  } else if(secondi == 0) {      // L'intervallo finisce al secondo 0
    clearInterval(countdown30);
    $("#numeri-display").hide();  // Si chiude il box dei numeri.. se no che gioco è?
    $("#numeri-input").removeClass("display-none");  // Appare il box perché l'utente inserisca i numeri
  }
  secondi--;
}, 1000);

// Settiamo le variabili dei numeri inseriti dall'utente e quella dei numeri "azzeccati"
var numeriUtente = [];
var arrayGiuste = [];

// Qui scriveremo il nostro risultato
var risultato = "";

// Al click su "controlla" parte il controllo e viene stampato il risultato
$("#controlla").click(
  function() {
    $("#numeri-input > .numero-inserito").each(
      function() {
        numeriUtente.push($(this).val());  // Leggiamo il valore degli input inseriti dall'utente
      }
    );
    for(var i = 0; i < numeriUtente.length; i++) {   // Iteriamo nell'array dei numeri inseriti e verifichiamo quali sono azzeccati
      if(arrayNrCasuali.includes(parseInt(numeriUtente[i]))) {
        arrayGiuste.push(numeriUtente[i]);   // I numeri giusti vengono inseriti nell'array arrayGiuste
      }
    }
    console.log("Numeri utente: " + numeriUtente);  // Un plus, in console stampiamo i 2 array
    console.log("Array giuste: " + arrayGiuste);
    $("#numeri-input > .numero-inserito").val("");  // Puliamo gli input perché siano pronti per il prossimo round!
    stampaRisultato();   // Calcoliamo il risultato con lo switch (vedi sotto)
    $("#output-risultato").removeClass("display-none");  // Appare il box con il risultato
    $("#output-risultato p").text(risultato);
  }
);

// Funzione di assegnazione del risultato
function stampaRisultato() {
  switch (arrayGiuste.length) {
    case 5:
      risultato = "5 giusti! Sei un fenomeno!";
      break;
    case 4:
      risultato = "4 giusti! Quasi perfetto!";
      break;
    case 3:
      risultato = "3 giusti! Sufficiente, ma.. perché non riprovi?";
      break;
    case 2:
      risultato = "2.. Non benissimo.. riprova!";
      break;
    case 1:
      risultato = "Solo 1.. Non ci siamo.. ma non mollare, riprova!";
      break;
    default:
      risultato = "Ehm.. riprova, dai..";
  }
  return risultato;
}

}
);
