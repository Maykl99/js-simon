// 2. array vuoti //-> da popolare 
arrayMacchina=[];
arrayUtente=[];
listaPosizioneUtente=[];
var posizioneIndice;

// 3. alert con i cinque numeri casuali
for(var i=1; i<=5; i++){
    arrayMacchina.push(numeroRandom(10,100));
}
alert(arrayMacchina);

// 4. contdown 30 secondi, utente //-> inserire cinque prompt 
var countDown=setTimeout(alertUtente,1000);
console.log(arrayMacchina);
function alertUtente(){
    for(var i=0; i<=arrayMacchina.length-1; i++){
        var utente=parseInt(prompt('Inserisci dei numeri casuali'));
        if(utente === arrayMacchina[i]){ // 5. confronto fra i due array 
            arrayUtente.push(utente);
        }
        posizioneIndice = arrayUtente.indexOf(utente);
        while(posizioneIndice != -1){
            listaPosizioneUtente.push(posizioneIndice);
            posizioneIndice = arrayUtente.indexOf(utente, posizioneIndice + 1);
        }
        
    }
    console.log(listaPosizioneUtente); 
    console.log('Sono stati trovati questi numeri simili ', arrayUtente, 'ne hai trovato/i ' + arrayUtente.length) //+ ' alla posizione ' + posizioneIndice); // 6. vedere numeri simili e quali sono stati trovati
}


// 1.funzione numeri casuali
function numeroRandom(min,max){
    numero= Math.floor(Math.random() * (max - min) + min);
    return numero;
}

/* beh quello che hai fatto adesso ti dice già se hai azzeccato numero e posizione
quello che ti manca è un’altro rametto di codice ( e un nuovo array dove salvarlo ) che ti dica ok non è nella giusta posizione, ma è cmq contenuto nell’array */ 
/* 
for(var i=0; i<array.length; i++){
    console.log(array.indexOf(i));
}

console.log(array.indexOf(56))*/