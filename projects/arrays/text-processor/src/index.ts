// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.
export interface Options {
  align?: 'left' | 'middle' | 'right'
  width: number
}

export function alignTexts(
  texts: string[],
  options: Options,
) {
  const results: string[][] = []

  for (const text of texts) {
    const result = []
    const textList = text.split(' ')
    for (const item of textList) {
      const itemResult = ['left', undefined].includes(options.align)
        ? item.padEnd(options.width, ' ')
        : options.align === 'right'
          ? item.padStart(options.width)
          : item

      result.push(itemResult)
    }

    results.push(result)
  }

  return results
}
