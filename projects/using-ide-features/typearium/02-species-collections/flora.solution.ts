import type { FlowersSettings } from './flora/flowers.solution'
import { getFlowers } from './flora/flowers.solution'
import type { TreesSettings } from './flora/trees.solution'
import { getTrees } from './flora/trees.solution'

export interface FloraSettings {
  flowers?: FlowersSettings
  trees?: TreesSettings
}

export function getFlora(settings?: FloraSettings) {
  return [getFlowers(settings?.flowers), getTrees(settings?.trees)]
}
