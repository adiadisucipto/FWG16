function urutkanDanGabung(deretAngka) {
    const bilangan = [];
    let bilanganSaatIni = '';
  
    for (let i = 0; i < deretAngka.length; i++) {
      const digit = deretAngka.charAt(i);
      
      if (digit === '0') {
        if (bilanganSaatIni !== '') {
          bilangan.push(parseInt(bilanganSaatIni, 10));
        }
        bilanganSaatIni = '';
      } else {
        bilanganSaatIni += digit;
      }
    }
  
    if (bilanganSaatIni !== '') {
      bilangan.push(parseInt(bilanganSaatIni, 10));
    }
  
    bilangan.sort((a, b) => a - b);
  
    const bilanganGabungan = parseInt(bilangan.join(''), 10);
  
    return bilanganGabungan;
  }
  
  // Contoh penggunaan fungsi urutkanDanGabung:
  const deretAngka = '50120349';
  const hasil = urutkanDanGabung(deretAngka);
  console.log("Hasil:", hasil);
  