const without = function(source, itemsToRemove) {
  let newArray = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }

  return newArray;
};

module.exports = without;