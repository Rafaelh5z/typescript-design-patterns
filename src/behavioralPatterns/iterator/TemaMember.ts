export class TeamMember {
    name: string
    teamNumber: number
    position: string

    constructor(name: string, teamNumber: number, position: string) {
        this.name = name
        this.teamNumber = teamNumber
        this.position = position
    }

    printMemberInfo(): void {
        console.log('Name: %s Team Number: %d Position: %s\n', this.name, this.teamNumber, this.position)
    }
}