import type { MammalsSettings } from './fauna/mammals.solution'
import { getMammals } from './fauna/mammals.solution'
import type { ReptilesSettings } from './fauna/reptiles.solution'
import { getReptiles } from './fauna/reptiles.solution'

export interface FaunaSettings {
  mammals?: MammalsSettings
  reptiles?: ReptilesSettings
}

export function getFauna(settings?: FaunaSettings) {
  return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)]
}
