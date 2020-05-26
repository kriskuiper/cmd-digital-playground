export default ({ name, label, placeholder }) => {
  return `
    <div class="app-form__input-group">
      <label for="${name}" class="app-form__label">${label}</label>
      <textarea
        name="${name}"
        id="${name}"
        placeholder="${placeholder}"
        cols="30"
        rows="10"
        class="app-form__input"
      ></textarea>
    </div>
  `
}
