const opennav = document.querySelector('.nav-btn')
const navbar = document.querySelector('.nav-links')

opennav.addEventListener('click', () => {
  navbar.classList.toggle('show')
})
