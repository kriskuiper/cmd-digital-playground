export default ({ _editable, text, type, link }) => {
  if (type === 'button') {
    return `
    <button class="button">
      ${text}
    </button>
  `
  } else {
    return `
    <a class="button" href="${link.url}">
      ${text}
    </a>
    `
  }

}
