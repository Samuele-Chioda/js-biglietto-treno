let KmDaPercorrere = parseInt(prompt("Inserisci i chilomentri che desideri percorrere:"));

let etaPasseggero = parseInt(prompt("Inserisci l'età del tuo passeggero:"));

const prezzoFissoBiglietto = 0.276

let prezzoBiglietto = (KmDaPercorrere * prezzoFissoBiglietto);

console.log("Il prezzo del biglietto è: " + prezzoBiglietto + "Euro")

