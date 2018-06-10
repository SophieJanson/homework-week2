//Non-recursive solution
// function pathFind(path, object) {
//   return path.reduce((finalObject, currentPathSection) => finalObject[currentPathSection], object)
// }

//Recursive solution
function pathFind(path, object) {
  return path.length ? pathFind(path.slice(1), object[path[0]]) : object
}

module.exports.pathFind = pathFind
