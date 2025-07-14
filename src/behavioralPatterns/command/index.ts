import { AddPassengerCommand } from './AddPassengerCommand'
import { Invoker } from './Invoker'
import { MoveTrainCommand } from './MoveTrainCommand'
import { Train } from './Train'

function commandClient() {

    const train = new Train('Express', 'Station A', [])


    const addPassengerCommand = new AddPassengerCommand('Alice')
    const moveTrainCommand = new MoveTrainCommand('Station B')

    const invoker = new Invoker()

    invoker.setCommand(addPassengerCommand)
    invoker.executeCommand(train)

    invoker.setCommand(moveTrainCommand)
    invoker.executeCommand(train)
}

commandClient()