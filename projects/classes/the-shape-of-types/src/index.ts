// Write your classes here! ✨
// You'll need to export them so the tests can run them.
export interface ConsumedHorror {
  evil: boolean
  name: string
  power: number
}
export abstract class Horror {
  protected abstract readonly name: string
  #consumedHorrors: ConsumedHorror[] = []

  #consume(opponent: Horror) {
    this.#consumedHorrors.push({
      evil: opponent.isEvil(),
      name: opponent.name,
      power: opponent.getPower(),
    })
  }

  public doBattle(opponent: Horror) {
    if (this.getPower() >= opponent.getPower())
      this.#consume(opponent)
  }

  public getPower(): number {
    return this.#consumedHorrors.reduce(
      (accu, curr) => accu += this.getPowerFrom(curr),
      this.#consumedHorrors.length,
    )
  }

  protected abstract getPowerFrom(consumedHorror: ConsumedHorror): number
  protected abstract isEvil(): boolean
}

export class Demon extends Horror {
  readonly name = 'Demon'

  getPowerFrom(consumedHorror: ConsumedHorror): number {
    return consumedHorror.evil
      ? consumedHorror.power / 2
      : consumedHorror.power * 2
  }

  isEvil(): true {
    return true
  }
}

export class Sorcerer extends Horror {
  readonly name: string
  #evil: boolean

  constructor(name: string, evil: boolean) {
    super()
    this.name = name
    this.#evil = evil
  }

  getPowerFrom(consumedHorror: ConsumedHorror): number {
    return consumedHorror.evil === this.#evil
      ? consumedHorror.power * 2
      : consumedHorror.power
  }

  isEvil(): boolean {
    return this.#evil
  }
}
