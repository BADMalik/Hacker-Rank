function zap(num, callback) {
  console.log("zap");
  let fooResult, barResult;

  // Trigger foo operation
  foo(num, function (err, result) {
    console.log("foo 1");
    if (err) {
      callback(err);
    } else {
      fooResult = result;
      if (barResult !== undefined) {
        callback(null, fooResult * barResult);
      }
    }
  });

  // Trigger bar operation
  bar(7, num, function (err, result) {
    console.log("bar 1");
    if (err) {
      callback(err);
    } else {
      barResult = result;
      if (fooResult !== undefined) {
        callback(null, fooResult * barResult);
      }
    }
  });
}
function foo(num, callback) {
  console.log("foo");
  setTimeout(() => {
    let result = num * 2; // Dummy operation
    callback(null, result);
  }, 1000);
}

function bar(a, b, callback) {
  console.log("bar");
  setTimeout(() => {
    let result = a + b; // Dummy operation
    callback(null, result);
  }, 1000);
}
zap(5, function (err, result) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Result:", result);
  }
});
