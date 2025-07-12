import { Instagram } from './Instagram'
import { Publisher } from './Publisher'
import { TikTok } from './Tiktok'
import { TikTokAdapter } from './TiktokAdapter'

function adapterClient() {

    const publisher = new Publisher()
    const instagram = new Instagram()

    publisher.publishContentOnPlatform(instagram)

    // Using the Adapter 
    const tikTok = new TikTok()
    const tikTokAdapter = new TikTokAdapter(tikTok)

    publisher.publishContentOnPlatform(tikTokAdapter)
}

adapterClient()