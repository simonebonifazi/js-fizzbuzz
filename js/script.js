/* traccia

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un elemento contenitore nel DOM e aggiungendo (attraverso il metodo append(), appendChild() o innerHTML) i vari elementi html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


*/

/*
 percorso logico:
 per scrivere questo codice mi avvalgo in priimo luogo di js, per questo parto da qui anzichè dalla grafica come l'ultimo esercizio.
 in primo luogo dovrò costruirmi delle variabili globali, con le quali 'giocherò' con if e for.
 detto in maiera più umana:

 0 - ripasso la teoria dalle slide
 1 - definisco delle variabili globali, il plurale è dovuto al fatto che nel momento in cui le stamperò in pagina aumenteranno
 2 - commento una variabile let x vuota '' per poterla stampare dopo in pagina
 3 - costruisto con il for la mia sequenza di numeri da 1 a 100 stampata in console
 4 - cerco di capire come modificare i multipli/divisori. al momento credo che una determinante sia che x/y=z e non z.numeri con modulo =0 quindi
 5 - verosimilmente qualcosa come un if e un else if annidati nel for che mi dica quando la divisione dei miei altri valori sia un numero intero, allora lo chiamerò fizz/buzz/fizzbuzz
 6 - posso in alternativa creare una variabile i che segua i multipli di tre? 
 7 - in mezzo a questi punti andrò a controllare la lazione :) sarà una lunga giornata :')
  
 */

const numbers = 'sequenza numeri da 1 a 100'; //in realtà non ne avrei bisogno per stampare in pagina

const nOnTree = parseInt(3)
console.log(nOnTree)
// let myNumber = '';

//provo a costruirmi una variabile che contenga i divisori di 100 per 3 e per 5

//const dividingThree = for (let i = 1;  ){

//}

for (let i = 1; i <= 100; i++) {
    let j = 3;


    if (i % j == 0); {
        console.log('fizz')
    }
}