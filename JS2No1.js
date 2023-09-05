// parseInt(): Digunakan untuk mengonversi string menjadi bilangan bulat.
const angkaString = "42";
const angka = parseInt(angkaString);
console.log(angka);

// parseFloat(): Digunakan untuk mengonversi string menjadi bilangan pecahan (desimal).
const pecahanString = "3.14";
let pecahan = parseFloat(pecahanString);
console.log(pecahan);

// toFixed(): Digunakan untuk memformat bilangan pecahan menjadi string dengan jumlah desimal tertentu.
let pecahan1 = 3.14159265;
const pecahanDuaDesimal = pecahan1.toFixed(2);
console.log(pecahanDuaDesimal);

// toUpperCase(): Mengubah string menjadi huruf kapital.
const teks1 = "Halo Dunia";
const teksKapital = teks1.toUpperCase();
console.log(teksKapital);

// toLowerCase(): Mengubah string menjadi huruf kecil.
const teks = "Halo Dunia";
const teksKecil = teks.toLowerCase();
console.log(teksKecil);

// // split(): Memecah string menjadi array berdasarkan pemisah tertentu.
// const kalimat1 = "Halo, ini adalah contoh.";
// const kataKunci = kalimat1.split(" ");
// console.log(kataKunci);

// // join(): Menggabungkan semua elemen dalam array menjadi sebuah string dengan pemisah tertentu.
// const arrayKata = ["Halo,", "ini", "adalah", "contoh."];
// const kalimat = arrayKata.join(" ");
// console.log(kalimat);

// Array.isArray(): Memeriksa apakah suatu nilai adalah array.
const array = [1, 2, 3];
const apakahArray = Array.isArray(array);
console.log(apakahArray);

// Math.random(): Menghasilkan bilangan acak antara 0 (inklusif) dan 1 (eksklusif).
const angkaRandom = Math.random();
console.log(angkaRandom);

// Date(): Membuat objek Date yang mewakili waktu dan tanggal saat ini.
const sekarang = new Date();
console.log(sekarang);
