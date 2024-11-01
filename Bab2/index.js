// Percabangan
let nilai = 80;
if (nilai >= 80) {
    console.log("Nilai A");
} else if (nilai >= 70) {
    console.log("Nilai B");
} else {
    console.log("Nilai C");
}


// Perulangan
for (let i = 1; i <= 5; i++) {
    console.log(i);}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// switch case
let hari = "Minggu";
switch (hari) {
    case "Senin":
    case "Selasa":
    case "Rabu":
    case "Kamis":
    case "Jumat":
        console.log("Hari kerja");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari libur");
        break;
    default:
        console.log("Hari tidak valid");
}


// latihan
function isPrime(number) {
    if (number <= 1) return false; // 0 dan 1 bukan bilangan prima
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Contoh penggunaan
  const num = 17;
  if (isPrime(num)) {
    console.log(`${num} adalah bilangan prima.`);
  } else {
    console.log(`${num} bukan bilangan prima.`);
  }

  
  for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
      row += (i * j).toString().padStart(4, ' '); // Memberi jarak antar angka
    }
    console.log(row);
  }
  