function writeCards  (names, event){
const thankYou = []
for (let i = 0; i < names.length; i++) {
console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
thankYou.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`)
}
console.log (thankYou)

return thankYou
}

function countDown (numbers){
let countdown = 0;
while (countdown < 11) {
  console.log(countdown++);
}
}