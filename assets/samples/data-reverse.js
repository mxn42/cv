
const dataReverse = data => {
  let left, right, i, t;
  for (left = 0, right = data.length - 8; left < right; left += 8, right -= 8)
    for (i = 0; i < 8; ++i) {
      t = data[left + i];
      data[left + i] = data[right + i];
      data[right + i] = t;
    }
  return data;
};

// tests
const testcase = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
const control  = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
const result = dataReverse(testcase);
console.assert(result.length === control.length && result.every((x, i) => x === control[i]));
