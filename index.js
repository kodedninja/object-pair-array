module.exports = (obj) => Object.keys(obj).map(key => {
  return {
    [key]: obj[key]
  }
})
