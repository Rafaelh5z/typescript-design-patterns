import { Car } from '../../src/behavioralPatterns/templateMethod/Car'
import { Sedan } from '../../src/behavioralPatterns/templateMethod/Sedan'
import { SUV } from '../../src/behavioralPatterns/templateMethod/SUV'

describe('Template Method Pattern', () => {
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('AbstractClass (Car)', () => {
        test('should have template method run', () => {
            const sedan = new Sedan()
            
            expect(typeof sedan.run).toBe('function')
            expect(sedan.run).toBe(Car.prototype.run)
        })

        test('should have concrete methods', () => {
            const sedan = new Sedan()
            
            sedan.startEngine()
            expect(consoleSpy).toHaveBeenCalledWith('Starting Engine')
            
            consoleSpy.mockClear()
            
            sedan.stopEngine()
            expect(consoleSpy).toHaveBeenCalledWith('Stoping Engine')
        })

        test('should not allow direct instantiation of abstract class', () => {
            // Car is abstract, so we test through concrete implementations
            expect(() => new Sedan()).not.toThrow()
            expect(() => new SUV()).not.toThrow()
        })
    })

    describe('ConcreteClass (Sedan)', () => {
        test('should create sedan instance', () => {
            const sedan = new Sedan()
            
            expect(sedan).toBeInstanceOf(Sedan)
            expect(sedan).toBeInstanceOf(Car)
        })

        test('should implement drive method', () => {
            const sedan = new Sedan()
            
            sedan.drive()
            
            expect(consoleSpy).toHaveBeenCalledWith('Driving a sedan')
        })

        test('should execute template method with sedan-specific behavior', () => {
            const sedan = new Sedan()
            
            sedan.run()
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Starting Engine')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Driving a sedan')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Stoping Engine')
        })
    })

    describe('ConcreteClass (SUV)', () => {
        test('should create SUV instance', () => {
            const suv = new SUV()
            
            expect(suv).toBeInstanceOf(SUV)
            expect(suv).toBeInstanceOf(Car)
        })

        test('should implement drive method', () => {
            const suv = new SUV()
            
            suv.drive()
            
            expect(consoleSpy).toHaveBeenCalledWith('Driving an SUV')
        })

        test('should execute template method with SUV-specific behavior', () => {
            const suv = new SUV()
            
            suv.run()
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Starting Engine')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Driving an SUV')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Stoping Engine')
        })
    })

    describe('Template Method Pattern Benefits', () => {
        test('should demonstrate same algorithm with different implementations', () => {
            const cars: Car[] = [new Sedan(), new SUV()]
            
            cars.forEach(car => car.run())
            
            expect(consoleSpy).toHaveBeenCalledTimes(6)
            // First car (Sedan)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Starting Engine')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Driving a sedan')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Stoping Engine')
            // Second car (SUV)
            expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Starting Engine')
            expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Driving an SUV')
            expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Stoping Engine')
        })

        test('should maintain algorithm structure across implementations', () => {
            const sedan = new Sedan()
            const suv = new SUV()
            
            // Both follow the same algorithm structure: start -> drive -> stop
            sedan.run()
            suv.run()
            
            // Verify the order is maintained for both
            const sedanCalls = consoleSpy.mock.calls.slice(0, 3)
            const suvCalls = consoleSpy.mock.calls.slice(3, 6)
            
            expect(sedanCalls[0][0]).toBe('Starting Engine')
            expect(sedanCalls[2][0]).toBe('Stoping Engine')
            
            expect(suvCalls[0][0]).toBe('Starting Engine')
            expect(suvCalls[2][0]).toBe('Stoping Engine')
        })

        test('should allow code reuse through inheritance', () => {
            const sedan = new Sedan()
            const suv = new SUV()
            
            // Both use the same concrete methods from parent
            sedan.startEngine()
            suv.startEngine()
            
            expect(consoleSpy).toHaveBeenCalledTimes(2)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Starting Engine')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Starting Engine')
            
            consoleSpy.mockClear()
            
            sedan.stopEngine()
            suv.stopEngine()
            
            expect(consoleSpy).toHaveBeenCalledTimes(2)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Stoping Engine')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Stoping Engine')
        })

        test('should enforce algorithm structure while allowing customization', () => {
            // Template method controls the algorithm flow
            // Subclasses can only customize specific steps
            
            const sedan = new Sedan()
            
            // Cannot change the algorithm structure (would need to override run() entirely)
            // But can customize the drive() behavior
            sedan.run()
            
            // The structure is always: start -> drive -> stop
            expect(consoleSpy.mock.calls[0][0]).toBe('Starting Engine')
            expect(consoleSpy.mock.calls[1][0]).toBe('Driving a sedan')
            expect(consoleSpy.mock.calls[2][0]).toBe('Stoping Engine')
        })

        test('should demonstrate polymorphism with template method', () => {
            const runCar = (car: Car): string[] => {
                const calls: string[] = []
                const originalLog = console.log
                console.log = (message: string) => calls.push(message)
                
                car.run()
                
                console.log = originalLog
                return calls
            }
            
            const sedanOutput = runCar(new Sedan())
            const suvOutput = runCar(new SUV())
            
            // Same algorithm structure, different drive behavior
            expect(sedanOutput).toEqual([
                'Starting Engine',
                'Driving a sedan',
                'Stoping Engine',
            ])
            
            expect(suvOutput).toEqual([
                'Starting Engine',
                'Driving an SUV',
                'Stoping Engine',
            ])
        })

        test('should handle multiple runs correctly', () => {
            const sedan = new Sedan()
            
            sedan.run()
            sedan.run()
            
            expect(consoleSpy).toHaveBeenCalledTimes(6)
            
            // First run
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Starting Engine')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Driving a sedan')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Stoping Engine')
            
            // Second run
            expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Starting Engine')
            expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Driving a sedan')
            expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Stoping Engine')
        })

        test('should allow direct method calls for specific steps', () => {
            const sedan = new Sedan()
            
            // Can call specific steps independently
            sedan.startEngine()
            sedan.drive()
            sedan.stopEngine()
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Starting Engine')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Driving a sedan')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Stoping Engine')
        })
    })
})
