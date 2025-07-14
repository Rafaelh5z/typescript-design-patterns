import { Post } from './Post'

export class TwitterPost extends Post {

    post() : void {
        console.log(('Posting to Twitter')) 
    }
}