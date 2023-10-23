const userNumber = Math.floor(Math.random() * 6) + 1
console.log(userNumber);

const myNumber = Math.floor(Math.random() * 6) + 1
console.log(myNumber, typeof myNumber);

let result = "pareggio"
if (userNumber > myNumber) {
    result = "hai vinto, il computer perde"
}else if (userNumber < myNumber){
    result = "hai perso, il computer vince"
}else{

}

console.log(result);
