const searchName = (name, max , callback) => {
    //logika nyari nama
    const names = ['Abigail','Alexandra','Alison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirdre','Diana','Elizabeth','Ella','Faith','Olivia','Penelope'];
    let result = names.filter((Element) => 
        Element.toLowerCase().includes(name)
    )
    callback(result.slice(0, max))
}

const showName = (quote) =>{
    if(quote.length > 0){
        console.log(quote)
    }else{
        console.log("Nama tidak ditemukan")
    }
}

searchName("zx", 10, showName)