// Write your unique function here! ✨
// You'll need to export it so the tests can run it.
export function unique<T>(...items: T[][]) {
  const retSet: Set<T> = new Set()

  items.forEach((item) => {
    item.forEach((character) => {
      retSet.add(character)
    })
  })

  return Array.from(retSet)
}
