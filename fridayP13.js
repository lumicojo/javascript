

document.addEventListener('DOMContentLoaded', movieList)
//hi when the page load call the movie function
function movieList() {
    //console.log(MovieList) 
    
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => addMovie(data))
     //console.log(data)   
}






function addMovie(movies) {
    console.log(movies[0])
    //get   grab element with id movie list
    const movieNavBar = document.querySelector("nav#movie-list")
    console.log(movieNavBar)
    movies.forEach((movie) => { 
    
        //assign image source to the obj img  create img element tag
        const imageTag = document.createElement('img')

        //update image src source  we just create with the movies atribute for image
        imageTag.src = movie.image

        imageTag.dataset.id = movie.id
        //add image to DOM
        movieNavBar.append(imageTag) 

        imageTag.addEventListener('click', fetchInfo)
    })   
    
    //get the first movie description from array of movies
    const firstMovie = movies[0]

    console.log(firstMovie.description)
     // to add it to the page
    const firstTag = document.getElementById('detail-image')
    firstTag.src = firstMovie.image
    const newTitle = document.getElementById('title')
    newTitle.innerText = firstMovie.title
    // update
    const newYearRelease = document.getElementById('year-released')
    newYearRelease.innerText = firstMovie.release_year

    const newDescription = document.getElementById('description')
    newDescription.innerText = firstMovie.description


    const watchedButton = document.getElementById('watched')
    watchedButton.innerText = firstMovie.watched
    //if  watched = true                                       else = false
    firstMovie.watched ? watchedButton.innerText = 'watched' : watchedButton.innerText = 'unwatched'
    
    watchedButton.addEventListener('click', function() {
        if (watchedButton.innerText === 'watched') {
            watchedButton.innerText === 'unwatched'
        } else {
            watchedButton.innerText === 'watched'
        }

    })
    

    const newBlood = document.getElementById('blood-amount')
    newBlood.innerText = firstMovie.blood_amount
    
}

function fetchInfo(event){
    fetch(`http://localhost:3000/movies/${event.target.dataset.id}`)
    .then(response => response.json())
    .then(data => movieDetails(data))
}

function movieDetails(movie) {
    const firstTag = document.getElementById('detail-image')
    firstTag.src = movie.image
    const newTitle = document.getElementById('title')
    newTitle.innerText = movie.title

    const newYearRelease = document.getElementById('year-released')
    newYearRelease.innerText = movie.release_year

    const newDescription = document.getElementById('description')
    newDescription.innerText = movie.description


    const watchedButton = document.getElementById('watched')
    watchedButton.innerText = movie.watched
    //if  watched = true                                       else = false
    movie.watched ? watchedButton.innerText = 'watched' : watchedButton.innerText = 'unwatched'
    
    watchedButton.addEventListener('onClick', function() {
        if (watchedButton.innerText === 'watched') {
            watchedButton.innerText === 'unwatched'
        } else {
            watchedButton.innerText === 'watched'
        }
    })
    const newBlood = document.getElementById('blood-amount')
    newBlood.innerText = movie.blood_amount
    

    
}





