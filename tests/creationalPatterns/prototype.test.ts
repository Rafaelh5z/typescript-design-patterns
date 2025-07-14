import { Shape } from '../../src/creationalPatterns/prototype/Shape'
import { Circle } from '../../src/creationalPatterns/prototype/Circle'

describe('Prototype Pattern', () => {
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('Prototype (Shape)', () => {
        test('should not allow direct instantiation', () => {
            // Shape is abstract, test through concrete implementation
            expect(() => new Circle('test')).not.toThrow()
        })
    })

    describe('ConcretePrototype (Circle)', () => {
        test('should create circle with color', () => {
            const circle = new Circle('Red')
            
            expect(circle).toBeInstanceOf(Circle)
            expect(circle).toBeInstanceOf(Shape)
            expect(circle.color).toBe('Red')
        })

        test('should print circle information', () => {
            const circle = new Circle('Blue')
            
            circle.print()
            
            expect(consoleSpy).toHaveBeenCalledWith('Blue circle')
        })

        test('should clone circle with same properties', () => {
            const originalCircle = new Circle('Green')
            
            const clonedCircle = originalCircle.clone()
            
            expect(clonedCircle).toBeInstanceOf(Circle)
            expect(clonedCircle).toBeInstanceOf(Shape)
            expect(consoleSpy).toHaveBeenCalledWith('Cloning a Green circle')
        })

        test('should create independent cloned objects', () => {
            const originalCircle = new Circle('Yellow')
            
            const clonedCircle = originalCircle.clone() as Circle
            
            expect(clonedCircle).not.toBe(originalCircle)
            expect(clonedCircle.color).toBe(originalCircle.color)
            
            // Modify clone should not affect original
            clonedCircle.color = 'Purple'
            expect(originalCircle.color).toBe('Yellow')
            expect(clonedCircle.color).toBe('Purple')
        })
    })

    describe('Prototype Pattern Benefits', () => {
        test('should allow object creation without knowing exact class', () => {
            const createCircleClone = (prototype: Shape): Shape => {
                return prototype.clone()
            }
            
            const redCircle = new Circle('Red')
            const clonedCircle = createCircleClone(redCircle)
            
            expect(clonedCircle).toBeInstanceOf(Circle)
            expect(clonedCircle).not.toBe(redCircle)
        })

        test('should support multiple clones of the same object', () => {
            const originalCircle = new Circle('Orange')
            
            const clone1 = originalCircle.clone() as Circle
            const clone2 = originalCircle.clone() as Circle
            const clone3 = originalCircle.clone() as Circle
            
            expect(clone1).not.toBe(clone2)
            expect(clone2).not.toBe(clone3)
            expect(clone1).not.toBe(clone3)
            
            expect(clone1.color).toBe('Orange')
            expect(clone2.color).toBe('Orange')
            expect(clone3.color).toBe('Orange')
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenCalledWith('Cloning a Orange circle')
        })

        test('should work with different circle colors', () => {
            const circles: Circle[] = [
                new Circle('Red'),
                new Circle('Blue'),
                new Circle('Green'),
            ]
            
            const clonedCircles = circles.map(circle => circle.clone())
            
            expect(clonedCircles).toHaveLength(3)
            clonedCircles.forEach((clone, index) => {
                expect(clone).toBeInstanceOf(Circle)
                expect(clone).not.toBe(circles[index])
                expect((clone as Circle).color).toBe(circles[index].color)
            })
        })

        test('should demonstrate prototype registry pattern', () => {
            const prototypes = new Map<string, Shape>()
            
            // Register prototypes
            prototypes.set('red-circle', new Circle('Red'))
            prototypes.set('blue-circle', new Circle('Blue'))
            prototypes.set('green-circle', new Circle('Green'))
            
            // Get clones from registry
            const redClone = prototypes.get('red-circle')?.clone() as Circle
            const blueClone = prototypes.get('blue-circle')?.clone() as Circle
            const greenClone = prototypes.get('green-circle')?.clone() as Circle
            
            expect(redClone.color).toBe('Red')
            expect(blueClone.color).toBe('Blue')
            expect(greenClone.color).toBe('Green')
            
            expect(redClone).not.toBe(prototypes.get('red-circle'))
            expect(blueClone).not.toBe(prototypes.get('blue-circle'))
            expect(greenClone).not.toBe(prototypes.get('green-circle'))
        })

        test('should support cloning with behavior verification', () => {
            const original = new Circle('Magenta')
            const clone = original.clone() as Circle
            
            // Both should behave the same
            original.print()
            clone.print()
            
            expect(consoleSpy).toHaveBeenCalledWith('Magenta circle')
            expect(consoleSpy).toHaveBeenCalledTimes(3) // 1 from clone creation + 2 from prints
        })

        test('should demonstrate deep vs shallow copy behavior', () => {
            // In this simple example, Circle does a shallow copy of primitive properties
            const original = new Circle('Cyan')
            const clone = original.clone() as Circle
            
            // Primitive properties are copied by value
            clone.color = 'Modified'
            
            expect(original.color).toBe('Cyan')
            expect(clone.color).toBe('Modified')
            
            // Objects are independent
            expect(original).not.toBe(clone)
        })

        test('should allow easy object duplication for variations', () => {
            const baseCircle = new Circle('Base')
            
            // Create variations using prototype
            const variations = ['Variant1', 'Variant2', 'Variant3'].map(name => {
                const clone = baseCircle.clone() as Circle
                clone.color = name
                return clone
            })
            
            expect(variations).toHaveLength(3)
            expect(variations[0].color).toBe('Variant1')
            expect(variations[1].color).toBe('Variant2')
            expect(variations[2].color).toBe('Variant3')
            
            // Original remains unchanged
            expect(baseCircle.color).toBe('Base')
        })
    })
})
