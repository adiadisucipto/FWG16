const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
        if(!error) {
            callback(null, month)
        } else{
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

const showMonth = (x, y) => {
    y.map((Element) => {
        return console.log(Element)
    })
}

getMonth(showMonth)