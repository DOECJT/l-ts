// Refactor here! ✨

import type { FaunaSettings } from './fauna.solution'
import { getFauna } from './fauna.solution'
import type { FloraSettings } from './flora.solution'
import { getFlora } from './flora.solution'
import { onlyTruthy } from './utils/onlyTruthy.solution'

export interface EverythingSettings {
  fauna?: FaunaSettings
  flora?: FloraSettings
}

export function getEverything(settings?: EverythingSettings) {
  return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora))
}
