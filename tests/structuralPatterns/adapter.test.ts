import { Platform } from '../../src/structuralPatterns/adapter/Platform'
import { Instagram } from '../../src/structuralPatterns/adapter/Instagram'
import { TikTok } from '../../src/structuralPatterns/adapter/Tiktok'
import { TikTokAdapter } from '../../src/structuralPatterns/adapter/TiktokAdapter'
import { Publisher } from '../../src/structuralPatterns/adapter/Publisher'

describe('Adapter Pattern', () => {
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('Platform (Target Interface)', () => {
        test('should create Instagram platform', () => {
            const instagram = new Instagram()
            
            expect(instagram).toBeInstanceOf(Instagram)
            expect(instagram).toBeInstanceOf(Platform)
        })

        test('should post media to Instagram', () => {
            const instagram = new Instagram()
            
            instagram.postMedia()
            
            expect(consoleSpy).toHaveBeenCalledWith('Instagram has published your post.')
        })
    })

    describe('Adaptee (TikTok)', () => {
        test('should create TikTok instance', () => {
            const tiktok = new TikTok()
            
            expect(tiktok).toBeInstanceOf(TikTok)
        })

        test('should schedule media on TikTok', () => {
            const tiktok = new TikTok()
            
            tiktok.scheduleMedia()
            
            expect(consoleSpy).toHaveBeenCalledWith('TikTok is ready to schedule your post.')
        })
    })

    describe('Adapter (TikTokAdapter)', () => {
        test('should create TikTok adapter', () => {
            const tiktok = new TikTok()
            const adapter = new TikTokAdapter(tiktok)
            
            expect(adapter).toBeInstanceOf(TikTokAdapter)
            expect(adapter).toBeInstanceOf(Platform)
            expect(adapter.tikTok).toBe(tiktok)
        })

        test('should adapt TikTok to Platform interface', () => {
            const tiktok = new TikTok()
            const adapter = new TikTokAdapter(tiktok)
            
            adapter.postMedia()
            
            expect(consoleSpy).toHaveBeenCalledTimes(2)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'TikTok is ready to schedule your post.')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Adapter has posted the TikTok content.')
        })

        test('should allow TikTok to be used as Platform', () => {
            const tiktok = new TikTok()
            const adapter = new TikTokAdapter(tiktok)
            
            // Should be able to use adapter wherever Platform is expected
            const platforms: Platform[] = [new Instagram(), adapter]
            
            platforms.forEach(platform => platform.postMedia())
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Instagram has published your post.')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'TikTok is ready to schedule your post.')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Adapter has posted the TikTok content.')
        })
    })

    describe('Publisher Integration', () => {
        test('should create publisher', () => {
            const publisher = new Publisher()
            
            expect(publisher).toBeInstanceOf(Publisher)
        })

        test('should publish to platforms using adapter', () => {
            const publisher = new Publisher()
            const instagram = new Instagram()
            const tiktok = new TikTok()
            const tiktokAdapter = new TikTokAdapter(tiktok)
            
            publisher.publishContentOnPlatform(instagram)
            publisher.publishContentOnPlatform(tiktokAdapter)
            
            expect(consoleSpy).toHaveBeenCalledTimes(5)
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Pubisher is ready to post your content')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Instagram has published your post.')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Pubisher is ready to post your content')
            expect(consoleSpy).toHaveBeenNthCalledWith(4, 'TikTok is ready to schedule your post.')
            expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Adapter has posted the TikTok content.')
        })

        test('should handle multiple TikTok adapters', () => {
            const publisher = new Publisher()
            const tiktok1 = new TikTok()
            const tiktok2 = new TikTok()
            const adapter1 = new TikTokAdapter(tiktok1)
            const adapter2 = new TikTokAdapter(tiktok2)
            
            publisher.publishContentOnPlatform(adapter1)
            publisher.publishContentOnPlatform(adapter2)
            
            expect(consoleSpy).toHaveBeenCalledTimes(6)
            // First adapter
            expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Pubisher is ready to post your content')
            expect(consoleSpy).toHaveBeenNthCalledWith(2, 'TikTok is ready to schedule your post.')
            expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Adapter has posted the TikTok content.')
            // Second adapter
            expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Pubisher is ready to post your content')
            expect(consoleSpy).toHaveBeenNthCalledWith(5, 'TikTok is ready to schedule your post.')
            expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Adapter has posted the TikTok content.')
        })

        test('should demonstrate publisher working with different platforms', () => {
            const publisher = new Publisher()
            const platforms = [
                new Instagram(),
                new TikTokAdapter(new TikTok()),
            ]
            
            platforms.forEach(platform => {
                publisher.publishContentOnPlatform(platform)
            })
            
            expect(consoleSpy).toHaveBeenCalledTimes(5)
            expect(consoleSpy).toHaveBeenCalledWith('Pubisher is ready to post your content')
            expect(consoleSpy).toHaveBeenCalledWith('Instagram has published your post.')
            expect(consoleSpy).toHaveBeenCalledWith('TikTok is ready to schedule your post.')
            expect(consoleSpy).toHaveBeenCalledWith('Adapter has posted the TikTok content.')
        })
    })

    describe('Adapter Pattern Benefits', () => {
        test('should demonstrate adapter pattern flexibility', () => {
            // Different APIs that need to work together
            const instagram = new Instagram() // Native Platform
            const tiktok = new TikTok() // Incompatible API
            const adapter = new TikTokAdapter(tiktok) // Makes TikTok compatible
            
            // Both can be used through the same interface
            const platforms: Platform[] = [instagram, adapter]
            
            platforms.forEach((platform, index) => {
                platform.postMedia()
                
                if (index === 0) {
                    expect(consoleSpy).toHaveBeenLastCalledWith('Instagram has published your post.')
                } else {
                    expect(consoleSpy).toHaveBeenLastCalledWith('Adapter has posted the TikTok content.')
                }
            })
        })

        test('should maintain original TikTok functionality through adapter', () => {
            const tiktok = new TikTok()
            const adapter = new TikTokAdapter(tiktok)
            
            // Can still use TikTok directly
            tiktok.scheduleMedia()
            expect(consoleSpy).toHaveBeenCalledWith('TikTok is ready to schedule your post.')
            
            consoleSpy.mockClear()
            
            // And also use it through adapter
            adapter.postMedia()
            expect(consoleSpy).toHaveBeenCalledWith('TikTok is ready to schedule your post.')
            expect(consoleSpy).toHaveBeenCalledWith('Adapter has posted the TikTok content.')
        })
    })
})
