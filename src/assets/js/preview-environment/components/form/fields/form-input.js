export default ({ name, label, placeholder }) => {
  return `
    <div class="app-form__input-group">
      <label for="${name}" class="app-form__label">${label}</label>
      <input
        type="{{ field.type }}"
        name="${name}"
        id="${name}"
        placeholder="${placeholder}"
        class="app-form__input"
      />
    </div>
  `
}
