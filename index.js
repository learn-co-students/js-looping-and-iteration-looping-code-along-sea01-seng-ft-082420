// Code your solutions in this file
const names = ["Jerry", "Dave", "Rick"];
const string = "suprise"
function writeCards(names, string) {
    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`);
    }
    return thankYouCards;
}

const num = 10
function countDown(num) {
    let i = 0
    while (i <= num) {
        console.log(num - i)
        i++
    }
}