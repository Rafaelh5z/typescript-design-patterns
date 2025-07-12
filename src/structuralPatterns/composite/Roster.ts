import { Member } from './Member'

export class Roster extends Member {

    members: Member[] = []
    name: string

    constructor(name: string) {
        
        super()
        this.name = name
    }

    printMemberInfo(): void {

        console.log('Here\'s the roster for team: ' + this.name)
        for (let i = 0; i < this.members.length; i++) {
            this.members[i].printMemberInfo()
        }
    }

    add(m: Member): void {
        
        this.members.push(m)
    }
}