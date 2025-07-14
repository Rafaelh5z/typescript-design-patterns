import { TeamMember } from './TemaMember'

export abstract class AbstractIterator {
    abstract next(): TeamMember
    abstract hasNext(): boolean
}