// Write your zip function here! ✨
// You'll need to export it so the tests can run it.
export function zip<A, B>(a: A[], b: B[]) {
  const ret: (A | B)[] = []

  let i = 0
  while (i < a.length && i < b.length) {
    ret.push(a[i])
    ret.push(b[i])
    i += 1
  }

  let rest: A[] | B[] = []
  if (i < a.length)
    rest = a.slice(i)
  else if (i < b.length)
    rest = b.slice(i)

  return [...ret, ...rest]
}
