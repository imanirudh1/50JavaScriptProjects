const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity&api_key=dc3f3eaa0d790bf6ce4bc56764597bab&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=dc3f3eaa0d790bf6ce4bc56764597bab&query="'

const search = document.getElementById('search')
const form = document.getElementById('form')
//get initial movies
getMovies(API_URL)
async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data.results)
}
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchTerm = search.value
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm)
    search.value = ''
  } else {
    window.location.reload()
  }
})
