const url = "http://localhost:3000"

const form = document.querySelector(".form")

const movieText = document.querySelector("#New-Movie")

function createMovie (text) {
    fetch (url {
        method: "POST",
        headers: {"Content-Type":application/JSON}
        body: JSON.stringify({
            title: text, 
            body: text,
            create_at: moment().format()

        })
    })
.then (response => response.json())
.then (data => renderMovies(data))

