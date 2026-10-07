const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan umur anda: ", function(umur) {
    umur = parseInt(umur);

    console.log("Umur anda:", umur);
    console.log("Tahun depan umur anda:", umur + 1);
    
    rl.close(); 
});