function arrayDiff(a, b) {
  if (b.length === 0) return a
  return a.filter(x => !b.includes(x))
}