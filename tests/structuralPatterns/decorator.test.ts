import { AbstractIceCream } from '../../src/structuralPatterns/decorator/AbstractIceCream'
import { IceCream } from '../../src/structuralPatterns/decorator/IceCream'
import { IceCreamDecorator } from '../../src/structuralPatterns/decorator/IceCreamDecorator'
import { Sprinkles } from '../../src/structuralPatterns/decorator/Sprinkles'
import { Syrup } from '../../src/structuralPatterns/decorator/Syrup'

describe('Decorator Pattern', () => {
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('Component (AbstractIceCream)', () => {
        test('should create basic ice cream', () => {
            const iceCream = new IceCream('vanilla')
            
            expect(iceCream).toBeInstanceOf(IceCream)
            expect(iceCream).toBeInstanceOf(AbstractIceCream)
            expect(iceCream.flavor).toBe('vanilla')
        })

        test('should add basic toppings', () => {
            const iceCream = new IceCream('chocolate')
            
            const result = iceCream.addToppings()
            
            expect(result).toBe('2 scoops of chocolate')
        })

        test('should handle different flavors', () => {
            const flavors = ['strawberry', 'mint', 'cookies and cream']
            
            flavors.forEach(flavor => {
                const iceCream = new IceCream(flavor)
                const result = iceCream.addToppings()
                expect(result).toBe(`2 scoops of ${flavor}`)
            })
        })
    })

    describe('Decorator (Sprinkles)', () => {
        test('should create sprinkles decorator', () => {
            const iceCream = new IceCream('vanilla')
            const sprinkles = new Sprinkles(iceCream)
            
            expect(sprinkles).toBeInstanceOf(Sprinkles)
            expect(sprinkles).toBeInstanceOf(IceCreamDecorator)
            expect(sprinkles.iceCream).toBe(iceCream)
        })

        test('should add sprinkles to ice cream', () => {
            const iceCream = new IceCream('chocolate')
            const sprinkles = new Sprinkles(iceCream)
            
            const result = sprinkles.addToppings()
            
            expect(result).toBe('2 scoops of chocolate and Rainbow Sprinkles')
        })

        test('should make ice cream with sprinkles', () => {
            const iceCream = new IceCream('strawberry')
            const sprinkles = new Sprinkles(iceCream)
            
            sprinkles.makeIceCream()
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Here\'s Your Ice Cream Order')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, '2 scoops of strawberry and Rainbow Sprinkles')
            expect(consoleSpy).toHaveBeenNthCalledWith(3)
        })
    })

    describe('Decorator (Syrup)', () => {
        test('should create syrup decorator', () => {
            const iceCream = new IceCream('vanilla')
            const syrup = new Syrup(iceCream)
            
            expect(syrup).toBeInstanceOf(Syrup)
            expect(syrup).toBeInstanceOf(IceCreamDecorator)
            expect(syrup.iceCream).toBe(iceCream)
        })

        test('should add syrup to ice cream', () => {
            const iceCream = new IceCream('mint')
            const syrup = new Syrup(iceCream)
            
            const result = syrup.addToppings()
            
            expect(result).toBe('2 scoops of mint and Chocolate Syrup')
        })

        test('should make ice cream with syrup', () => {
            const iceCream = new IceCream('cookies and cream')
            const syrup = new Syrup(iceCream)
            
            syrup.makeIceCream()
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Here\'s Your Ice Cream Order')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, '2 scoops of cookies and cream and Chocolate Syrup')
            expect(consoleSpy).toHaveBeenNthCalledWith(3)
        })
    })

    describe('Multiple Decorators', () => {
        test('should stack decorators (sprinkles then syrup)', () => {
            const iceCream = new IceCream('vanilla')
            const sprinkles = new Sprinkles(iceCream)
            const syrup = new Syrup(sprinkles)
            
            const result = syrup.addToppings()
            
            expect(result).toBe('2 scoops of vanilla and Rainbow Sprinkles and Chocolate Syrup')
        })

        test('should stack decorators (syrup then sprinkles)', () => {
            const iceCream = new IceCream('chocolate')
            const syrup = new Syrup(iceCream)
            const sprinkles = new Sprinkles(syrup)
            
            const result = sprinkles.addToppings()
            
            expect(result).toBe('2 scoops of chocolate and Chocolate Syrup and Rainbow Sprinkles')
        })

        test('should make complex ice cream order', () => {
            const iceCream = new IceCream('strawberry')
            const sprinkles = new Sprinkles(iceCream)
            const syrup = new Syrup(sprinkles)
            
            syrup.makeIceCream()
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Here\'s Your Ice Cream Order')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, '2 scoops of strawberry and Rainbow Sprinkles and Chocolate Syrup')
            expect(consoleSpy).toHaveBeenNthCalledWith(3)
        })

        test('should handle multiple of same decorator', () => {
            const iceCream = new IceCream('mint')
            const sprinkles1 = new Sprinkles(iceCream)
            const sprinkles2 = new Sprinkles(sprinkles1)
            
            const result = sprinkles2.addToppings()
            
            expect(result).toBe('2 scoops of mint and Rainbow Sprinkles and Rainbow Sprinkles')
        })
    })

    describe('Decorator Pattern Benefits', () => {
        test('should demonstrate runtime decoration', () => {
            const baseIceCream = new IceCream('vanilla')
            
            // Can choose decorations at runtime
            let decoratedIceCream: AbstractIceCream = baseIceCream
            
            const addSprinkles = true
            const addSyrup = true
            
            if (addSprinkles) {
                decoratedIceCream = new Sprinkles(decoratedIceCream)
            }
            
            if (addSyrup) {
                decoratedIceCream = new Syrup(decoratedIceCream)
            }
            
            const result = decoratedIceCream.addToppings()
            expect(result).toBe('2 scoops of vanilla and Rainbow Sprinkles and Chocolate Syrup')
        })

        test('should maintain component interface', () => {
            const iceCream = new IceCream('chocolate')
            const decorated = new Sprinkles(new Syrup(iceCream))
            
            // Both bare ice cream and decorated ice cream implement same interface
            expect(typeof iceCream.addToppings).toBe('function')
            expect(typeof decorated.addToppings).toBe('function')
            
            // Can use them interchangeably where AbstractIceCream is expected
            const iceCreamOrders: AbstractIceCream[] = [iceCream, decorated]
            
            iceCreamOrders.forEach(order => {
                const toppings = order.addToppings()
                expect(typeof toppings).toBe('string')
            })
        })

        test('should allow flexible decoration combinations', () => {
            const baseIceCream = new IceCream('chocolate')
            
            // Different decoration patterns
            const justSprinkles = new Sprinkles(baseIceCream)
            const justSyrup = new Syrup(baseIceCream)
            const both = new Sprinkles(new Syrup(baseIceCream))
            const reversed = new Syrup(new Sprinkles(baseIceCream))
            
            expect(justSprinkles.addToppings()).toBe('2 scoops of chocolate and Rainbow Sprinkles')
            expect(justSyrup.addToppings()).toBe('2 scoops of chocolate and Chocolate Syrup')
            expect(both.addToppings()).toBe('2 scoops of chocolate and Chocolate Syrup and Rainbow Sprinkles')
            expect(reversed.addToppings()).toBe('2 scoops of chocolate and Rainbow Sprinkles and Chocolate Syrup')
        })

        test('should demonstrate composition over inheritance', () => {
            // Instead of creating classes like VanillaWithSprinkles, ChocolateWithSyrup, etc.
            // We can compose any combination dynamically
            
            const combinations = [
                { flavor: 'vanilla', decorators: [] },
                { flavor: 'chocolate', decorators: ['sprinkles'] },
                { flavor: 'strawberry', decorators: ['syrup'] },
                { flavor: 'mint', decorators: ['sprinkles', 'syrup'] },
            ]
            
            combinations.forEach(combo => {
                let iceCream: AbstractIceCream = new IceCream(combo.flavor)
                
                combo.decorators.forEach(decorator => {
                    if (decorator === 'sprinkles') {
                        iceCream = new Sprinkles(iceCream)
                    } else if (decorator === 'syrup') {
                        iceCream = new Syrup(iceCream)
                    }
                })
                
                const result = iceCream.addToppings()
                expect(result).toContain(`2 scoops of ${combo.flavor}`)
            })
        })
    })
})
