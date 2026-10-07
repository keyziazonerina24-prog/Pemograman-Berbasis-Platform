const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Nilai: ", function(nilai){
    
    nilai = parseFloat(nilai);

    let grade;
    if(isNaN(nilai)){
        console.log("Input tidak valid. Harap masukkan angka.");
    } else {
        if (nilai >= 85) {
            grade = "A";
        } else if (nilai >= 70) {
            grade = "B";
        } else if (nilai >= 60) {
            grade = "C";
        } else if (nilai >= 50) {
            grade = "D";
        } else {
            grade = "E";
        }
    }

    console.log("Grade: ", grade);
    rl.close();
});