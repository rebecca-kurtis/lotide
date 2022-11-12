//this function should take in a collection of items and return counts for a specific subset of those items.
//it won't count everything. In order to decide what to count it will also be given an idea of the items we care about and it will only count those ignoring the others.
//items in our case will be limited to strings.
//countOnly will be given an array and an object - it will return an object containing counts of everything that the input object listed.

//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count
// Functino should report back how many instances of each string were found in allItems

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;

};

module.exports = countOnly;

