var assert = function assert(message, expr) { // named function expression
  if (!expr) {
    throw new Error(message);
  }
  assert.count++;
  return true;
};
assert.count = 0;