import { Command } from './Command'
import { Train } from './Train'

export class Invoker {

    command!: Command


    setCommand(command: Command) {
        this.command = command
    }

    executeCommand(train: Train) {
        this.command.execute(train)
    }
}