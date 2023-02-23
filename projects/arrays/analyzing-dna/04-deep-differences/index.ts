// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function deepDifferences(a: string[], b: string[]) {
  if (a.length !== b.length)
    return undefined

  const ret: ((string | undefined)[] | undefined)[] = []
  for (let i = 0; i < a.length; i += 1) {
    if (a[i].length !== b[i].length) {
      ret.push(undefined)
      continue
    }

    const subResult: (string | undefined)[] = []
    for (let j = 0; j < a[i].length; j += 1)
      subResult.push(a[i][j] === b[i][j] ? a[i][j] : undefined)

    ret.push(subResult)
  }

  return ret
}
