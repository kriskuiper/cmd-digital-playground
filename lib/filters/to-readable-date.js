const dayjs = require('dayjs')

module.exports = (date) => {
  return dayjs(date)
    .locale('nl')
    .format('DD MMMM YYYY')
}
