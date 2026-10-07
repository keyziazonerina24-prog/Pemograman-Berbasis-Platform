const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan Daftar Olahraga (Contoh: Lari, Push-up, Plank): ', (inputolahraga) => {
    rl.question('Masukan Durasi masing-masing dalam menit (Contoh: 15, 30, 5):', (inputdurasi) => {
        const daftarolahraga = inputolahraga.split(',').map(item => item.trim().toLowerCase());
        const daftardurasi = inputdurasi.split(',').map(item => parseInt(item.trim()));

        let totalKalori = 0;
        let totalDurasi = 0;

        console.log("\n Hasil Perhitungan ");

        daftarolahraga.forEach((olahraga, index) => {
            const durasi = daftardurasi[index];
            let kaloriPerMenit = 0;

            switch (olahraga) {
                case 'lari':
                    kaloriPerMenit = 60 / 5; //12 KALORI/MENIT [CITE: 2]
                    break;
                case 'push-up':
                    kaloriPerMenit = 200 / 30; //6.67 KALORI/MENIT [CITE: 2]
                    break;
                case 'plank':
                    kaloriPerMenit = 5 / 1; // 5 KALORI/MENIT [CITE: 2]
                    break;
                default:
                    console.log(`Olahraga ${olahraga} tidak dikenali.`);
                    return;
            }

            const kalori = kaloriPerMenit * durasi;
            totalKalori += kalori;
            totalDurasi += durasi;

            console.log(`- ${olahraga.charAt(0).toUpperCase() + olahraga.slice(1)}: ${kalori.toFixed(2)} kalori`);
        });

        console.log("==================================");
        console.log(`Total Durasi: ${totalDurasi} menit`);
        console.log(`Total Kalori Terbakar: ${totalKalori.toFixed(2)} kalori`);

        rl.close();
    });
});