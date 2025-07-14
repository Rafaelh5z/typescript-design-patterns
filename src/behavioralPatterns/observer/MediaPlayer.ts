import { Observer } from './Observer'

export class MediaPlayer extends Observer {

    update(mediaFiles: string[]): void {
        console.log('Observer: Playing Media file: %s', mediaFiles[mediaFiles.length - 1])
    }
}