import { InstagramPost } from './InstagramPost'
import { TikTokPost } from './TiktokPost'
import { TwitterPost } from './TwitterPost'

export class Publisher  {
    
    private instagram = new InstagramPost()
    private tikTok = new TikTokPost()
    private twitter = new TwitterPost()

    
    publish() : void {
        this.instagram.post()
        this.tikTok.post()
        this.twitter.post()
    }
}