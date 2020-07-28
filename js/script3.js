var numeriCasuali=[];

while(numeriCasuali.length < 5){

}






function numeroRandom(min,max){
    numero= Math.floor(Math.random() * (max - min) + min);
    return numero;
}


function ricerca(array,elemento){
    for(var i=0; i<array.length; i++){
        if(elemento == array[i]){
            return true;
        }
    }
    return false;
}