const url = "http://localhost:3000/movies"

const form = document.querySelector(".form")

const movieText = document.querySelector("#New-Movie")

const movieTitle = document.querySelector(".movies")

form.addEventListener('submit', e => {
    e.preventDefault();
    createMovie(movieText.value)
})

function createMovie (text) {
    console.log(text)
    fetch (url, {
        method: "POST",
        headers: {"Content-Type" : "application/JSON"} ,
        body: JSON.stringify({
            title: text,
            create_at: moment().format(),
            watched: false
        })
        })
        .then (response => response.json())
        .then (data => renderMovie(data))
}

function renderMovie (data) {
    const movieList = document.createElement("li")
    movieList.id = data.id
    renderMovieText(movieList, data) 
    movieTitle.appendChild(movieList)
}

function renderMovieText(movieList, data) 
{ 
    const Title = document.createElement ("p")
    movieList.innerHTML = data.title
    const watchedButton = document.createElement ("button")
    watchedButton.classList.add ("watched")
    movieList.appendChild(Title)
}

function createListItem() {
    console.log('create movie called')
    let movie = document.querySelector('input').value
    renderMovie(movie)
    console.log(movie)
}

function getlistofMovies ()
{
    console.log('confirm list')
    fetch (url)
    .then (resp =>
        resp.json()    )
        .then(data =>  { 
            for (let x of data) {
                renderMovie(x)
            }
        } )
        ;
}

getlistofMovies()
createListItem()

