export default ({  _editable, title, text }) => {
  /**
   * @TODO: use _editable to prefix the component html
   * with so we can have full live preview thingies by
   * clicking on the component itself
   *
   * Kris: "Maybe we can use _editable in the forEach when
   * rendering the component and just say innerHTML += editablecomment
   * before += componentHTML"
   */

  return `
    <div class="test-component">
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  `
}
