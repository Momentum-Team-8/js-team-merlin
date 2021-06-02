const url = "http://localhost:3000/movies"

const form = document.querySelector(".form")

const movieText = document.querySelector("#New-Movie")

const movieTitle = document.querySelector(".Movies")

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
            watched_at: null 
        })
        })
        .then (response => response.json())
        .then (data => renderMovie(data))
}

function renderMovie (data) {
    const movieList = document.createElement("li")
    movieList.id = data.id
    console.log(movieList.id)
    renderMovieText(movieList, data) 
    movieTitle.appendChild(movieList)
}

function renderMovieText(movieList, data) 
{ 
    const Title = document.createElement ("p")
    const del = document.createElement('button')
    del.innerHTML = "Delete movie"
    movieList.innerHTML = data.title
    const watchedButton = document.createElement ("button")
    watchedButton.innerHTML = "Mark as watched"
    watchedButton.classList.add ("watched")
    del.classList.add('delete')
    movieList.appendChild(Title)
    movieList.appendChild(del)
    movieList.appendChild(watchedButton)
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
    .then (resp => resp.json())
    .then(data =>  { 
        for (let x of data) {
            renderMovie(x)
        }
    })    
    
}

function deleteMovie (movie)
{
    const movieId = movie.parentElement.id
    fetch(url + "/" + `${movieId}`,{
        method: "DELETE"
    }).then(()=> movie.parentElement.remove())

}

movieTitle.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        deleteMovie(e.target)
    }
    })

    function Watched (text) {
        const movieId = text.parentElement.id
    fetch(url + "/" + `${movieId}`,{
        // console.log(text)
        // fetch (url, {
            method: "PATCH",
            headers: {"Content-Type" : "application/JSON"} ,
            body: JSON.stringify({
                // title: text,
                // create_at: moment().format(),
                watched_at: "watched at" + moment().format("MMM Do")
            })
            })
            .then (response => response.json())
            .then (data => console.log(data))
            location.reload()
    }

    movieTitle.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.classList.contains("watched")) {
            Watched(e.target)
        }
        })



getlistofMovies()
// createListItem()

