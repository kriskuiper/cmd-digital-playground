export default ({ name, label }) => {
  return `
    <div class="app-form__input-group app-form__checkbox">
      <input
        type="checkbox"
        name="${name}"
        id="${name}""
        class="app-checkbox"
      >
      <label for="${name}">${label}</label>
    </div>
  `
}
