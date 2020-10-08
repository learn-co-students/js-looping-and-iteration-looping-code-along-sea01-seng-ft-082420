let fullMessages = [ ]

function writeCards(array, event){
    for (let i = 0; i < array.length; i++){
        fullMessages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return fullMessages;
}

function countDown(num){
    while (num >= 0){
        console.log(num); 
        num -= 1;
    }
}