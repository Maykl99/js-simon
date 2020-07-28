/* 
Un alert espone 5 numeri casuali.
Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
quali dei numeri da indovinare sono stati individuati.*/


// 2. array vuoti //-> da popolare 
arrayMacchina=[];
arrayUtente=[];
max=100;
min=10;

// 3. alert con i cinque numeri casuali
for(var i=1; i<=5; i++){
    var numero= numeroRandom(min,max);
    if(!ricerca(arrayMacchina,numero)){
        arrayMacchina.push(numero);
    }
}
alert(arrayMacchina);

// 4. contdown 30 secondi, utente //-> inserire cinque prompt 
var countDown=setTimeout(alertUtente,1000);
console.log(arrayMacchina);

function alertUtente(){
    for(var i=0; i<=arrayMacchina.length-1; i++){
        var utente=parseInt(prompt('Inserisci dei numeri casuali da ' + min + ' a ' + max));
        while(utente <= 0 || utente > 100){
            var utente=parseInt(prompt('Attenzione! inserire numeri nell\' intervallo corretto'));
        }

        if(ricerca(arrayMacchina,utente) && !ricerca(arrayUtente,utente)){ // controllo duplicati // 5. confronto fra i due array 
            
            arrayUtente.push(utente);
        }

    }

    
    console.log('Sono stati trovati questi numeri simili ', arrayUtente, 'ne hai trovato/i ' + arrayUtente.length)//' alla posizione '); //+ arrayUtente.indexOf(utente)); // 6. vedere numeri simili e quali sono stati trovati
}

// 1.funzione numeri casuali
function numeroRandom(min,max){
    numero= Math.floor(Math.random() * (max - min) + min);
    return numero;
}
//1.5 funzione controlllo duplicati // oppure utilizzo .includes()
function ricerca(array,elemento){
    for(var i=0; i<array.length; i++){
        if(elemento == array[i]){
            return true;
        }
    }
    return false;
}