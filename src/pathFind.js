function pathFind(path, object) {
  return path.reduce((finalObject, currentPathSection) => finalObject[currentPathSection], object)
}


let obj = {
  book: {
    author: {
      name: "Yuval"
    }
  }
}
console.log(pathFind(["book", "author", "name"], obj) )

module.exports.pathFind = pathFind
