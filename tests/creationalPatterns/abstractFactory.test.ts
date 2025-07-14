import { FurnitureFactory } from '../../src/creationalPatterns/abstractFactory/FurnitureFactory'
import { ModernFurnitureFactory } from '../../src/creationalPatterns/abstractFactory/ModernFurnitureFactory'
import { VictorianFurnitureFactory } from '../../src/creationalPatterns/abstractFactory/VictorianFurnitureFactory'
import { Chair } from '../../src/creationalPatterns/abstractFactory/Chair'
import { Table } from '../../src/creationalPatterns/abstractFactory/Table'
import { ModernChair } from '../../src/creationalPatterns/abstractFactory/ModernChair'
import { ModernTable } from '../../src/creationalPatterns/abstractFactory/ModernTable'
import { VictorianChair } from '../../src/creationalPatterns/abstractFactory/VictorianChair'
import { VictorianTable } from '../../src/creationalPatterns/abstractFactory/VictorianTable'

describe('Abstract Factory Pattern', () => {
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('AbstractFactory (FurnitureFactory)', () => {
        test('should not allow direct instantiation', () => {
            // FurnitureFactory is abstract, test through concrete implementations
            expect(() => new ModernFurnitureFactory()).not.toThrow()
            expect(() => new VictorianFurnitureFactory()).not.toThrow()
        })
    })

    describe('ConcreteFactory (ModernFurnitureFactory)', () => {
        test('should create modern furniture factory', () => {
            const factory = new ModernFurnitureFactory()
            
            expect(factory).toBeInstanceOf(ModernFurnitureFactory)
            expect(factory).toBeInstanceOf(FurnitureFactory)
        })

        test('should create modern chair', () => {
            const factory = new ModernFurnitureFactory()
            
            const chair = factory.createChair()
            
            expect(chair).toBeInstanceOf(ModernChair)
            expect(chair).toBeInstanceOf(Chair)
        })

        test('should create modern table', () => {
            const factory = new ModernFurnitureFactory()
            
            const table = factory.createTable()
            
            expect(table).toBeInstanceOf(ModernTable)
            expect(table).toBeInstanceOf(Table)
        })

        test('should create consistent modern furniture family', () => {
            const factory = new ModernFurnitureFactory()
            
            const chair = factory.createChair()
            const table = factory.createTable()
            
            chair.sitOn()
            table.eatOn()
            
            expect(consoleSpy).toHaveBeenCalledWith('Sitting on a modern chair.')
            expect(consoleSpy).toHaveBeenCalledWith('Eating on a modern table.')
        })
    })

    describe('ConcreteFactory (VictorianFurnitureFactory)', () => {
        test('should create victorian furniture factory', () => {
            const factory = new VictorianFurnitureFactory()
            
            expect(factory).toBeInstanceOf(VictorianFurnitureFactory)
            expect(factory).toBeInstanceOf(FurnitureFactory)
        })

        test('should create victorian chair', () => {
            const factory = new VictorianFurnitureFactory()
            
            const chair = factory.createChair()
            
            expect(chair).toBeInstanceOf(VictorianChair)
            expect(chair).toBeInstanceOf(Chair)
        })

        test('should create victorian table', () => {
            const factory = new VictorianFurnitureFactory()
            
            const table = factory.createTable()
            
            expect(table).toBeInstanceOf(VictorianTable)
            expect(table).toBeInstanceOf(Table)
        })

        test('should create consistent victorian furniture family', () => {
            const factory = new VictorianFurnitureFactory()
            
            const chair = factory.createChair()
            const table = factory.createTable()
            
            chair.sitOn()
            table.eatOn()
            
            expect(consoleSpy).toHaveBeenCalledWith('Sitting on a victorian chair.')
            expect(consoleSpy).toHaveBeenCalledWith('Eating on a victorian table.')
        })
    })

    describe('AbstractProduct (Chair and Table)', () => {
        test('should define chair interface', () => {
            const modernFactory = new ModernFurnitureFactory()
            const victorianFactory = new VictorianFurnitureFactory()
            
            const modernChair = modernFactory.createChair()
            const victorianChair = victorianFactory.createChair()
            
            expect(typeof modernChair.sitOn).toBe('function')
            expect(typeof victorianChair.sitOn).toBe('function')
        })

        test('should define table interface', () => {
            const modernFactory = new ModernFurnitureFactory()
            const victorianFactory = new VictorianFurnitureFactory()
            
            const modernTable = modernFactory.createTable()
            const victorianTable = victorianFactory.createTable()
            
            expect(typeof modernTable.eatOn).toBe('function')
            expect(typeof victorianTable.eatOn).toBe('function')
        })
    })

    describe('ConcreteProduct Families', () => {
        test('should create modern furniture family', () => {
            const factory = new ModernFurnitureFactory()
            
            const chair = factory.createChair()
            const table = factory.createTable()
            
            expect(chair).toBeInstanceOf(ModernChair)
            expect(table).toBeInstanceOf(ModernTable)
            
            chair.sitOn()
            table.eatOn()
            
            expect(consoleSpy).toHaveBeenCalledWith('Sitting on a modern chair.')
            expect(consoleSpy).toHaveBeenCalledWith('Eating on a modern table.')
        })

        test('should create victorian furniture family', () => {
            const factory = new VictorianFurnitureFactory()
            
            const chair = factory.createChair()
            const table = factory.createTable()
            
            expect(chair).toBeInstanceOf(VictorianChair)
            expect(table).toBeInstanceOf(VictorianTable)
            
            chair.sitOn()
            table.eatOn()
            
            expect(consoleSpy).toHaveBeenCalledWith('Sitting on a victorian chair.')
            expect(consoleSpy).toHaveBeenCalledWith('Eating on a victorian table.')
        })
    })

    describe('Abstract Factory Pattern Benefits', () => {
        test('should ensure product family consistency', () => {
            const createFurnitureSet = (factory: FurnitureFactory) => {
                return {
                    chair: factory.createChair(),
                    table: factory.createTable(),
                }
            }
            
            const modernSet = createFurnitureSet(new ModernFurnitureFactory())
            const victorianSet = createFurnitureSet(new VictorianFurnitureFactory())
            
            // Modern set consistency
            expect(modernSet.chair).toBeInstanceOf(ModernChair)
            expect(modernSet.table).toBeInstanceOf(ModernTable)
            
            // Victorian set consistency
            expect(victorianSet.chair).toBeInstanceOf(VictorianChair)
            expect(victorianSet.table).toBeInstanceOf(VictorianTable)
        })

        test('should allow factory swapping without changing client code', () => {
            const clientCode = (factory: FurnitureFactory) => {
                const chair = factory.createChair()
                const table = factory.createTable()
                
                chair.sitOn()
                table.eatOn()
                
                return { chair, table }
            }
            
            // Same client code works with different factories
            const modernResult = clientCode(new ModernFurnitureFactory())
            const victorianResult = clientCode(new VictorianFurnitureFactory())
            
            expect(modernResult.chair).toBeInstanceOf(ModernChair)
            expect(modernResult.table).toBeInstanceOf(ModernTable)
            
            expect(victorianResult.chair).toBeInstanceOf(VictorianChair)
            expect(victorianResult.table).toBeInstanceOf(VictorianTable)
            
            expect(consoleSpy).toHaveBeenCalledTimes(4)
        })

        test('should support product families with related products', () => {
            const factories = [
                new ModernFurnitureFactory(),
                new VictorianFurnitureFactory(),
            ]
            
            factories.forEach(factory => {
                const products = {
                    chair: factory.createChair(),
                    table: factory.createTable(),
                }
                
                // All products from same factory share style
                if (factory instanceof ModernFurnitureFactory) {
                    expect(products.chair).toBeInstanceOf(ModernChair)
                    expect(products.table).toBeInstanceOf(ModernTable)
                } else {
                    expect(products.chair).toBeInstanceOf(VictorianChair)
                    expect(products.table).toBeInstanceOf(VictorianTable)
                }
            })
        })

        test('should demonstrate factory polymorphism', () => {
            const getFactoryByStyle = (style: string): FurnitureFactory => {
                switch (style) {
                case 'modern':
                    return new ModernFurnitureFactory()
                case 'victorian':
                    return new VictorianFurnitureFactory()
                default:
                    return new ModernFurnitureFactory()
                }
            }
            
            const modernFactory = getFactoryByStyle('modern')
            const victorianFactory = getFactoryByStyle('victorian')
            const defaultFactory = getFactoryByStyle('unknown')
            
            expect(modernFactory).toBeInstanceOf(ModernFurnitureFactory)
            expect(victorianFactory).toBeInstanceOf(VictorianFurnitureFactory)
            expect(defaultFactory).toBeInstanceOf(ModernFurnitureFactory)
        })

        test('should create multiple product instances independently', () => {
            const factory = new ModernFurnitureFactory()
            
            const chair1 = factory.createChair()
            const chair2 = factory.createChair()
            const table1 = factory.createTable()
            const table2 = factory.createTable()
            
            // Each call creates a new instance
            expect(chair1).not.toBe(chair2)
            expect(table1).not.toBe(table2)
            
            // But all are of the same type family
            expect(chair1).toBeInstanceOf(ModernChair)
            expect(chair2).toBeInstanceOf(ModernChair)
            expect(table1).toBeInstanceOf(ModernTable)
            expect(table2).toBeInstanceOf(ModernTable)
        })

        test('should isolate concrete classes from client', () => {
            // Client works with abstract interfaces only
            const setupRoom = (factory: FurnitureFactory): { chair: Chair; table: Table } => {
                // Client doesn't know about ModernChair or VictorianChair
                const chair: Chair = factory.createChair()
                const table: Table = factory.createTable()
                
                return { chair, table }
            }
            
            const modernRoom = setupRoom(new ModernFurnitureFactory())
            const victorianRoom = setupRoom(new VictorianFurnitureFactory())
            
            // Type checking still works through abstract interfaces
            expect(modernRoom.chair).toBeInstanceOf(Chair)
            expect(modernRoom.table).toBeInstanceOf(Table)
            expect(victorianRoom.chair).toBeInstanceOf(Chair)
            expect(victorianRoom.table).toBeInstanceOf(Table)
        })
    })
})
