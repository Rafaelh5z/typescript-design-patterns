import { Platform } from './Platform'

export class Publisher {
    
    constructor () {}

    publishContentOnPlatform(platform: Platform){

        console.log('Pubisher is ready to post your content')
        platform.postMedia()
    }
}