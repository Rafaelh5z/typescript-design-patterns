import { Train } from '../../src/behavioralPatterns/command/Train'
import { AddPassengerCommand } from '../../src/behavioralPatterns/command/AddPassengerCommand'
import { MoveTrainCommand } from '../../src/behavioralPatterns/command/MoveTrainCommand'
import { Invoker } from '../../src/behavioralPatterns/command/Invoker'

describe('Command Pattern', () => {
    let train: Train
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        train = new Train('Express Train', 'Station A', [])
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('Train Receiver', () => {
        test('should create train with initial state', () => {
            expect(train).toBeInstanceOf(Train)
            expect(train.passengers).toEqual([])
            expect(train.location).toBe('Station A')
            expect(train.name).toBe('Express Train')
        })

        test('should have modifiable properties', () => {
            train.passengers.push('John')
            train.location = 'Station B'
            
            expect(train.passengers).toContain('John')
            expect(train.location).toBe('Station B')
        })
    })

    describe('Commands', () => {
        test('should create add passenger command', () => {
            const command = new AddPassengerCommand('Alice')
            
            expect(command).toBeInstanceOf(AddPassengerCommand)
            expect(command.passenger).toBe('Alice')
        })

        test('should execute add passenger command', () => {
            const command = new AddPassengerCommand('Alice')
            
            command.execute(train)
            
            expect(train.passengers).toContain('Alice')
            expect(train.passengers).toHaveLength(1)
            expect(consoleSpy).toHaveBeenCalledWith('New passenger on board: Alice')
        })

        test('should add multiple passengers', () => {
            const command1 = new AddPassengerCommand('Alice')
            const command2 = new AddPassengerCommand('Bob')
            const command3 = new AddPassengerCommand('Charlie')
            
            command1.execute(train)
            command2.execute(train)
            command3.execute(train)
            
            expect(train.passengers).toEqual(['Alice', 'Bob', 'Charlie'])
            expect(train.passengers).toHaveLength(3)
        })

        test('should create move train command', () => {
            const command = new MoveTrainCommand('Station C')
            
            expect(command).toBeInstanceOf(MoveTrainCommand)
            expect(command.location).toBe('Station C')
        })

        test('should execute move train command', () => {
            const command = new MoveTrainCommand('Station C')
            
            command.execute(train)
            
            expect(train.location).toBe('Station C')
            expect(consoleSpy).toHaveBeenCalledWith('The train is locatied at: Station C')
        })
    })

    describe('Invoker', () => {
        let invoker: Invoker

        beforeEach(() => {
            invoker = new Invoker()
        })

        test('should create invoker', () => {
            expect(invoker).toBeInstanceOf(Invoker)
        })

        test('should execute single command through invoker', () => {
            const addCommand = new AddPassengerCommand('David')
            
            invoker.setCommand(addCommand)
            invoker.executeCommand(train)
            
            expect(train.passengers).toContain('David')
        })

        test('should execute multiple commands in sequence', () => {
            const addCommand1 = new AddPassengerCommand('Emma')
            const moveCommand = new MoveTrainCommand('Station B')
            const addCommand2 = new AddPassengerCommand('Frank')
            
            // Execute commands in sequence
            invoker.setCommand(addCommand1)
            invoker.executeCommand(train)
            
            invoker.setCommand(moveCommand)
            invoker.executeCommand(train)
            
            invoker.setCommand(addCommand2)
            invoker.executeCommand(train)
            
            expect(train.passengers).toEqual(['Emma', 'Frank'])
            expect(train.location).toBe('Station B')
        })

        test('should handle different command types', () => {
            const commands = [
                new AddPassengerCommand('Grace'),
                new MoveTrainCommand('Station D'),
                new AddPassengerCommand('Henry'),
                new MoveTrainCommand('Station E'),
            ]
            
            commands.forEach(command => {
                invoker.setCommand(command)
                invoker.executeCommand(train)
            })
            
            expect(train.passengers).toEqual(['Grace', 'Henry'])
            expect(train.location).toBe('Station E')
        })

        test('should demonstrate command pattern decoupling', () => {
            // Invoker doesn't need to know about Train or specific command implementations
            const command1 = new AddPassengerCommand('Isabella')
            const command2 = new MoveTrainCommand('Final Station')
            
            // The invoker treats all commands the same way
            const commands = [command1, command2]
            commands.forEach(command => {
                invoker.setCommand(command)
                invoker.executeCommand(train)
            })
            
            expect(train.passengers).toContain('Isabella')
            expect(train.location).toBe('Final Station')
        })
    })

    describe('Integration Tests', () => {
        test('should simulate complete train journey', () => {
            const invoker = new Invoker()
            
            // Journey: Add passengers, move to Station B, add more passengers, move to final destination
            const journey = [
                new AddPassengerCommand('Jack'),
                new AddPassengerCommand('Kate'),
                new MoveTrainCommand('Station B'),
                new AddPassengerCommand('Liam'),
                new MoveTrainCommand('Final Destination'),
            ]
            
            journey.forEach(command => {
                invoker.setCommand(command)
                invoker.executeCommand(train)
            })
            
            expect(train.passengers).toEqual(['Jack', 'Kate', 'Liam'])
            expect(train.location).toBe('Final Destination')
            expect(consoleSpy).toHaveBeenCalledTimes(5)
        })

        test('should handle empty passenger list initially', () => {
            const emptyTrain = new Train('Empty Train', 'Origin', [])
            const command = new AddPassengerCommand('First Passenger')
            
            command.execute(emptyTrain)
            
            expect(emptyTrain.passengers).toEqual(['First Passenger'])
        })

        test('should maintain train state across multiple operations', () => {
            const invoker = new Invoker()
            
            // Start with some passengers
            train.passengers.push('Existing Passenger')
            
            const commands = [
                new AddPassengerCommand('New Passenger'),
                new MoveTrainCommand('New Location'),
            ]
            
            commands.forEach(command => {
                invoker.setCommand(command)
                invoker.executeCommand(train)
            })
            
            expect(train.passengers).toEqual(['Existing Passenger', 'New Passenger'])
            expect(train.location).toBe('New Location')
        })
    })
})
