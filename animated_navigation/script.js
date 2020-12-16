const toggle = document.getElementById('toggel')
toggle.addEventListener('click', () => {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
})
