module.exports = function(collection){
  return {
    collection: Object
      .keys(collection)
      .sort()
      .reverse()
      .map((item) => [item, collection[item]])
      .filter((item) => !item[1].attributes.depricated)
  }
}
