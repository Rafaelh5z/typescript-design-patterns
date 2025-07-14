import { TeamMember } from '../../src/behavioralPatterns/iterator/TemaMember'
import { Roster } from '../../src/behavioralPatterns/iterator/Roster'
import { TeamMemberIterator } from '../../src/behavioralPatterns/iterator/TeamMemberIterator'
import { AbstractIterator } from '../../src/behavioralPatterns/iterator/AbstractIterator'
import { Aggregator } from '../../src/behavioralPatterns/iterator/Aggregator'

describe('Iterator Pattern', () => {
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('TeamMember (Element)', () => {
        test('should create team member', () => {
            const member = new TeamMember('John Doe', 10, 'Forward')
            
            expect(member).toBeInstanceOf(TeamMember)
            expect(member.name).toBe('John Doe')
            expect(member.teamNumber).toBe(10)
            expect(member.position).toBe('Forward')
        })

        test('should print member info', () => {
            const member = new TeamMember('Jane Smith', 5, 'Goalkeeper')
            
            member.printMemberInfo()
            
            expect(consoleSpy).toHaveBeenCalledWith(
                'Name: %s Team Number: %d Position: %s\n',
                'Jane Smith', 5, 'Goalkeeper',
            )
        })
    })

    describe('TeamMemberIterator (ConcreteIterator)', () => {
        test('should create iterator with team members', () => {
            const members = [
                new TeamMember('Player 1', 1, 'Forward'),
                new TeamMember('Player 2', 2, 'Defender'),
            ]
            const iterator = new TeamMemberIterator(members)
            
            expect(iterator).toBeInstanceOf(TeamMemberIterator)
            expect(iterator).toBeInstanceOf(AbstractIterator)
            expect(iterator.teamMembers).toBe(members)
            expect(iterator.index).toBe(0)
        })

        test('should check if has next element', () => {
            const members = [
                new TeamMember('Player 1', 1, 'Forward'),
                new TeamMember('Player 2', 2, 'Defender'),
            ]
            const iterator = new TeamMemberIterator(members)
            
            expect(iterator.hasNext()).toBe(true)
            
            iterator.next()
            expect(iterator.hasNext()).toBe(true)
            
            iterator.next()
            expect(iterator.hasNext()).toBe(false)
        })

        test('should iterate through team members', () => {
            const member1 = new TeamMember('Alice', 7, 'Midfielder')
            const member2 = new TeamMember('Bob', 3, 'Defender')
            const member3 = new TeamMember('Charlie', 9, 'Striker')
            const members = [member1, member2, member3]
            const iterator = new TeamMemberIterator(members)
            
            expect(iterator.next()).toBe(member1)
            expect(iterator.next()).toBe(member2)
            expect(iterator.next()).toBe(member3)
        })

        test('should handle empty collection', () => {
            const iterator = new TeamMemberIterator([])
            
            expect(iterator.hasNext()).toBe(false)
        })

        test('should increment index correctly', () => {
            const members = [
                new TeamMember('Player 1', 1, 'Position 1'),
                new TeamMember('Player 2', 2, 'Position 2'),
            ]
            const iterator = new TeamMemberIterator(members)
            
            expect(iterator.index).toBe(0)
            iterator.next()
            expect(iterator.index).toBe(1)
            iterator.next()
            expect(iterator.index).toBe(2)
        })
    })

    describe('Roster (ConcreteAggregate)', () => {
        test('should create roster with team members', () => {
            const members = [
                new TeamMember('Player 1', 1, 'Forward'),
                new TeamMember('Player 2', 2, 'Defender'),
            ]
            const roster = new Roster(members)
            
            expect(roster).toBeInstanceOf(Roster)
            expect(roster).toBeInstanceOf(Aggregator)
            expect(roster.teamMembers).toBe(members)
        })

        test('should return iterator for team members', () => {
            const members = [
                new TeamMember('Player 1', 1, 'Forward'),
            ]
            const roster = new Roster(members)
            
            const iterator = roster.getIterator()
            
            expect(iterator).toBeInstanceOf(TeamMemberIterator)
            expect(iterator.teamMembers).toBe(members)
        })

        test('should create iterator for empty roster', () => {
            const roster = new Roster([])
            
            const iterator = roster.getIterator()
            
            expect(iterator).toBeInstanceOf(TeamMemberIterator)
            expect(iterator.hasNext()).toBe(false)
        })
    })

    describe('Iterator Pattern Integration', () => {
        test('should iterate through roster using iterator', () => {
            const members = [
                new TeamMember('Goalkeeper', 1, 'GK'),
                new TeamMember('Defender', 2, 'DF'),
                new TeamMember('Midfielder', 3, 'MF'),
                new TeamMember('Forward', 4, 'FW'),
            ]
            const roster = new Roster(members)
            const iterator = roster.getIterator()
            
            const iteratedMembers: TeamMember[] = []
            while (iterator.hasNext()) {
                iteratedMembers.push(iterator.next())
            }
            
            expect(iteratedMembers).toEqual(members)
            expect(iteratedMembers).toHaveLength(4)
        })

        test('should demonstrate external iteration', () => {
            const members = [
                new TeamMember('Captain', 10, 'Captain'),
                new TeamMember('Vice Captain', 11, 'Vice Captain'),
            ]
            const roster = new Roster(members)
            const iterator = roster.getIterator()
            
            // Client controls iteration
            const results: string[] = []
            while (iterator.hasNext()) {
                const member = iterator.next()
                results.push(`${member.name} (#${member.teamNumber})`)
            }
            
            expect(results).toEqual([
                'Captain (#10)',
                'Vice Captain (#11)',
            ])
        })

        test('should support multiple concurrent iterators', () => {
            const members = [
                new TeamMember('Player A', 1, 'Position A'),
                new TeamMember('Player B', 2, 'Position B'),
                new TeamMember('Player C', 3, 'Position C'),
            ]
            const roster = new Roster(members)
            
            const iterator1 = roster.getIterator()
            const iterator2 = roster.getIterator()
            
            // Each iterator maintains its own state
            expect(iterator1.next().name).toBe('Player A')
            expect(iterator2.next().name).toBe('Player A')
            
            expect(iterator1.next().name).toBe('Player B')
            expect(iterator2.next().name).toBe('Player B')
            
            // Iterators are independent
            expect(iterator1.hasNext()).toBe(true)
            expect(iterator2.hasNext()).toBe(true)
        })

        test('should print all members using iterator', () => {
            const members = [
                new TeamMember('Striker', 9, 'ST'),
                new TeamMember('Winger', 7, 'LW'),
            ]
            const roster = new Roster(members)
            const iterator = roster.getIterator()
            
            while (iterator.hasNext()) {
                const member = iterator.next()
                member.printMemberInfo()
            }
            
            expect(consoleSpy).toHaveBeenCalledTimes(2)
            expect(consoleSpy).toHaveBeenNthCalledWith(
                1,
                'Name: %s Team Number: %d Position: %s\n',
                'Striker', 9, 'ST',
            )
            expect(consoleSpy).toHaveBeenNthCalledWith(
                2,
                'Name: %s Team Number: %d Position: %s\n',
                'Winger', 7, 'LW',
            )
        })
    })

    describe('Iterator Pattern Benefits', () => {
        test('should hide internal structure of collection', () => {
            const members = [
                new TeamMember('Hidden Player 1', 1, 'Position 1'),
                new TeamMember('Hidden Player 2', 2, 'Position 2'),
            ]
            const roster = new Roster(members)
            
            // Client doesn't need to know about internal array structure
            const iterator = roster.getIterator()
            const extractedNames: string[] = []
            
            while (iterator.hasNext()) {
                extractedNames.push(iterator.next().name)
            }
            
            expect(extractedNames).toEqual(['Hidden Player 1', 'Hidden Player 2'])
        })

        test('should provide uniform interface for traversal', () => {
            const smallTeam = new Roster([
                new TeamMember('Small Team Player', 1, 'Position'),
            ])
            
            const largeTeam = new Roster([
                new TeamMember('Large Team Player 1', 1, 'Position 1'),
                new TeamMember('Large Team Player 2', 2, 'Position 2'),
                new TeamMember('Large Team Player 3', 3, 'Position 3'),
                new TeamMember('Large Team Player 4', 4, 'Position 4'),
            ])
            
            // Same iteration interface regardless of collection size
            const processRoster = (roster: Roster): number => {
                const iterator = roster.getIterator()
                let count = 0
                while (iterator.hasNext()) {
                    iterator.next()
                    count++
                }
                return count
            }
            
            expect(processRoster(smallTeam)).toBe(1)
            expect(processRoster(largeTeam)).toBe(4)
        })
    })
})
