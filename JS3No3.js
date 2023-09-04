// Fungsi untuk menghitung luas persegi
function hitungLuasPersegi(sisi) {
    return new Promise((resolve, reject) => {
      if (sisi <= 0) {
        reject("Sisi harus lebih besar dari 0");
      } else {
        const luas = sisi * sisi;
        resolve(luas);
      }
    });
  }
  
// Contoh penggunaan Promise
const sisi = 5; // Ubah nilai sisi sesuai kebutuhan Anda
  
hitungLuasPersegi(sisi)
    .then((luas) => {
      console.log(`Luas persegi dengan sisi ${sisi} adalah: ${luas}`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

async function LuasPersegi(){
    try{
        let luas = await hitungLuasPersegi(sisi);
        console.log(`Luas persegi dengan sisi ${sisi} adalah: ${luas}`);
    } catch(error){
        console.log(error);
    }
}

LuasPersegi();


function hitungLuasPersegiPanjang(panjang, lebar){
    return new Promise((resolve, reject) => {
        if(panjang < 0 || lebar < 0){
            reject('Panjang dan lebar harus lebih dari 0');
        }else{
            const luas = panjang * lebar;
            resolve(luas);
        }
    })
}

const panjang = 5;
const lebar = 7;

hitungLuasPersegiPanjang(panjang, lebar)
    .then((luas) => {
        console.log(`Luas persegi panjang dengan panjang ${panjang} dan ${lebar} adalah: ${luas}`);
    }).catch((error) => {
        console.log('Error: ', error);
    })

async function luasPersegiPanjang(){
    try{
        let luas = await hitungLuasPersegiPanjang(panjang, lebar);
        console.log(`Luas persegi panjang dengan panjang ${panjang} dan ${lebar} adalah: ${luas}`);
    } catch(error){
        console.log('Error: ', error);
    }
}

luasPersegiPanjang()