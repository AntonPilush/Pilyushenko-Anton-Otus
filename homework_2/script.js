const fn1 = () => {
  console.log("fn1");
  return Promise.resolve(2);
};
const fn2 = () =>
  new Promise((resolve) => {
    console.log("fn2");
    setTimeout(() => resolve(3), 1000);
  });

async function promiseReduce(asyncFunctions, reduce, initialValue) {
  let memo = initialValue;

  let result = await asyncFunctions.reduce(async (acc, curr) => {
    memo = await curr().then((value) => {
      return reduce(memo, value);
    });
    return memo;
  }, initialValue);

  return result;
}

promiseReduce(
  [fn1, fn2],
  function (memo, value) {
    console.log("reduce");
    return memo * value;
  },
  1
).then((e) => {
  console.log(e);
});
