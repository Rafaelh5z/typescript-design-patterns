import { AbstractIterator } from './AbstractIterator'
import { TeamMember } from './TemaMember'

export class TeamMemberIterator extends AbstractIterator {

    teamMembers: TeamMember[]
    index: number = 0

    constructor(teamMembers: TeamMember[]) {
        super()
        this.teamMembers = teamMembers
    }

    hasNext(): boolean {
        return this.index < this.teamMembers.length
    }

    next(): TeamMember {
        return this.teamMembers[this.index++]
    }
}