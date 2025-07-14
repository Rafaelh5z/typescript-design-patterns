import { Database } from '../../src/creationalPatterns/singleton/Database'

describe('Singleton Pattern - Database', () => {
    beforeEach(() => {
        // Reset the singleton instance before each test
        // @ts-expect-error - accessing private property for testing
        Database.instance = undefined
    })

    test('should create only one instance', () => {
        const db1 = Database.getInstance()
        const db2 = Database.getInstance()
        
        expect(db1).toBe(db2)
        expect(db1).toBeInstanceOf(Database)
    })

    test('should return same instance on multiple calls', () => {
        const instances: Database[] = []
        
        for (let i = 0; i < 5; i++) {
            instances.push(Database.getInstance())
        }
        
        // All instances should be the same reference
        const firstInstance = instances[0]
        instances.forEach(instance => {
            expect(instance).toBe(firstInstance)
        })
    })

    test('should be a single instance across different modules', () => {
        const db1 = Database.getInstance()
        
        // Simulate getting instance from another module
        const getInstanceFromAnotherModule = () => Database.getInstance()
        const db2 = getInstanceFromAnotherModule()
        
        expect(db1).toBe(db2)
    })
})
