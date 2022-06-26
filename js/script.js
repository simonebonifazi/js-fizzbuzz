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
 per scrivere questo codice mi avvalgo in primo luogo di js, per questo parto da qui anzichè dalla grafica come l'ultimo esercizio.

 1 - costruisto con il for la mia sequenza di numeri da 1 a 100 stampata in console
 2 - identifico i multipli di 3 e di 5 tramite il modulo i
 3 - li stampo in console come fizz/buzz/fizzbuzz
 */

const NumbersList = document.getElementById('numbers-list')


let myNumbers = '';

// sequenza da 1 a 100
for (let i = 1; i <= 100; i++) {
    //multipli 3
    const multiplerOfThree = (i % 3 === 0);
    //multipli 5
    const multiplerOfFive = (i % 5 === 0);
    //multipli  3 e 5
    const multiplerOfBoth = (i % 15 === 0);

    //creo variabile cui assegno valore i per indicare i miei contenuti; per pulire codice sotto;
    let content = i;

    if (multiplerOfBoth) {
        content = 'fizz-buzz'
    } else if (multiplerOfThree) {
        content = 'fizz'
    } else if (multiplerOfFive) {
        content = 'buzz'
    }

    myNumbers += `<li class="${content}"> ${content} </li>`
}

NumbersList.innerHTML = myNumbers;
// for (let i = 1; i <= 100; i++) {
//     //console.log(i)
//     //multipli 3
//     const multiplerOfThree = (i % 3 === 0);
//     //multipli 5
//     const multiplerOfFive = (i % 5 === 0);
//     //multipli  3 e 5
//     const multiplerOfBoth = (i % 15 === 0);


//     if (multiplerOfBoth) {
//         console.log('Fizzbuzz')
//         myNumbers += '<li class="fizz-buzz"> FizzBuzz </li>'

//     } else if (multiplerOfThree) {
//         console.log('fizz')
//         myNumbers += '<li class="fizz"> Fizz </li>'
//     } else if (multiplerOfFive) {
//         console.log('buzz')
//         myNumbers += '<li class="buzz"> Buzz </li>'
//     } else {
//         console.log(i)
//         myNumbers += `<li> ${i}</li>`
//     }
// }

//NumbersList.innerHTML = myNumbers;











/*
via aletrnativa

if (i % 3 == 0 && i % 5 == 0) {
console.log('fizzbuzz')
} else if (i % 5 == 0) {
console.log('buzz')
} else if (i % 3 == 0) {
console.log('fizz')
} else {
console.log(i)
}

*/

