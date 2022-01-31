const walk = root => root ? [...walk(root.left), root.val, ...walk(root.right)] : [];

// merge sorted arrays in place
const merge = (a, b) => {
  let m = a.length, n = b.length, i = m + n;
  while (n && i--> 0)
    a[i] = b[n - 1] <= a[m - 1] ? a[--m] : b[--n];
  return a;
};

const getAllElements = (root1, root2) => merge(...[root1, root2].map(walk));

// It is a simpler version
const getAllElementsAlt = (root1, root2) => [...walk(root1), ...walk(root2)].sort((a, b) => a - b);
