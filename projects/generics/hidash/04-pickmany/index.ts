// Write your pickMany function here! ✨
// You'll need to export it so the tests can run it.
export function pickMany<T, K extends keyof T>(container: T, keys: K[]) {
  return keys.map(key => container[key])
}
