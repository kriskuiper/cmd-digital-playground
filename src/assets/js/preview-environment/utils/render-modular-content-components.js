import testComponent from '../components/test-component'

export default ($modularContentElement, components) => {
  components.forEach(componentData => {
    if (componentData.component === 'Test component') {
      $modularContentElement.innerHTML += testComponent(componentData)
    }
  })
}
