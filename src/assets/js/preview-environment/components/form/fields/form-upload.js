export default ({ name, label }) => {
  return `
    <div class="app-form__input-group">
      <input
        type="file"
        id="${name}"
        name="${name}"
        class="app-form__upload visually-hidden"
      />
      <label for="${name}" class="app-form__label app-form__upload-label">${label}</label>
    </div>
  `
}
