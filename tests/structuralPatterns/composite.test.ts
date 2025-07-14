import { Member } from '../../src/structuralPatterns/composite/Member'
import { TeamMember } from '../../src/structuralPatterns/composite/TeamMember'
import { Roster } from '../../src/structuralPatterns/composite/Roster'

describe('Composite Pattern', () => {
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('Leaf (TeamMember)', () => {
        test('should create team member', () => {
            const member = new TeamMember('John Doe', 10, 'Forward')
            
            expect(member).toBeInstanceOf(TeamMember)
            expect(member).toBeInstanceOf(Member)
            expect(member.name).toBe('John Doe')
            expect(member.teamNumber).toBe(10)
            expect(member.position).toBe('Forward')
        })

        test('should print team member info', () => {
            const member = new TeamMember('Jane Smith', 5, 'Goalkeeper')
            
            member.printMemberInfo()
            
            expect(consoleSpy).toHaveBeenCalledWith(
                'Name: %s Team Number: %d Position: %s\n',
                'Jane Smith', 5, 'Goalkeeper',
            )
        })

        test('should handle different team members', () => {
            const members = [
                new TeamMember('Alice Johnson', 7, 'Midfielder'),
                new TeamMember('Bob Wilson', 3, 'Defender'),
            ]
            
            members.forEach(member => member.printMemberInfo())
            
            expect(consoleSpy).toHaveBeenCalledTimes(2)
            expect(consoleSpy).toHaveBeenNthCalledWith(
                1,
                'Name: %s Team Number: %d Position: %s\n',
                'Alice Johnson', 7, 'Midfielder',
            )
            expect(consoleSpy).toHaveBeenNthCalledWith(
                2,
                'Name: %s Team Number: %d Position: %s\n',
                'Bob Wilson', 3, 'Defender',
            )
        })
    })

    describe('Composite (Roster)', () => {
        test('should create roster', () => {
            const roster = new Roster('Football Team A')
            
            expect(roster).toBeInstanceOf(Roster)
            expect(roster).toBeInstanceOf(Member)
            expect(roster.name).toBe('Football Team A')
            expect(roster.members).toEqual([])
        })

        test('should add team members to roster', () => {
            const roster = new Roster('Basketball Team')
            const member1 = new TeamMember('Michael Jordan', 23, 'Shooting Guard')
            const member2 = new TeamMember('LeBron James', 6, 'Small Forward')
            
            roster.add(member1)
            roster.add(member2)
            
            expect(roster.members).toHaveLength(2)
            expect(roster.members).toContain(member1)
            expect(roster.members).toContain(member2)
        })

        test('should print roster with team members', () => {
            const roster = new Roster('Soccer Team')
            const member1 = new TeamMember('Cristiano Ronaldo', 7, 'Forward')
            const member2 = new TeamMember('Lionel Messi', 10, 'Forward')
            
            roster.add(member1)
            roster.add(member2)
            roster.printMemberInfo()
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Here\'s the roster for team: Soccer Team')
            expect(consoleSpy).toHaveBeenNthCalledWith(
                2,
                'Name: %s Team Number: %d Position: %s\n',
                'Cristiano Ronaldo', 7, 'Forward',
            )
            expect(consoleSpy).toHaveBeenNthCalledWith(
                3,
                'Name: %s Team Number: %d Position: %s\n',
                'Lionel Messi', 10, 'Forward',
            )
        })

        test('should handle empty roster', () => {
            const roster = new Roster('Empty Team')
            
            roster.printMemberInfo()
            
            expect(consoleSpy).toHaveBeenCalledWith('Here\'s the roster for team: Empty Team')
            expect(consoleSpy).toHaveBeenCalledTimes(1)
        })
    })

    describe('Composite Structure', () => {
        test('should add rosters to other rosters (nested composite)', () => {
            const mainRoster = new Roster('All Teams')
            const teamA = new Roster('Team A')
            const teamB = new Roster('Team B')
            
            const playerA1 = new TeamMember('Player A1', 1, 'Position A1')
            const playerA2 = new TeamMember('Player A2', 2, 'Position A2')
            const playerB1 = new TeamMember('Player B1', 1, 'Position B1')
            
            teamA.add(playerA1)
            teamA.add(playerA2)
            teamB.add(playerB1)
            
            mainRoster.add(teamA)
            mainRoster.add(teamB)
            
            expect(mainRoster.members).toHaveLength(2)
            expect(mainRoster.members).toContain(teamA)
            expect(mainRoster.members).toContain(teamB)
        })

        test('should print nested roster structure', () => {
            const league = new Roster('Football League')
            const teamA = new Roster('Team A')
            const teamB = new Roster('Team B')
            
            teamA.add(new TeamMember('Player 1', 1, 'Forward'))
            teamA.add(new TeamMember('Player 2', 2, 'Defender'))
            teamB.add(new TeamMember('Player 3', 3, 'Midfielder'))
            
            league.add(teamA)
            league.add(teamB)
            
            league.printMemberInfo()
            
            expect(consoleSpy).toHaveBeenCalledTimes(6)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Here\'s the roster for team: Football League')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Here\'s the roster for team: Team A')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Name: %s Team Number: %d Position: %s\n', 'Player 1', 1, 'Forward')
            expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Name: %s Team Number: %d Position: %s\n', 'Player 2', 2, 'Defender')
            expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Here\'s the roster for team: Team B')
            expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Name: %s Team Number: %d Position: %s\n', 'Player 3', 3, 'Midfielder')
        })

        test('should treat individual members and rosters uniformly', () => {
            const league = new Roster('Mixed League')
            const team = new Roster('Regular Team')
            const individualPlayer = new TeamMember('Free Agent', 99, 'Utility')
            
            team.add(new TeamMember('Team Player', 1, 'Captain'))
            
            // Both team (composite) and individual player (leaf) can be added to league
            league.add(team)
            league.add(individualPlayer)
            
            league.printMemberInfo()
            
            expect(consoleSpy).toHaveBeenCalledTimes(4)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Here\'s the roster for team: Mixed League')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Here\'s the roster for team: Regular Team')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Name: %s Team Number: %d Position: %s\n', 'Team Player', 1, 'Captain')
            expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Name: %s Team Number: %d Position: %s\n', 'Free Agent', 99, 'Utility')
        })
    })

    describe('Composite Pattern Benefits', () => {
        test('should demonstrate uniform treatment of leaf and composite objects', () => {
            const members: Member[] = [
                new TeamMember('Individual Player', 42, 'Striker'),
                new Roster('Sub Team'),
            ]
            
            // Both individual players and rosters implement Member interface
            members.forEach(member => {
                expect(member).toBeInstanceOf(Member)
                expect(typeof member.printMemberInfo).toBe('function')
                member.printMemberInfo()
            })
            
            expect(consoleSpy).toHaveBeenCalledTimes(2)
        })

        test('should handle complex hierarchical structures', () => {
            const tournament = new Roster('Championship Tournament')
            const division1 = new Roster('Division 1')
            const division2 = new Roster('Division 2')
            
            const teamA = new Roster('Team Alpha')
            const teamB = new Roster('Team Beta')
            const teamC = new Roster('Team Charlie')
            
            // Add players to teams
            teamA.add(new TeamMember('Alpha Player 1', 1, 'Forward'))
            teamB.add(new TeamMember('Beta Player 1', 1, 'Defender'))
            teamC.add(new TeamMember('Charlie Player 1', 1, 'Goalkeeper'))
            
            // Add teams to divisions
            division1.add(teamA)
            division1.add(teamB)
            division2.add(teamC)
            
            // Add divisions to tournament
            tournament.add(division1)
            tournament.add(division2)
            
            // Should print entire hierarchical structure
            tournament.printMemberInfo()
            
            expect(consoleSpy).toHaveBeenCalledTimes(9)
            expect(consoleSpy).toHaveBeenCalledWith('Here\'s the roster for team: Championship Tournament')
            expect(consoleSpy).toHaveBeenCalledWith('Here\'s the roster for team: Division 1')
            expect(consoleSpy).toHaveBeenCalledWith('Here\'s the roster for team: Team Alpha')
            expect(consoleSpy).toHaveBeenCalledWith('Here\'s the roster for team: Team Beta')
            expect(consoleSpy).toHaveBeenCalledWith('Here\'s the roster for team: Division 2')
            expect(consoleSpy).toHaveBeenCalledWith('Here\'s the roster for team: Team Charlie')
        })
    })
})
