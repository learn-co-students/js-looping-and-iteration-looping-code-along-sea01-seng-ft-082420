function writeCards(names, type) {
    let thanks = []
    for (let i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`)
    }
    return thanks
}

function countDown (int) {
    while (int > 0) {
        console.log(int);
        int--;
    }
    console.log(int);
}
