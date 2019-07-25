var message = "hello coding";
let msg1 = "hello";
const msg2 = "coding";
msg3 = "siap"; //sifat variabel tanpa var/let/const serupa dengan var namun ketika tdk dideklarasikan (tidak memiliki nilai) akan terjadi error
if (true) {
    var message = 1; //variabel var mempengaruhi variabel diluar fungsi
    let msg1 = 2; //variabel let dalam fungsi hanya berlaku untuk fungsi bersangkutan
    console.log("testing", msg1) //output = 2
}

console.log(message) //output = 1
console.log(msg1) //output = hello
console.log(msg2) // output = coding 