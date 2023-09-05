async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json(); // Kenapa pakai await?

        data.map((Element) => {
            return console.log(Element.name)
    })
    } catch (error) {
        console.log(error)
    }
}

getData()