import testComponent from '../components/test-component'
import button from '../components/button'
import form from '../components/form'

export default ($modularContentElement, components) => {
  components.forEach(component => {
    switch(component.component) {
      case 'Test component':
        $modularContentElement.innerHTML += testComponent(component)
      case 'Button':
        $modularContentElement.innerHTML += button(component)
      case 'Form':
        $modularContentElement.innerHTML += form(component)
    }
  })
}
