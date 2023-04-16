var fn1 = () => {
  console.log("fn1");
  return Promise.resolve(1);
};
var fn2 = () =>
  new Promise((resolve) => {
    console.log("fn2");
    setTimeout(() => resolve(2), 1000);
  });

async function promiseReduce(asyncFunctions, reduce, initialValue) {
  let memo = initialValue;

  let newPromise;

  for (let i = 0; i < 2; i++) {
    newPromise = await asyncFunctions[i]().then((value) => {
      memo = reduce(memo, value);
    });
  }

  return memo;
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
