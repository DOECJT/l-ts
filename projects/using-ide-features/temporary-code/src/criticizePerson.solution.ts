import type { Person } from './Person.solution'

export function criticizePerson(person: Person) {
  if (person.quote.includes('#'))
    console.log(`\t${person.name} should stop going on Twitter so much...`)
}
