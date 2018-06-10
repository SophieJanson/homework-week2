// First solution
// function giveItBackLater(value, callback) {
//   setTimeout(callback.bind(null, value), 1000)
// }

//Second solution after reading up on Array.bind()
function giveItBackLater(value, callback) {
  setTimeout(function() {
    callback(value)
  }, 1000)
}

function addSomePromises(somePromise) {
  return somePromise
    .then(value => value.repeat(2))
    .catch(error => error.repeat(3))
}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    return !value ? reject("The value is missing") : resolve(value)
  })
}

module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
}
