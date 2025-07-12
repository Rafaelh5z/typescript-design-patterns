import { Roster } from './Roster'
import { TeamMember } from './TeamMember'

function compositeClient() {

    // Initialize our team members
    const member1 = new TeamMember('Johnny Rocket', 12, 'Forward')
    const member2 = new TeamMember('Tim Hoops', 24, 'Point Guard')
    const member3 = new TeamMember('Billy Banks', 29, 'Shooting Guard')

    // Initialize our roster 
    const roster = new Roster('Bobcats')

    // Add team members to our roster 
    roster.add(member1)
    roster.add(member2)
    roster.add(member3)

    // print out the member info
    roster.printMemberInfo()
}

compositeClient()