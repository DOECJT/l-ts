export type DeepStringsMaybe =
	| string
	| boolean
	| undefined
	| DeepStringsMaybe[]

export function onlyTruthy(...items: DeepStringsMaybe[]): string[] {
  return items.flatMap((item) => {
    if (typeof item === 'string')
      return item

    if (Array.isArray(item))
      return item.flatMap(subItem => onlyTruthy(subItem))

    return []
  })
}
