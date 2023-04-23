const sum = function (argument) {
  if (argument) {
    this.a = this.a >= 0 ? this.a + argument : argument;
    return sum;
  } else {
    return this.a;
  }
};
