const movieContainer = document.querySelector('.movies')

const movies = [
    {
      image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      title: 'Batman',
      rating: 9.2,
      year: 2022,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorited: false
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      title: 'Avengers',
      rating: 9.2,
      year: 2019,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorited: false
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      title: 'Doctor Strange',
      rating: 9.2,
      year: 2022,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorited: true
    },
]

window.onload = function(){
    movies.forEach(movie => renderMovie(movie))
}

function renderMovie(movie){
    const {title, image, rating, year, description, isFavorited} = movie

    const movieElement = document.createElement('div')
    movieElement.classList.add('movie-card')
    movieContainer.appendChild(movieElement)

    const imageMovie = document.createElement('img')
    imageMovie.src = image
    imageMovie.classList.add('movie-picture')
    
    movieElement.appendChild(imageMovie)

    const movieInformation = document.createElement('div')
    movieInformation.classList.add('movie-classification')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = `${title} (${year})`
    const movieClassisfication = document.createElement('div')
    movieClassisfication.classList.add('movie-classification')

   const flexContainer = document.createElement('div')
   flexContainer.classList.add('d-flex')

   const startContainer = document.createElement('div')
   const starIcon = document.createElement('img')
   starIcon.src = './assets/Star.svg'
   const starTitle = document.createElement('span')
   starTitle.textContent = `${rating}`

   const favoritedContainer = document.createElement('div')
   const heartIcon = document.createElement('img')
   heartIcon.src = './assets/Heart.svg'
   const heartTitle = document.createElement('span')
   heartTitle.textContent = 'Favoritar'

   const sinopse = document.createElement('div')
   sinopse.textContent = `${description}`
   sinopse.classList.add('sinopse')
   

   startContainer.appendChild(starIcon)
   startContainer.appendChild(starTitle)
   favoritedContainer.appendChild(heartIcon)
   favoritedContainer.appendChild(heartTitle)
   flexContainer.appendChild(startContainer)
   flexContainer.appendChild(favoritedContainer)
   movieClassisfication.appendChild(movieTitle)
   movieClassisfication.appendChild(flexContainer)
   movieElement.appendChild(movieClassisfication)
   movieElement.appendChild(sinopse)
}

