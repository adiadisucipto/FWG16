const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}


cekHariKerja('minggu')
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })


async function hariKerja(){
    try {
        let result = await cekHariKerja('minggu')
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

hariKerja()