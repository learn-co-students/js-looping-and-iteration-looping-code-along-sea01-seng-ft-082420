function writeCards(arr, event){
    let array = []
    for(let i = 0; i < arr.length; i++) {
        array.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return array
}

function countDown(number){
    let i = 0
    while(i <= number){
        console.log(number - i)
        i++
    }
}