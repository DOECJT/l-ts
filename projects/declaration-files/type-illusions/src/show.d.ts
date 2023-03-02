// Declare your types here! ✨
export interface Act {
  performer: string
  name: string
  sections: Section[]
}

export function getAudienceMemberFor(options: {
  duration: number
  title: string
}): Promise<AudienceMember>

export function isTrick(section: Section): section is Trick {}

export function isVolunteerIllusion(illusion: Illusion): illusion is VolunteerIllusion {}

export interface Trick {
  gimmick: string
}

export interface Illusion {
  introduction(): string
  flair(): string
  payoff(): number
}

export interface VolunteerIllusion extends Illusion {
  title: string
  duration: number
}

export type Section = Trick | Illusion

export interface AudienceMember {
  name: string
}
