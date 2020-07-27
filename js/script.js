/* 
Un alert espone 5 numeri casuali.
Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
quali dei numeri da indovinare sono stati individuati.*/


// 2. array vuoti //-> da popolare 
arrayMacchina=[];
arrayUtente=[];

// 3. alert con i cinque numeri casuali
for(var i=1; i<=5; i++){
    arrayMacchina.push(numeroRandom(10,100));
}
alert(arrayMacchina);

// 4. contdown 30 secondi, utente //-> inserire cinque prompt 
var contDown=setTimeout(alertUtente,1000);
console.log(arrayMacchina);
function alertUtente(){
    for(var i=0; i<=arrayMacchina.length-1; i++){
        var utente=parseInt(prompt('Inserisci dei numeri casuali'));
        if(utente === arrayMacchina[i]){ // 5. confronto fra i due array 
            arrayUtente.push(utente);
        }
    }
    
    console.log('Sono stati trovati questi numeri simili ', arrayUtente, 'ne hai trovato/i ' + arrayUtente.length); // 6. vedere numeri simili e quali sono stati trovati
    
}




// 1.funzione numeri casuali
function numeroRandom(min,max){
    numero= Math.floor(Math.random() * (max - min) + min);
    return numero;
}

