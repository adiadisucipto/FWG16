function divideAndSort(deretAngka) {
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
  const hasil = divideAndSort('5956560159466056');
  console.log("Hasil:", hasil);
  