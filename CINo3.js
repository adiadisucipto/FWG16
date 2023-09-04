// function FazzFood(harga, voucher, jarak, pajak){
//     let totalHarga = harga
//     if(voucher === "FAZZFOOD50"{
//         if(harga >= 50000){
//             if()
//         }
//     })
// }



function FazzFood(harga, voucher, jarak, pajak) {
    let totalHarga = harga;
    console.log(`Harga = ${harga}`)
  
    if (voucher === "FAZZFOOD50") {
      if (harga >= 50000) {
        let potongan = 0;
        if(potongan >= 500000){
            potongan = 50000
        } else{
            potongan = harga * 0.5
        }
        console.log(`Potongan =  ${potongan}`)
        totalHarga -= potongan;
      }
    } else if (voucher === "DITRAKTIR60") {
      if (harga >= 25000) {
        let potongan = 0
        if(potongan >= 30000){
            potongan = 30000
        } else{
            potongan = harga * 0.6
        }
        console.log(`Potongan =  ${potongan}`)
        totalHarga -= potongan;
      }
    }

    let biayaPengiriman = 0;
    if(jarak <= 2){
        biayaPengiriman = 5000
        console.log(`Biaya antar = ${biayaPengiriman}`)
    }else{
        biayaPengiriman = 5000 + (jarak - 2) * 3000;
        console.log(`Biaya antar = ${biayaPengiriman}`)
    }
    totalHarga += biayaPengiriman;
  
    if (pajak) {
      const pajakHarga = harga * 0.05;
      console.log(`Pajak = ${pajakHarga}`)
      totalHarga += pajakHarga;
    } else{
        const pajakHarga = 0;
        console.log(`Pajak = ${pajakHarga}`)
        console.log('Tidak ada pajak')
    }
    
  
    return totalHarga;
  }
  
  // Contoh penggunaan fungsi FazzFood:
  const hargaMakanan = 75000;
  const kodeVoucher = "FAZZFOOD50";
  const jarakPengiriman = 5; // dalam kilometer
  const dikenakanPajak = true;
  
  const totalHargaAkhir = FazzFood(75000, "FAZZFOOD50", 5, true);
  console.log("SubTotal:", totalHargaAkhir);
  