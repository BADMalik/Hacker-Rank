divideCallback(12, 3, (err, result) => {
  if (err) {
    assert.fail(err);
  } else {
    assert.equal(result, 4);
  }
});

divideCallback(x, y, callback);
