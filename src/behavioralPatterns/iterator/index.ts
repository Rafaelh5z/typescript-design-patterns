import { Roster } from './Roster'
import { TeamMember } from './TemaMember'

function iteratorClient() {
    
    const member1 = new TeamMember('Johnny Rocket', 12, 'Forward')
    const member2 = new TeamMember('Tim Hoops', 24, 'Point Guard')
    const member3 = new TeamMember('Billy Banks', 29, 'Shooting Guard')

    const roster = new Roster([member1, member2, member3])
    const iterator = roster.getIterator()

    while (iterator.hasNext()) {
        iterator.next().printMemberInfo()
    }

}

iteratorClient()