import { Publisher } from '../../src/structuralPatterns/facade/Publisher'

describe('Facade Pattern - Publisher', () => {
    let publisher: Publisher
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        publisher = new Publisher()
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    test('should create publisher instance', () => {
        expect(publisher).toBeInstanceOf(Publisher)
        expect(typeof publisher.publish).toBe('function')
    })

    test('should publish to all social media platforms', () => {
        publisher.publish()

        // Verify that all platforms were called
        expect(consoleSpy).toHaveBeenCalledTimes(3)
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Posting to Instagram')
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Posting to TikTok')
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Posting to Twitter')
    })

    test('should simplify complex social media operations', () => {
        // The facade should provide a simple interface
        // to complex subsystem operations
        
        // Before: client would need to know about each platform
        // After: client just calls publish() once
        
        expect(() => publisher.publish()).not.toThrow()
    })

    test('should encapsulate subsystem complexity', () => {
        // Client doesn't need to know about:
        // - InstagramPost
        // - TikTokPost  
        // - TwitterPost
        // - Individual post() methods
        
        publisher.publish()
        
        // Just verify the facade works without exposing internals
        expect(consoleSpy).toHaveBeenCalledTimes(3)
    })

    test('should be able to publish multiple times', () => {
        publisher.publish()
        publisher.publish()

        expect(consoleSpy).toHaveBeenCalledTimes(6)
        
        // First publication
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Posting to Instagram')
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Posting to TikTok')
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Posting to Twitter')
        
        // Second publication
        expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Posting to Instagram')
        expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Posting to TikTok')
        expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Posting to Twitter')
    })
})
