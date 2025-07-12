import { Database } from './Database'

function singletonClient() {

    for (let i = 0; i < 5; i++ ){
    
        Database.getInstance()
    }
}

singletonClient()