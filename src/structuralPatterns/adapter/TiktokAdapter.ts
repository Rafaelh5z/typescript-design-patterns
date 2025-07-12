import { Platform } from './Platform'
import { TikTok } from './Tiktok'

export class TikTokAdapter extends Platform {

    tikTok : TikTok
    
    constructor(tikTok : TikTok) {
    
        super()
        this.tikTok = tikTok
    }

    postMedia() {
        this.tikTok.scheduleMedia()
        console.log('Adapter has posted the TikTok content.')
    }
}