import removeChildren from './utils/remove-children'
import renderModularContentComponents from './utils/render-modular-content-components'

const $modularContent = document.getElementById('modular-content')

export default {
  render(components) {
    removeChildren($modularContent)
    renderModularContentComponents($modularContent, components)
  }
}
