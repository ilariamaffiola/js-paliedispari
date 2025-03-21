//Palindroma 
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//significato di palindromo:
//palindromo è quando una parola è uguale se letta da destra a sinistra e viceversa
//esempio: anno, otto, radar, osso, radar, ossesso, inni, onorarono, ecc.

//chiedo all'utente di inserire una parola
let parola = prompt('Inserisci la parola');
console.log(parola);
//creo la funzione per capire se la parola inserita è palindroma
function polindromWord(parola){
    //creo una variabile per salvare la parola al contrario
    let parolaReverse = "";
    //creo un ciclo per invertire la parola inserita prendendo ogni lettera dalla fine
    //let i = parola.length - 1; i >= 0 ; i-- significa che i parte dalla lunghezza della parola - 1, quindi dall'ultima lettera
    for (let i = parola.length - 1; i >= 0 ; i--){
        //let i = parola.length - 1; i >= 0 ; i-- significa che i parte dalla lunghezza della parola - 1, quindi dall'ultima lettera
        //parolaReverse += parola[i]; significa che prendo la lettera i della parola e la metto in parolaReverse e questo fino alla fine della lunghezza della parola
        parolaReverse += parola[i];
    }
    //ritorno la parola al contrario
    return parolaReverse;
}

