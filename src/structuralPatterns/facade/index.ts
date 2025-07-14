import { Publisher } from './Publisher'

function publisherClient() {
    
    const publisher = new Publisher()

    publisher.publish()
}


publisherClient()