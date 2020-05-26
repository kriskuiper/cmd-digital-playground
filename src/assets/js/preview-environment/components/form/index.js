import checkboxInput from './fields/form-checkbox'
import dropdownInput from './fields/form-dropdown'
import radioInput from './fields/form-radio-button'
import textArea from './fields/form-textarea'
import uploadInput from './fields/form-upload'
import formInput from './fields/form-input'

export default ({ title, fields }) => {
  return `
    <form class="app-form">
      <p>${title}</p>

      ${renderFields(fields)}
    </form>
  `
}

function renderFields(fields) {
  let markup = ''

  for (field of fields) {
    switch(field.component) {
      case 'Form input':
        markup += formInput(field)
      case 'Form textarea':
        markup += textArea(field)
      case 'Form dropdown':
        markup += dropdownInput(field)
      case 'Form upload button':
        markup += uploadInput(field)
      case 'Form checkbox':
        markup += checkboxInput(field)
      case 'Form radio button':
        markup += radioInput(field)
    }
  }

  return markup
}

/*

{% if field.component === "Form input" %}
      {{ formInput(field) }}
    {% endif %}

    {% if field.component === "Form textarea" %}
      {{ textArea(field) }}
    {% endif %}

    {% if field.component === "Form dropdown" %}
      {{ dropdownInput(field) }}
    {% endif %}

    {% if field.component === "Form upload button" %}
      {{ uploadInput(field) }}
    {% endif %}

    {% if field.component === "Form checkbox" %}
      {{ checkboxInput(field) }}
    {% endif %}

    {% if field.component === "Form radio button" %}
      {{ radioInput(field) }}
    {% endif %}
*/
