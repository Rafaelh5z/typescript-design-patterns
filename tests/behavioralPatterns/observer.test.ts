import { MediaLibrary } from '../../src/behavioralPatterns/observer/MediaLibrary'
import { MediaPlayer } from '../../src/behavioralPatterns/observer/MediaPlayer'

describe('Observer Pattern - MediaLibrary', () => {
    let mediaLibrary: MediaLibrary
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        mediaLibrary = new MediaLibrary()
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    test('should create media library instance', () => {
        expect(mediaLibrary).toBeInstanceOf(MediaLibrary)
        expect(mediaLibrary.observers).toEqual([])
        expect(mediaLibrary.mediaFiles).toEqual([])
    })

    test('should attach observer', () => {
        const observer = new MediaPlayer()
        
        mediaLibrary.attach(observer)
        
        expect(mediaLibrary.observers).toContain(observer)
        expect(mediaLibrary.observers).toHaveLength(1)
        expect(consoleSpy).toHaveBeenCalledWith('Subject: Attached an observer.')
    })

    test('should attach multiple observers', () => {
        const observer1 = new MediaPlayer()
        const observer2 = new MediaPlayer()
        
        mediaLibrary.attach(observer1)
        mediaLibrary.attach(observer2)
        
        expect(mediaLibrary.observers).toContain(observer1)
        expect(mediaLibrary.observers).toContain(observer2)
        expect(mediaLibrary.observers).toHaveLength(2)
    })

    test('should detach observer', () => {
        const observer1 = new MediaPlayer()
        const observer2 = new MediaPlayer()
        
        mediaLibrary.attach(observer1)
        mediaLibrary.attach(observer2)
        
        mediaLibrary.detach(observer1)
        
        expect(mediaLibrary.observers).not.toContain(observer1)
        expect(mediaLibrary.observers).toContain(observer2)
        expect(mediaLibrary.observers).toHaveLength(1)
        expect(consoleSpy).toHaveBeenCalledWith('Subject: Detached  observer.')
    })

    test('should handle detaching non-existent observer', () => {
        const observer1 = new MediaPlayer()
        const observer2 = new MediaPlayer()
        
        mediaLibrary.attach(observer1)
        
        mediaLibrary.detach(observer2) // This observer was never attached
        
        expect(mediaLibrary.observers).toContain(observer1)
        expect(mediaLibrary.observers).toHaveLength(1)
        expect(consoleSpy).toHaveBeenCalledWith('Observer does not exist')
    })

    test('should notify observers when media is added', () => {
        const observer1 = new MediaPlayer()
        const observer2 = new MediaPlayer()
        
        mediaLibrary.attach(observer1)
        mediaLibrary.attach(observer2)
        
        mediaLibrary.addMedia('song1.mp3')
        
        expect(mediaLibrary.mediaFiles).toContain('song1.mp3')
        expect(consoleSpy).toHaveBeenCalledWith('Observer: Playing Media file: %s', 'song1.mp3')
    })

    test('should notify observers with current media list', () => {
        const observer = new MediaPlayer()
        mediaLibrary.attach(observer)
        
        mediaLibrary.addMedia('song1.mp3')
        mediaLibrary.addMedia('song2.mp3')
        
        expect(mediaLibrary.mediaFiles).toEqual(['song1.mp3', 'song2.mp3'])
        expect(consoleSpy).toHaveBeenCalledWith('Observer: Playing Media file: %s', 'song1.mp3')
        expect(consoleSpy).toHaveBeenCalledWith('Observer: Playing Media file: %s', 'song2.mp3')
    })

    test('should not notify detached observers', () => {
        const observer1 = new MediaPlayer()
        const observer2 = new MediaPlayer()
        
        mediaLibrary.attach(observer1)
        mediaLibrary.attach(observer2)
        
        mediaLibrary.detach(observer1)
        mediaLibrary.addMedia('song1.mp3')
        
        expect(consoleSpy).toHaveBeenCalledWith('Observer: Playing Media file: %s', 'song1.mp3')
        expect(consoleSpy).toHaveBeenCalledTimes(4) // attach x2, detach x1, update x1
    })

    test('should handle multiple media additions', () => {
        const observer = new MediaPlayer()
        mediaLibrary.attach(observer)
        
        const mediaFiles = ['song1.mp3', 'song2.mp3', 'video1.mp4']
        
        mediaFiles.forEach(file => mediaLibrary.addMedia(file))
        
        expect(mediaLibrary.mediaFiles).toEqual(mediaFiles)
        expect(consoleSpy).toHaveBeenCalledTimes(4) // 1 attach message + 3 update messages
    })
})
