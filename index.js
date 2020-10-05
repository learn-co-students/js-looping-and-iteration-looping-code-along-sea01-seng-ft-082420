// Code your solutions in this file

// let people = [ 'Lisa', 'Kaitlin', 'Jan' ];
// let gift = 'surprise';
let arr = []

function writeCards(people, gift) {
    for(let i = 0; i < people.length; i++) {
        arr.push(`Thank you, ${people[i]}, for the wonderful ${gift} gift!`)
    }
    // arr = arr.slice(0,3)
    return arr
}

writeCards(people, gift);

function countDown(num) {
    for (let i= num; i > -1; i--) {
        console.log(i)
    }
}

