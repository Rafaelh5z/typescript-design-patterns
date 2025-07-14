import { Command } from './Command'
import { Train } from './Train'

export class MoveTrainCommand extends Command {
    
    location: string

    constructor(location: string) {
        super()
        this.location = location
    }

    execute(train: Train) {
        train.location = this.location
        console.log('The train is locatied at: ' + train.location)
    }
}