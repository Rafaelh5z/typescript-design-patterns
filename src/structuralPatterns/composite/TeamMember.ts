import { Member } from './Member'

export class TeamMember extends Member {

    name: string
    teamNumber: number
    position: string

    constructor(name: string, teamNumber: number, position: string) {
        super()
        this.name = name
        this.teamNumber = teamNumber
        this.position = position
    }

    printMemberInfo(): void {
        console.log('Name: %s Team Number: %d Position: %s\n',
            this.name, this.teamNumber, this.position)
    }
}