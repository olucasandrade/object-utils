/**
 * Swap keys by values from object
 * @param  {Object} object Object to be swapped
 * @return {Object} Object after swap
 */
const swapPairs = (object) => {
  const mapped = Object.entries(object).map(
    ([key, value]) => [value, key]
  );

  return Object.fromEntries(mapped);
};

module.exports = swapPairs;
