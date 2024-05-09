const kmDaPercorrere = parseFloat(prompt("Inserisci i chilomentri che desideri percorrere:"));
const etaPasseggero = parseInt(prompt("Inserisci la tua età:"));

const prezzoFissoBiglietto = 0.276;

if (etaPasseggero => 65){
    sconto = 42;
} else if (etaPasseggero < 18){
    sconto = 21;
}

let prezzoFinale = prezzoFissoBiglietto * kmDaPercorrere;
prezzoFinale = prezzoFinale - ((prezzoFinale /100) * sconto);

console.log("Il prezzo finale del biglietto con lo sconto sull'età del passeggero è:" + prezzoFinale.toFixed(2) + "Euro");


