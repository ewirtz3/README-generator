const includesEl = function (array, element) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value === element) {
      return true;
    }
  }
  return false;
};

console.log(includesEl([1, 2, 3], 1));
console.log(includesEl([1, 2, 3], 4));
console.log(includesEl(["code", "dev", "nerd"], "nerd"));
console.log(includesEl(["code", "dev", "nerd"], "genius"));
