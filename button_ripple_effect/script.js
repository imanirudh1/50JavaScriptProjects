const buttons = document.querySelector('.ripple')

// buttons.forEach((button) => {
buttons.addEventListener('click', (e) => {
  const x = e.clientX
  const y = e.clientY
  console.log(x, y)
  const buttonTop = e.target.offsetTop
  const buttonLeft = e.target.offsetLeft
  console.log(buttonLeft, buttonTop)

  const xInside = x - buttonLeft
  const yInside = y - buttonTop

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'
  buttons.appendChild(circle)
})
// })
