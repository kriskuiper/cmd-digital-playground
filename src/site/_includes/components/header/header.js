export default (() => {
  const header = document.querySelector('.main-menu')

  if (header) {
    const nav = header.querySelector('nav')
    const button = header.querySelector('button')
    const initialHeight = header.clientHeight
    var menuOpen = false

    function toggleMenu() {
      header.classList.toggle('open')

      if (menuOpen) {
        // Remove height on header
        header.removeAttribute('style')
        button.innerText = 'Menu'
        menuOpen = false
      } else {
        // Add height style on header
        header.style.height = initialHeight + nav.clientHeight + 'px'
        button.innerText = 'Sluiten'
        menuOpen = true
      }
    }

    button.addEventListener('click', toggleMenu)
  }
})()
