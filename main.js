'use strict'

//inizializzo la funzione per definire il countdown
function countdown() {
    let seconds = 10;

    //creo un intervallo che stampa i secondi in console e li decrementa ogni 1000 millesecondi
    const countdownInterval = setInterval(function() {
      if (seconds > 0) {
        console.log(seconds);
        seconds--;

    //se il numero è uguale a zero viene stampato "buon anno" in console
      } else {
        clearInterval(countdownInterval);
        console.log("Buon anno!");
      }
    }, 1000);
  }
  
  //evoco la funzione e inizia il countdown
  countdown();