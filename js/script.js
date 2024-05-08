let KmDaPercorrere = parseInt(prompt("Inserisci i chilomentri che desideri percorrere:"));

let etaPasseggero = parseInt(prompt("Inserisci l'età del tuo passeggero:"));

const prezzoFissoBiglietto = 0.276

let prezzoBiglietto = (KmDaPercorrere * prezzoFissoBiglietto);

console.log("Il prezzo del biglietto è: " + prezzoBiglietto + "Euro")

if(etaPasseggero < 18){
    prezzoBiglietto *= 0.79;
}
else if(etaPasseggero >= 65){
    prezzoBiglietto *= 0.58;
}

let prezzoFinale= prezzoBiglietto .toFixed(2);
console.log("Il prezzo finale del biglietto con lo sconto è:" + prezzoFinale + "Euro");

