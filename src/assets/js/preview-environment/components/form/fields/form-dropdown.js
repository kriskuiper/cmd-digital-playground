export default ({ name, label, placeholder, options }) => {
  return `
    <div class="app-form__input-group">
      <label for="${name}" class="app-form__label">${label}</label>
      <select
        name="${name}"
        id="${name}"
        class="app-form__input app-form__dropdown"
      >
        <option disabled selected value="${placeholder}">${placeholder}</option>
        ${renderOptions(options)}
      </select>
    </div>
  `
}

function renderOptions(options) {
  let markup = ''

  for (option of options) {
    markup += `<option value=${option.value}>${option.value}</option>`
  }

  return markup
}
