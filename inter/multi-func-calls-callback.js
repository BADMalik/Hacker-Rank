function zap(num, callback) {
  let fooResult, barResult;

  // Trigger foo operation
  foo(num, function (err, result) {
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
zap(5, function (err, result) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Result:", result);
  }
});
