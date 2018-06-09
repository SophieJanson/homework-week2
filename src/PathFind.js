function PathFind(path, object) {
  return object[path.reduce((accumulator, currentValue) => {
    return accumulator[PathFind(path, object)]
  }, object)]
}

console.log(PathFind(["test", "test2"], {test: {test2: "hello!"}}) )
