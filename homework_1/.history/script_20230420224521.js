const sum = function () {
  let argument = arguments[0];
  if (argument) {
    sum.valueOf = sum.valueOf >= 0 ? sum.valueOf + argument : argument;
    return sum;
  } else {
    return sum.valueOf;
  }
};
1211;
