// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1. CREO VARIABILE CON MATH.FLOOR (NR. RANDOM A CUI ASSEGNO VALORE MAX 6) PER TURNO DADO GIOCATORE E LA STAMPO IN CONSOLE.
let humanNumber = Math.floor(Math.random() * 6); 
console.log(humanNumber);

// 2. CREO VARIABILE CON MATH.FLOOR (NR. RANDOM A CUI ASSEGNO VALORE MAX 6) PER TURNO DADO PC E LA STAMPO IN CONSOLE.
let computerNumber = Math.floor(Math.random() * 6);
console.log(computerNumber);

// 3. CREO CONDIZIONE IF PER DECRETARE IL VINCITORE IN BASE AL TIRO DEL DADO: 
if (humanNumber > computerNumber) {
    // SE IL DADO DEL GIOCATORE > DADO PC -> HAI VINTO!
    console.log('Hai vinto!');  
}

else if (humanNumber < computerNumber) {
    // SE IL DADO DEL GIOCATORE < DADO PC -> OPS, HAI PERSO!
    console.log('Ops, hai perso! Ritenta!');
}   

else {
    // SE DADO DEL GIOCATORE = DADO PC -> HAI PAREGGIATO, RITENTA!
    console.log('Hai pareggiato! Ritenta per vincere!')
}

