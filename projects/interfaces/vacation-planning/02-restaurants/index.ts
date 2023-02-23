// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.
export interface Restaurant {
  city: string
  name: string
}

export type Restaurants = Restaurant[]

export interface RestaurantsDescription {
  [city: string]: string[]
}

export function groupRestaurants(restraurants: Restaurants): RestaurantsDescription {
  return restraurants.reduce((accu, curr) => {
    const { city, name } = curr

    accu[city]
      ? accu[city].push(name)
      : accu[city] = [name]

    return accu
  }, {} as RestaurantsDescription)
}
