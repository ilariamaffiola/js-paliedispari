//PALINDROMA 
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

//salvo la parola al contrario in una variabile
const reversedWord = polindromWord(parola);
//stampo la parola al contrario
console.log(reversedWord);

//creo una condizione per capire se la parola inserita è palindroma
//se la parola inserita è uguale alla parola al contrario allora è polindroma
if(parola == reversedWord){
    //condizione true
    console.log('la parola è polindroma');
}
else{
    //condizione false
    console.log('la parola non è polindroma');
}

//FINE PALINDROMA

//PARI E DISPOARI
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


//chiedo all'utente di scegliere tra pari e dispari
let sceltaUtente = prompt('Scegli tra pari e dispari');
console.log(sceltaUtente);
if(sceltaUtente != 'pari' && sceltaUtente != 'dispari' && sceltaUtente != 'Pari' && sceltaUtente != 'Dispari'){
    alert('la scelta non è valida');
}
//chiedo all'utente di inserire un numero tra 1 e 5 
let numeroUtente = parseInt(prompt('Scegli un numero tra 1 e 5 '));
console.log(numeroUtente);
if(numeroUtente < 1 || numeroUtente > 5){
    alert('il numero inserito non è valido');
}
//genero un numero random per il pc da 1 a 5
function randomNumberPc(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
    //devo mettere return perché la funzione mi restituisce un valore e senza return non mi restituisce nulla
    //Math.floor(Math.random() * (max - min + 1) + min) genera un numero random tra 1 e 5 arrotondato per difetto
}
//salvo il numero random del pc in una variabile
//stabilisco il min e il max tra le parentesi
let numeroPc = randomNumberPc(1, 5);
console.log(numeroPc);
//sommo i due numeri
let somma = numeroUtente + numeroPc;
console.log(somma);
//stabilisco se la somma dei due numeri è pari o dispari
//creo una funzione per stabilire se la somma è pari o dispari
function pariDispari(somma){
    //se la somma dei due numeri è pari
    if(somma % 2 === 0 ){
        return 'pari';
    }
    //se la somma dei due numeri è dispari
    else{
        return 'dispari';
    }
}
//salvo il risultato della funzione in una variabile
let risultato = pariDispari(somma);


