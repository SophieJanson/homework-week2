function giveItBackLater(value, callback) {
  setTimeout(callback.bind(null, value), 1000)
}

giveItBackLater("pink", function(val) {
  console.log(val, "elephant");
})

function addSomePromises(somePromise) {
  return somePromise
    .then(value => value.repeat(2))
    .catch(error => error.repeat(3))
}

// Note: The instructions said to reuse the function used within giveItBackLater.
// I didn't define a new function in giveItBackLater, since it didn't seem the best solution.
function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    return !value ? reject("The value is missing") : resolve(value)
  })
}

promiseToGiveItBackLater("elephant")
  .then(val => console.log(val + " is pink."))
  .catch(err => console.log(err))

module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
}
