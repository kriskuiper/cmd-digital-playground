const hdr = (function() {
  const header = document.querySelector('.main-menu')
  const nav = header.querySelector('nav')
  const button = header.querySelector('button')
  const initialHeight = header.clientHeight
  let open = false

  function toggleMenu() {
    console.log(open);
    header.classList.toggle('open')

    if (open) {
      // Remove height on header
      header.removeAttribute('style')
      button.innerText = 'Menu'
      open = false
    } else {
      // Add height style on header
      header.style.height = initialHeight + nav.clientHeight + 'px'
      button.innerText = 'Sluiten'
      open = true
    }
  }

  return button.addEventListener('click', toggleMenu)
})()

export default hdr
