const searchName = (name, max , callback) => {
    const names = ['Abigail','Alexandra','Alison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirdre','Diana','Elizabeth','Ella','Faith','Olivia','Penelope'];
    //logika nyari nama
    let result = names.filter((Element) => 
        Element.toLowerCase().includes(name)
    )
    callback(result.slice(0, max))
}


// penggunaan callback
// penulisan if
const showName = (quote) =>{
    if(quote.length > 0){
        console.log(quote)
    }else{
        console.log("Nama tidak ditemukan")
    }
}

searchName("an", 3, showName)