import { Observer } from './Observer'
import { Subject } from './Subject'

export class MediaLibrary extends Subject {
    observers: Observer[] = []
    mediaFiles: string[] = []


    attach(observer: Observer) {
        console.log('Subject: Attached an observer.')
        this.observers.push(observer)
    }

    detach(observer: Observer) {
        const index = this.observers.indexOf(observer)
        if (index === -1) {
            return console.log('Observer does not exist')
        }

        this.observers.splice(index, 1)
        console.log('Subject: Detached  observer.')
    }

    addMedia(media: string) {
        this.mediaFiles.push(media)
        this.notify()
    }

    notify(): void {
        this.observers.forEach(observer => observer.update(this.mediaFiles))
    }
}