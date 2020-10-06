// Code your solutions in this file
function writeCards(names, holiday){
    let array = [];
    for (let i = 0; i < names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
    }
    return array;
}

function countDown(start){
    while (start >= 0) {
        console.log(start);
        start--;
    }
}