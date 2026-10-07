const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Kata/Kalimat: ", function(teks) {

    let hasil = "";

    for (let i = teks.length - 1; i >= 0; i--) {
        hasil += teks[i];
    }

    console.log("Hasil dibalik: ", hasil);

    if (teks.toLowerCase() === hasil.toLowerCase()) {
        console.log("Palindrome");
    } else {
        console.log("Bukan Palindrome");
    }

    rl.close();
});