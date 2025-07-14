import { Animal } from '../../src/behavioralPatterns/strategy/Animal'
import { Dog } from '../../src/behavioralPatterns/strategy/Dog'
import { Cat } from '../../src/behavioralPatterns/strategy/Cat'
import { Context } from '../../src/behavioralPatterns/strategy/Context'
import { BarkStrategy } from '../../src/behavioralPatterns/strategy/BarkStrategy'
import { SpeakStrategy } from '../../src/behavioralPatterns/strategy/SpeakStrategy'

describe('Strategy Pattern', () => {
    describe('Animal Implementation', () => {
        test('should create dog and make sound', () => {
            const dog = new Dog()
            
            expect(dog).toBeInstanceOf(Dog)
            expect(dog).toBeInstanceOf(Animal)
            expect(dog.makeSound()).toBe('Woof')
        })

        test('should create cat and make sound', () => {
            const cat = new Cat()
            
            expect(cat).toBeInstanceOf(Cat)
            expect(cat).toBeInstanceOf(Animal)
            expect(cat.makeSound()).toBe('Meow')
        })

        test('should demonstrate polymorphism', () => {
            const animals: Animal[] = [new Dog(), new Cat()]
            const sounds = animals.map(animal => animal.makeSound())
            
            expect(sounds).toEqual(['Woof', 'Meow'])
        })
    })

    describe('Context with Strategy', () => {
        test('should create context with bark strategy', () => {
            const dog = new Dog()
            const barkStrategy = new BarkStrategy(dog)
            const context = new Context(barkStrategy)
            
            expect(context).toBeInstanceOf(Context)
            expect(context.strategy).toBeInstanceOf(BarkStrategy)
        })

        test('should execute bark strategy with dog', () => {
            const dog = new Dog()
            const barkStrategy = new BarkStrategy(dog)
            const context = new Context(barkStrategy)
            
            const result = context.executeStrategy()
            
            expect(result).toBe('Woof')
        })

        test('should execute speak strategy with cat', () => {
            const cat = new Cat()
            const speakStrategy = new SpeakStrategy(cat)
            const context = new Context(speakStrategy)
            
            const result = context.executeStrategy()
            
            expect(result).toBe('Meow')
        })

        test('should change strategy at runtime', () => {
            const dog = new Dog()
            const cat = new Cat()
            const barkStrategy = new BarkStrategy(dog)
            const speakStrategy = new SpeakStrategy(cat)
            const context = new Context(barkStrategy)
            
            // Initial strategy with dog
            expect(context.executeStrategy()).toBe('Woof')
            
            // Change strategy to cat
            context.setStrategy(speakStrategy)
            expect(context.executeStrategy()).toBe('Meow')
            
            // Change back to dog
            context.setStrategy(barkStrategy)
            expect(context.executeStrategy()).toBe('Woof')
        })

        test('should demonstrate strategy pattern flexibility', () => {
            const dog = new Dog()
            const cat = new Cat()
            const strategies = [new BarkStrategy(dog), new SpeakStrategy(cat)]
            const context = new Context(strategies[0])
            const results: string[] = []
            
            strategies.forEach(strategy => {
                context.setStrategy(strategy)
                results.push(context.executeStrategy())
            })
            
            expect(results).toEqual(['Woof', 'Meow'])
        })

        test('should handle multiple contexts with different strategies', () => {
            const dog = new Dog()
            const cat = new Cat()
            const context1 = new Context(new BarkStrategy(dog))
            const context2 = new Context(new SpeakStrategy(cat))
            
            expect(context1.executeStrategy()).toBe('Woof')
            expect(context2.executeStrategy()).toBe('Meow')
        })

        test('should work with same animal in different strategies', () => {
            const dog = new Dog()
            const barkStrategy = new BarkStrategy(dog)
            const speakStrategy = new SpeakStrategy(dog)
            
            const context1 = new Context(barkStrategy)
            const context2 = new Context(speakStrategy)
            
            // Both strategies use the same dog but through different strategy implementations
            expect(context1.executeStrategy()).toBe('Woof')
            expect(context2.executeStrategy()).toBe('Woof') // Same animal, same result
        })
    })
})
