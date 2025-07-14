import { MediaLibrary } from './MediaLibrary'
import { MediaPlayer } from './MediaPlayer'

function observerClient() {

    const library = new MediaLibrary()

    const player1 = new MediaPlayer()
    library.attach(player1)

    const player2 = new MediaPlayer()
    library.attach(player2)

    const player3 = new MediaPlayer()
    library.attach(player3)

    library.addMedia('video.mp4')
    library.addMedia('audio.mp3')

    library.detach(player3)
}

observerClient()