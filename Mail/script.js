// CONSEGNA:

// Chiedi all’utente la sua email, 
// controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.


// 1. DEFINISCO ARRAY MAIL-LIST E VARIABILE DA VERIFICARE = FALSE.

const mailList = ['Elisa@gmail.com', 'Eva@libero.it', 'Lavinia@yahoo.it', 'Vittoria@aruba.pec'];
let validMail = false; 

// 2. CHIEDO ALL'UTENTE LA SUA MAIL TRAMITE PROMPT.

let yourMail = prompt('Inserisci la tua mail');


// 3. CREO E AVVIO CICLO FOR PER VERIFICARE CHE LA MAIL INSERITA NEL PROMPT DALL'UTENTE RIENTRI TRA QUELLE
//    INDICATE NELLA MAIL-LIST.
// 4. IF LA MAIL INSERITA E' COMPRESA (===) NEL MIO ARRAY MAIN-LIST TRASFORMO LA VARIABILE IN TRUE.
// 5. ELSE, SE LA MAIL INSERITA NON E' COMPRESA NEL MIO ARRAY MAIN-LIST, RESTA FALSE.

for (let i = 0; i < mailList.length; i++) {
    if (yourMail === mailList[i]) {
        validMail = true;
    }
}


// 6. FINITO L'INTERO CICLO, SE LA CONDIZIONE E' TRUE, STAMPERO' IL MESSAGGIO ADEGUATO (ALERT: 'BENTORNATO!'). 
// 7. FINITO L'INTERO CICLO, SE LA CONDIZIONE E' FALSE, STAMPERO' IL MESSAGGIO ADEGUATO (ALERT: 'ATTENZIONE, CREARE UNA NUOVA MAIL').

if (validMail) {
    alert("Bentornato");
} else {
    alert("Attenzione, non esiste alcuna casella mail collegata all'indirizzo immesso!");
}