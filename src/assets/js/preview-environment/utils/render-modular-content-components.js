import testComponent from '../components/test-component'
import button from '../components/button'

export default ($modularContentElement, components) => {
  components.forEach(componentData => {
    if (componentData.component === 'Test component') {
      $modularContentElement.innerHTML += testComponent(componentData)
    }
    if (componentData.component === 'Button') {
      $modularContentElement.innerHTML += button(componentData)
    }
  })
}
