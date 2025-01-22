function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object' || !('length' in x)) {
    return 0; // Handle null, undefined, and non-objects gracefully
  }
  return x.length; 
}