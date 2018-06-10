function giveItBackLater(value, callback) {
  setTimeout(callback.bind(null, value), 5000)
}

giveItBackLater("pink", function(val) {
  console.log(val, "elephant");
})

function addSomePromises() {}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    if(!value) {
      return reject("Value not found")
    }
    return resolve(value)
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
