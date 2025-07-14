import { Command } from './Command'
import { Train } from './Train'

export class AddPassengerCommand extends Command {
    passenger: string

    constructor(passenger: string) {
        super()
        this.passenger = passenger
    }

    execute(train: Train) {
        train.passengers.push(this.passenger)
        console.log('New passenger on board: ' + this.passenger)
    }
}