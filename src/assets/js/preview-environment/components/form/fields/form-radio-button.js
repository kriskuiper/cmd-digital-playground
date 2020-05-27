export default ({ name, label }) => {
  return `
    <div class="app-form__input-group">
      <input type="radio" name="${name}" id="${name}" class="app-radio-button">
      <label for="${name}">${label}</label>
    </div>
  `
}
