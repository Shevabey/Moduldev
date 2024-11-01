// Array berisi nama-nama hari dalam seminggu
let hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

// Menampilkan hari ke-3 dalam array
console.log("Hari ke-3 adalah:", hari[2]); // Output: "Rabu"

// Menambahkan dua hari lagi ke akhir array
hari.push("Hari Ekstra 1", "Hari Ekstra 2");
console.log("Setelah menambahkan dua hari:", hari); 
// Output: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu", "Hari Ekstra 1", "Hari Ekstra 2"]

// Menghapus hari pertama dari array
hari.shift();
console.log("Setelah menghapus hari pertama:", hari); 
// Output: ["Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu", "Hari Ekstra 1", "Hari Ekstra 2"]

// Array berisi nama-nama bulan
const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

// Menggabungkan array hari dan array bulan
const hariDanBulan = hari.concat(bulan);
console.log("Gabungan array hari dan bulan:", hariDanBulan);
