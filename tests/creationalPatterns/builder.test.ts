import { BurgerBuilder } from '../../src/creationalPatterns/builder/BurgerBuilder'
import { Burger } from '../../src/creationalPatterns/builder/Burger'

describe('Builder Pattern - Burger', () => {
    test('should build a basic burger', () => {
        const burger = new BurgerBuilder('Basic')
            .build()
        
        expect(burger).toBeInstanceOf(Burger)
        expect(burger.showDetails()).toContain('Basic Burger')
    })

    test('should build burger with cheese', () => {
        const burger = new BurgerBuilder('Cheese')
            .addCheese()
            .build()
        
        const details = burger.showDetails()
        expect(details).toContain('Cheese Burger')
        expect(details).toContain('Cheese')
    })

    test('should build burger with all ingredients', () => {
        const burger = new BurgerBuilder('Deluxe')
            .addCheese()
            .addBacon()
            .addLettuce()
            .addTomato()
            .build()
        
        const details = burger.showDetails()
        expect(details).toContain('Deluxe Burger')
        expect(details).toContain('Cheese')
        expect(details).toContain('Bacon')
        expect(details).toContain('Lettuce')
        expect(details).toContain('Tomato')
    })

    test('should support method chaining', () => {
        const builder = new BurgerBuilder('Chained')
        
        // Each method should return the builder instance
        expect(builder.addCheese()).toBe(builder)
        expect(builder.addBacon()).toBe(builder)
        expect(builder.addLettuce()).toBe(builder)
        expect(builder.addTomato()).toBe(builder)
    })

    test('should build different burgers independently', () => {
        const builder1 = new BurgerBuilder('Simple').addCheese()
        const builder2 = new BurgerBuilder('Complex').addBacon().addLettuce()
        
        const burger1 = builder1.build()
        const burger2 = builder2.build()
        
        const details1 = burger1.showDetails()
        const details2 = burger2.showDetails()
        
        expect(details1).toContain('Simple')
        expect(details1).toContain('Cheese')
        expect(details1).not.toContain('Bacon')
        
        expect(details2).toContain('Complex')
        expect(details2).toContain('Bacon')
        expect(details2).toContain('Lettuce')
        expect(details2).not.toContain('Cheese')
    })

    test('should create burger without optional ingredients', () => {
        const burger = new BurgerBuilder('Plain').build()
        const details = burger.showDetails()
        
        expect(details).toContain('Plain Burger')
        expect(details).not.toContain('Cheese')
        expect(details).not.toContain('Bacon')
        expect(details).not.toContain('Lettuce')
        expect(details).not.toContain('Tomato')
    })
})
