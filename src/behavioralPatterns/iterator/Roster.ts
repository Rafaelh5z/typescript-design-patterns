import { Aggregator } from './Aggregator'
import { TeamMemberIterator } from './TeamMemberIterator'
import { TeamMember } from './TemaMember'

export class Roster extends Aggregator {
    teamMembers: TeamMember[]

    constructor(teamMembers: TeamMember[]) {
        super()
        this.teamMembers = teamMembers
    }

    getIterator(): TeamMemberIterator {
        return new TeamMemberIterator(this.teamMembers)
    }
}