const jokeEl = document.querySelector('.jokes')
const jokeBtn = document.querySelector('#jokesBtn')

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  //using async await
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}
jokeBtn.addEventListener('click', generateJoke)

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }
////using .then method
//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
// jokeBtn.addEventListener('click', generateJoke)
