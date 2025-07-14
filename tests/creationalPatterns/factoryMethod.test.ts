import { ConcreteFurnitureFactory } from '../../src/creationalPatterns/factoryMethod/ConcreteFurnitureFactory'
import { Chair } from '../../src/creationalPatterns/factoryMethod/Chair'
import { Table } from '../../src/creationalPatterns/factoryMethod/Table'

describe('Factory Method Pattern - Furniture Factory', () => {
    let factory: ConcreteFurnitureFactory

    beforeEach(() => {
        factory = new ConcreteFurnitureFactory()
    })

    test('should create a chair', () => {
        const furniture = factory.createFurniture('chair')
        
        expect(furniture).toBeInstanceOf(Chair)
    })

    test('should create a table', () => {
        const furniture = factory.createFurniture('table')
        
        expect(furniture).toBeInstanceOf(Table)
    })

    test('should throw error for unsupported furniture type', () => {
        expect(() => factory.createFurniture('sofa')).toThrow('Furniture type not supported.')
        expect(() => factory.createFurniture('desk')).toThrow('Furniture type not supported.')
        expect(() => factory.createFurniture('')).toThrow('Furniture type not supported.')
    })

    test('should create different instances each time', () => {
        const chair1 = factory.createFurniture('chair')
        const chair2 = factory.createFurniture('chair')
        
        expect(chair1).not.toBe(chair2)
        expect(chair1).toBeInstanceOf(Chair)
        expect(chair2).toBeInstanceOf(Chair)
    })

    test('chair should have assemble method', () => {
        const chair = factory.createFurniture('chair')
        
        expect(typeof chair.assemble).toBe('function')
        
        // Mock console.log to test output
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
        chair.assemble()
        expect(consoleSpy).toHaveBeenCalledWith('Assembling a chair.')
        consoleSpy.mockRestore()
    })

    test('table should have assemble method', () => {
        const table = factory.createFurniture('table')
        
        expect(typeof table.assemble).toBe('function')
        
        // Mock console.log to test output
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
        table.assemble()
        expect(consoleSpy).toHaveBeenCalledWith('Assembling a table.')
        consoleSpy.mockRestore()
    })

    test('should be case sensitive', () => {
        expect(() => factory.createFurniture('Chair')).toThrow()
        expect(() => factory.createFurniture('TABLE')).toThrow()
        expect(() => factory.createFurniture('ChAiR')).toThrow()
    })
})
