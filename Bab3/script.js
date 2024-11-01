// LATIHAN 1
// Fungsi untuk menjumlahkan dua angka
function tambahAngka(a, b) {
    return a + b;
  }
  
  // Memanggil fungsi dengan berbagai kombinasi angka
  console.log(tambahAngka(5, 10));    // Output: 15
  console.log(tambahAngka(-3, 7));    // Output: 4
  console.log(tambahAngka(0, 0));     // Output: 0
  console.log(tambahAngka(3.5, 2.5)); // Output: 6
  console.log(tambahAngka(100, 250)); // Output: 350
  console.log(tambahAngka(-20, -30)); // Output: -50
  


// LATIHAN 2
function convertToFahrenheit(celsius) {
    if (celsius < 0) {
      console.log("Suhu terlalu rendah");
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }
  
  // Contoh penggunaan
  console.log(convertToFahrenheit(25)); // Output: 77
  console.log("dalam Fahrenheit = " + convertToFahrenheit(-5)); // Output: "Suhu terlalu rendah" dan -5 dalam Fahrenheit = 23
  

  
