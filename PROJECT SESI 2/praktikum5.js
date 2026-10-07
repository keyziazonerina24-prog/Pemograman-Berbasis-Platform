const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Angka: ", function(angka) {
    angka = parseInt(angka);
    if (angka % 2 === 0) {
        console.log(angka + " adalah bilangan genap");
    } else {
        console.log(angka + " adalah bilangan ganjil");
    }
    rl.close();
});